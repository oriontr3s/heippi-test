const Model = require('../api/components/user/model')

async function add(data) {
    const user = new Model(data)
    return await user.save()
}

async function list() {
    const users = await Model.find()
    return users
}

async function get(dataSearch) {
    const foundUser = await Model.findOne({
        _id: dataSearch
    })
    return foundUser
}

async function update(dataSearch, data) {
    console.log(dataSearch)
    console.log(data)
    const foundUser = await Model.findOne({
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

function remove(dataSearch) {

}

module.exports = {
    add,
    list,
    get,
    update,
    remove
}