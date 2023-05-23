const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res,201, data );
        })
        .catch(err => {
            response.error(req, res,500, 'Internal error',  err);
        });
});

router.get('/', function(req, res) {
    controller.listUsers()
        .then(users => {
            response.success(req, res, 200,users);
        })
        .catch(err => {
            response.error(req, res,  500,'Internal error', err);
        });
});

module.exports = router;