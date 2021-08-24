const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');
const storage = require('../services/storageService');
const multer = require('multer');
const upload = multer({ storage });

//INSERIR NOVA MOBILIA
router.post('/register', upload.array('files', 2), async (req, res) => {

    const fileUri = req.files[0].filename;
    const image = req.files[1].filename;

    try {

        const furniture = Object.assign(req.body, { fileUri, image });
        const category = furniture.category;

        delete furniture.category;

        Category.findOneAndUpdate(

            { name: category },
            { $push: { items: furniture } },
            function (error, success) {
                if (success) {
                    console.log("sucess")
                } else {
                    console.log("error")
                }
            });

        return res.status(200).send({ "message": "Mobilia cadastrada com suceso" })

    } catch {

        return res.status(400).send({ "message": "Error" })
    }

});

// LISTAR TODAS MOBILIAS POR CATEGORIA
router.get('/list?', async (req, res) => {
    const categoryDb = await Category.findOne({ name: req.query.category });
    try {
        if (categoryDb != null) {
            return res.status(200).send(categoryDb)
        } else {
            return res.status(400).send({ "message": "categoria não cadastrada" })
        }

    } catch {
        return res.status(400).send({ "message": "Error" })
    }
});

// LISTAR TODAS CATEGORIAS E MOBILIAS
router.get('/list/all', async (req, res) => {

    const categoryDb = await Category.find();

    try {
        if (categoryDb != null) {
            return res.status(200).send(categoryDb)
        } else {
            return res.status(400).send({ "message": "Não já categorias cadastradas" })
        }

    } catch {
        return res.status(400).send({ "message": "Error" })
    }
});


module.exports = app => app.use('/furniture', router);