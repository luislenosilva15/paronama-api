const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://compasso:compasso@api-panorama.eza1b.mongodb.net/api', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    function (err) {
        if (err) throw err;
        else {
            console.log('sucess connection with db');
        }
    });

module.exports = mongoose;
