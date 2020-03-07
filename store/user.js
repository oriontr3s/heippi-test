const model = require('../api/components/user/model')

async function add(data) {
    const user = new model(data)
    return await user.save()
}

function list() {
    return new Promise ((resolve, reject) => {
        model.find()
            .populate('userType')
            .exec((error, populated) => {
                if(error){
                    reject(error)
                    return false
                }
                resolve(populated)
            })
    })
}

function get(dataSearch) {
    return new Promise ((resolve, reject) => {
        model.findOne({ _id: dataSearch })
            .populate('userType')
            .exec((error, populated) => {
                if(error){
                    reject(error)
                    return false
                }
                resolve(populated)
            })
    })    
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