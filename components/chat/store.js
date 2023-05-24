const Model = require('./model');

function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}
async function listChats(userId) {
    try {
        let filter = {};
        if (userId) {
            filter = {
                users: userId,
            };
        }

        const populated = await Model.find(filter)
            .populate('user')
            .exec();
        return populated;
    } catch (err) {
        throw err;
    }


}

async function getChats() {
    return await Model.find()
}

module.exports = {
    add: addChat,
    list: listChats,
    get: getChats
}