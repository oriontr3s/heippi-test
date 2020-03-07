const store = require('../../../store/service')

function addService(data) {
    return new Promise((resolve, reject) => {
        if(!data){
            reject('Dato invalido')
            return false
        }
        resolve(store.add(data))
    })
}

function listService() {
    return store.list()
}

function getService(dataSearh) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh ){
            reject('Dato invalido')
            return false
        }
        resolve(await store.get(dataSearh)) 
    })
}

function updateService(dataSearh, data) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh || !data){
            reject('Dato invalido')
            return false
        }
        resolve(await store.update(dataSearh, data)) 
    })
}

function removeService(dataSearh) {
    return store.remove(dataSearh)
}

module.exports = {
    addService,
    listService,
    updateService,
    getService,
    removeService
}