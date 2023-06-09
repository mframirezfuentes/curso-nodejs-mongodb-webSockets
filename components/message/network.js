const express = require('express')
const multer = require('multer')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')

const upload = multer({
    dest: 'public/files'
})

router.get('/', (req, res) => {
    const filterMessage = req.query.chat || null;
    console.log(filterMessage);
    controller.getMessage(filterMessage)
        .then((messageList) => {
            response.success(req, res, 200, messageList)
        })
        .catch(e => response.error(req, res, 500, "Unexpected error", e))
})

router.post('/', upload.single('file'), (req, res) => {
    const file = req.file
    const body = req.body
    controller.addMessage(body.chat, body.user, body.message, file).then((data) => {
        response.success(req, res, 201, data)
    }).catch(() => {
        response.error(req, res, 400, "error en el controllador")
    })

})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    const message = req.body

    controller.updateMessage(id, message)
        .then((data) => response.success(req, res, 200, data))
        .catch(e => response.error(req, res, 500, "Error interno", e))
})


router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, 200, `Mensaje ${req.params.id} eliminado`,);
        })
        .catch(e => {
            response.error(req, res, 500, 'Error interno', e);
        });
});

module.exports = router