const model = require('../api/components/patient/model')

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
    console.log(dataSearch)
    console.log(data)
    const foundUser = await model.findOne({
        _id: dataSearch
    })
    if(data.name) {
        foundUser.name = data.name
    }
    if(data.address) {
        foundUser.address = data.address
    }
    if(data.birthDate) {
        foundUser.birthDate = data.birthDate
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