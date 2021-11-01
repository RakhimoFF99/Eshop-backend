const UserModel = require('../models/UserModel')
exports.addUser = async (req,res) => {
    try {
     const user = await new UserModel(req.body)
     const response = await user.save()
     if(response) {
         res.status(201).json({
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