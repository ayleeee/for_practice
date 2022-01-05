const mongoose = require("mongoose");

const indexSchema = mongoose.Schema({
    content:{
        type:String,
        required:true,
    }
})

exports.indexModel = mongoose.model('index',indexSchema);