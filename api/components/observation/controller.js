const store = require('../../../store/observation')

function addObservation(data) {
    return new Promise((resolve, reject) => {
        if(!data){
            reject('Dato invalido')
            return false
        }
        resolve(store.add(data))
    })
}

function listObservation() {
    return store.list()
}

function getObservation(dataSearh) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh ){
            reject('Dato invalido')
            return false
        }
        resolve(await store.get(dataSearh)) 
    })
}

function updateObservation(dataSearh, data) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh || !data){
            reject('Dato invalido')
            return false
        }
        resolve(await store.update(dataSearh, data)) 
    })
}

function removeObservation(dataSearh) {
    return store.remove(dataSearh)
}

module.exports = {
    addObservation,
    listObservation,
    updateObservation,
    getObservation,
    removeObservation
}