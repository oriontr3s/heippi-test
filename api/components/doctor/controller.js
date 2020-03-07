const store = require('../../../store/doctor')

function addDoctor(data) {
    return new Promise((resolve, reject) => {
        if(!data){
            reject('Dato invalido')
            return false
        }
        resolve(store.add(data))
    })
}

function listDoctor() {
    return store.list()
}

function getDoctor(dataSearh) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh ){
            reject('Dato invalido')
            return false
        }
        resolve(await store.get(dataSearh)) 
    })
}

function updateDoctor(dataSearh, data) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh || !data){
            reject('Dato invalido')
            return false
        }
        resolve(await store.update(dataSearh, data)) 
    })
}

function removeDoctor(dataSearh) {
    return store.remove(dataSearh)
}

module.exports = {
    addDoctor,
    listDoctor,
    updateDoctor,
    getDoctor,
    removeDoctor
}