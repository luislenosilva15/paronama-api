var multer = require('multer');

var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', './asset', './furnitures'));
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];

        cb(null, Date.now() +'-'+ file.originalname );
    }
})

module.exports = storage;