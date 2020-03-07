const store = require('../../../store/user')


function addUser(data) {
    return new Promise((resolve, reject) => {
        if(!data){
            reject('Dato invalido')
            return false
        }
        resolve(store.add(data))
    })
}

function listUser() {
    return store.list()
}

function getUser(dataSearh) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh ){
            reject('Dato invalido')
            return false
        }
        resolve(await store.get(dataSearh)) 
    })
}

function updateUser(dataSearh, data) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh || !data){
            reject('Dato invalido')
            return false
        }
        resolve(await store.update(dataSearh, data)) 
    })
}

function removeUser(dataSearh) {
    return store.remove(dataSearh)
}

module.exports = {
    addUser,
    listUser,
    updateUser,
    getUser,
    removeUser
}


