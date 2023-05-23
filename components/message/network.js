const express = require('express')
const router = express.Router()
const controller = require('./controller')

const response = require('../../network/response')

router.get('/', (req, res) => {
   controller.getMessage()
   .then((messageList)=>{
    response.success(req,res, 200, messageList)
   })
   .catch(e=>response.error(req,res,500,"Unexpected error",e))
})

router.post('/', (req, res) => {

    const body = req.body

    controller.addMessage(body.user, body.message).then(() => {
        response.success(req, res, 201, "Creado correctamente")
    }).catch(() => {
        response.error(req, res, 400, "error en el controllador")
    })

})


module.exports = router