const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    brand:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,

    },
    count:{
        type:Number
    },
    images:{
        type:String,

    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    
})

module.exports = mongoose.model('product',productSchema)