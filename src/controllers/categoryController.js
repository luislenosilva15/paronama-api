const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    res.send('Hiii')

})

module.exports = app => app.use('/category', router);