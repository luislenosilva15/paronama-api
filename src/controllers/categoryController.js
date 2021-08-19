const express = require('express');
const router = express.Router();

const Category = require('../models/categoryModel');

router.post('/register', async (req, res) => {

    try {
        const categoryDb = await Category.findOne({ name: req.body.name })
        if (categoryDb == null) {

            await Category.create(req.body);

            return res.status(200).send({ "message": "Categoria cadastrada com sucesso" })

        } else {

            return res.status(400).send({ "message": "Categoria já cadastrada" })
        }

    } catch {

        return res.status(400).send({ "message": "error" })
    }
})

router.get('/list', async (req, res) => {

    try {
        const furnitureDb = await Category.find();
        return res.status(200).send(furnitureDb);

    } catch {
        return res.status(400).send({ "message": "error" })
    }
})

module.exports = app => app.use('/category', router);