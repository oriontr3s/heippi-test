const model = require('../api/components/medicalRecord/model')

async function add(data) {
    const user = new model(data)
    return await user.save()
}

async function list() {
    return new Promise ((resolve, reject) => {
        model.find()
            .populate('patient')
            .exec((error, populated) => {
                if(error){
                    reject(error)
                    return false
                }
                resolve(populated)
            })
    })
}

async function get(dataSearch) {
    return new Promise ((resolve, reject) => {
        model.findOne({ _id: dataSearch })
            .populate('patient')
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
    if(data.date) {
        foundUser.date = data.date
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