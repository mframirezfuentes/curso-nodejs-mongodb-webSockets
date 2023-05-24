const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function (req, res) {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, 201, data);
        })
        .catch(err => {
            response.error(req, res, 500, 'Internal error', err);
        });
});

router.get('/:userId', function (req, res) {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res,200, users );
        })
        .catch(err => {
            response.error(req, res,  500,'Internal error', err);
        });
});

router.get('/',(req,res)=>{
    controller.getChats().
    then((data)=>{
        response.success(req,res,200, data)
    }
    ).catch(e=>{
        response.error(req,res,500, 'error interno', e)
    })
})

module.exports = router;
