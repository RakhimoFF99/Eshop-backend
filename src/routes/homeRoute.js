const {Router} = require('express')
const router = Router()

router.get('/', async(req,res) => {
    res.send('sdsd')
})



module.exports = router