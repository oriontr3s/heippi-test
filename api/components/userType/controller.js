const store = require('../../../store/userType')

function addUserType(data) {
    return new Promise((resolve, reject) => {
        if(!data){
            reject('Dato invalido')
            return false
        }
        resolve(store.add(data))
    })
}

function listUserType() {
    return store.list()
}

function getUserType(dataSearh) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh ){
            reject('Dato invalido')
            return false
        }
        resolve(await store.get(dataSearh)) 
    })
}

function updateUserType(dataSearh, data) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh || !data){
            reject('Dato invalido')
            return false
        }
        resolve(await store.update(dataSearh, data)) 
    })
}

function removeUserType(dataSearh) {
    return store.remove(dataSearh)
}

module.exports = {
    addUserType,
    listUserType,
    updateUserType,
    getUserType,
    removeUserType
}