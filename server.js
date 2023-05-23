const express = require('express')
const bodyParser= require('body-parser')
require('dotenv').config()

const url = process.env.MONGO_URI
const db= require('./db')
const router=require('./network/routers')
db(url)
const app = express()
app.use(bodyParser.json())

router(app)


app.use('/app', express.static('public'))


app.listen('3000', () => {
    console.log("Escuchando el puerto 3000")
})
