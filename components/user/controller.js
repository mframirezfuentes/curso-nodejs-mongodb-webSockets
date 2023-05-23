const store = require('./store');

function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid name');
    }

    const user = {
        name,
    };
    return store.add(user);
}

function listUsers() {
    return store.list();
}

function update(id,name){

}

module.exports = {
    addUser,
    listUsers,
}