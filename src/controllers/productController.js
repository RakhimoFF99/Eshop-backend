const productModel = require('../models/productModel')

exports.addProduct = async (req,res) => {
        
    try {
        const product =  await new productModel(req.body)
        console.log(product)
        const response = await product.save()
        if(response) {
            res.status(200).json({
                success:true,
                data:response
            })
        }
    }   
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
   

}

exports.getAllProduct = async (req,res) => {
    try {
        const product = await productModel.find({})
        res.status(200).json({
            success:true,
            data:product
        })
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
}
exports.getProductById = async (req,res) => {
    try {
        const product = await productModel.findById(req.params.id)
        if(product) {
            res.status(200).json({
                success:true,
                data:product
            })
        }
       
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
}
exports.deleteProductById = async (req,res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id)
        if(product) {
            res.status(200).json({
                success:true,
                data:product
            })
        }
       
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
}
exports.updateProductById  = async (req,res) => {
    try {
        const product = await productModel.findByIdAndUpdate(req.params.id,{$set:req.body})
        if(product) {
            res.status(200).json({
                success:true,
                data:product
            })
        }
       
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
}