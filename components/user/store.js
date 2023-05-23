const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

function listUsers() {
    return Model.find();
}

function updateUser(id, name) {
    const updateUser = Model.findOneAndUpdate(
        { "_id": id },
        { $set: name },
        { new: true }
    )
    return updateUser
}

module.exports = {
    add: addUser,
    list: listUsers,
    update: updateUser,
}