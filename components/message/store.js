const Model = require('./model')

function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(filterUser) {

    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser };
    }
    try {
        const populated = await Model.find(filter).populate('user')
        return populated
    } catch (error) {
        throw error
    }


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

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: removeMessage
}