const model = require('../api/components/user/model')

async function add(data) {
    const user = new model(data)
    return await user.save()
}

async function list() {
    const users = await model.find()
    return users
}

async function get(dataSearch) {
    const foundUser = await model.findOne({
        _id: dataSearch
    })
    return foundUser
}

async function update(dataSearch, data) {
    const foundUser = await model.findOne({
        _id: dataSearch
    })
    if(data.userName) {
        foundUser.userName = data.userName
    }
    if(data.password) {
        foundUser.password = data.password
    }
    if(data.email) {
        foundUser.email = data.email
    }
    if(data.phoneNumber) {
        foundUser.phoneNumber = data.phoneNumber
    }
    return await foundUser.save()
}

async function remove(dataSearch) {
    return model.deleteOne({
        _id: dataSearch
    })
}

module.exports = {
    add,
    list,
    get,
    update,
    remove
}