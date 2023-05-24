const store = require('./store');

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
    };
    return store.add(chat);
}

function listChats(userId) {
    return store.list(userId);
}

function getChats(){
    return store.get()
}

module.exports = {
    addChat,
    listChats,
    getChats
}