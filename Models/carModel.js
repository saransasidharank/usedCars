const mongoose = require('mongoose')

const carShema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    spec:{
        type:String,
        required:true
    }

})

const cars = mongoose.model("car",carShema)
module.exports = cars