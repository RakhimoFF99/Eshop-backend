const {Router} = require('express')
const {addUser} = require('../controllers/userController')
const router = Router()

router.post('/user/login')
router.post('/user/register',addUser)


module.exports = router