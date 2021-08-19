const db = require('../services/db');

const categorySchema = new db.Schema({

    name: {
        type: String,
    },

    items: [
        
    ]

});

const category = db.model('categories', categorySchema);

module.exports = category;

