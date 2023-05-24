const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterChat) {
    console.log("store: ", filterChat)
    try {
        let filter = {};

        if (filterChat !== null) {
            filter = { chat: filterChat };
        }
        console.log("filter ", filter);
        const populated = await Model.find(filter).populate('user').exec();
            console.log("populated: ", populated);
        return populated
    } catch (error) {
        throw error
    }
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}