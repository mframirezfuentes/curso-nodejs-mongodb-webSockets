const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routers')
require('dotenv').config()

const url = process.env.MONGO_URI
db(url)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

socket.connect(server)
router(app)
app.use('/app', express.static('public'))

server.listen('3000', () => {
    console.log("Escuchando el puerto 3000")
})
