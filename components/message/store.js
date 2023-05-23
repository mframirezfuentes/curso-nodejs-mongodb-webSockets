const db = require('mongoose')
const Model = require('./model')
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

async function getMessage(filterUser) {
    let filter = {}

    if (filterUser !== null) {
        filter = { user: filterUser }
    }
    const messages = await Model.find(filter)
    return messages;
}


async function updateMessage(id, message) {
    const foundMessage = await Model.findOneAndUpdate(
        { "_id": id },
        { $set: message },
        { new: true })


    return foundMessage;

}

async function removeMessage(id) {

    return await Model.findOneAndDelete({
        _id: id
    })

}

module.exports = { add: addMessage, list: getMessage, update: updateMessage, remove: removeMessage }