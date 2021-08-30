const db = require('../services/db');

const categorySchema = new db.Schema({

    renderIndex: {
        type: Number,
    },

    name: {
        type: String,
    },

    items: [
        
    ]

});

const category = db.model('categories', categorySchema);

module.exports = category;