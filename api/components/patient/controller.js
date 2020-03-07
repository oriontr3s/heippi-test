const store = require('../../../store/patient')

function addPatient(data) {
    return new Promise((resolve, reject) => {
        if(!data){
            reject('Dato invalido')
            return false
        }
        resolve(store.add(data))
    })
}

function listPatient() {
    return store.list()
}

function getPatient(dataSearh) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh ){
            reject('Dato invalido')
            return false
        }
        resolve(await store.get(dataSearh)) 
    })
}

function updatePatient(dataSearh, data) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh || !data){
            reject('Dato invalido')
            return false
        }
        resolve(await store.update(dataSearh, data)) 
    })
}

function removePatient(dataSearh) {
    return store.remove(dataSearh)
}

module.exports = {
    addPatient,
    listPatient,
    updatePatient,
    getPatient,
    removePatient
}