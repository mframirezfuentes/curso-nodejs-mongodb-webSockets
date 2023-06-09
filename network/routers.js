const express = require('express')
const message = require('../components/message/network')
const user = require('../components/user/network')
const chats= require('../components/chat/network')

const router = function (server) {
    server.use('/message', message)
    server.use('/user', user)
    server.use('/chats', chats)
}

module.exports = router