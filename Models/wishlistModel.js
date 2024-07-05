const mongoose = require('mongoose')

const wishlistShema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
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
    },
    userId:{
        type:String,
        required:true
    }

})

const wishlists = mongoose.model("wishlists",wishlistShema)
module.exports = wishlists