const {Router} = require('express')
const {getAllProduct,getProductById,addProduct,deleteProductById,updateProductById} = require('../controllers/productController')
const router = Router()

router.get('/product/all',getAllProduct)
router.get('/product/:id',getProductById)
router.post('/product/add',addProduct)
router.put('/product/update/:id',updateProductById)
router.delete('/product/delete/:id',deleteProductById)

module.exports = router