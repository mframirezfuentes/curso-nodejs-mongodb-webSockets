const db = require('mongoose')
const Model= require('./model')
require('dotenv').config()

const url = process.env.MONGO_URI

db.Promise = global.Promise
db.connect(url, {
    useNewUrlParser: true
})
console.log("[db] Conectada con exito");

function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessage() {
 const messages = await Model.find()
 return messages;
}

module.exports = { add: addMessage, list: getMessage }