const db = require('../services/db');

const furnitureSchema = new db.Schema({

    sku: {
        type: String,
    },

    name: {
        type: String,
    },

    description: {
        type: String,
    },

    fileUri: {
        type: String,
    },

});

const funiture = db.model('furnitures', furnitureSchema);

module.exports = funiture;

