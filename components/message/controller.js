const store = require('./store')

function addMessage(chat,user, message) {

    console.log("body: ", chat, user,message)
    return new Promise((resolve, reject) => {
        if (!user || !message|| !chat) {
            console.error('[messageController] No hay usuario o mensaje')
            reject('Los datos son incorrectos')
            return false;
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessage(filterChat) {
    console.log("controller: ", filterChat)
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat))
    })

}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalidate date')
            return false
        }
        const result = await store.update(id, message)
        resolve(result)
    })

}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id invalido');
            return false;
        }

        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}