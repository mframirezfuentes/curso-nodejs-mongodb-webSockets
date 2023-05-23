const express = require('express')
const bodyParser= require('body-parser')


//const router = require('./components/message/network')
const router=require('./network/routers')

const app = express()
app.use(bodyParser.json())

router(app)

app.use('/app', express.static('public'))


app.listen('3000', () => {
    console.log("Escuchando el puerto 3000")
})
