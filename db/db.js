const config = require('config')
const mongoose = require('mongoose')

const db = async function () {
    try {
       await mongoose.connect(
            config.get('MongoUri'),
            {},
            console.log('connected to db')
            )
    }
    catch(e) {
        console.log(e)
    }
}
module.exports = db

