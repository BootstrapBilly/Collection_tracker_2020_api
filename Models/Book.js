const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var BookSchema = new Schema({

    year: {type: Number, required:true},
    condition: {type: String, required:true},
    image_url:{type:String, required:false}

});

module.exports = mongoose.model("Book", BookSchema);