const express = require('express')
const db = require('./db/db')
const app = express()

const Port = process.env.PORT || 5200
app.use(express.json())
app.use('/',require('./src/routes/homeRoute'))
app.use('/api',require('./src/routes/auth'))
app.use('/api',require('./src/routes/productRoute'))

function startServer () {
    db()
    app.listen(Port,console.log(`Server is running on port ${Port}`))
}

startServer()