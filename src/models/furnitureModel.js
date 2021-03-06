const db = require('../services/db');

const furnitureSchema = new db.Schema({

    fileUri: {
        type: String,
    },

    description: {
        type: String,
    },

    image: {
        type: String,
    },

    avaliation: {
        type: Number,
    },

    price: {
        type: Decimal128,
    }

});

const funiture = db.model('furnitures', furnitureSchema);

module.exports = funiture;

