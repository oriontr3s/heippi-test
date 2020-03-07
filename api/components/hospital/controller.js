const store = require('../../../store/hospital')

function addHospital(data) {
    return new Promise((resolve, reject) => {
        if(!data){
            reject('Dato invalido')
            return false
        }
        resolve(store.add(data))
    })
}

function listHospital() {
    return store.list()
}

function getHospital(dataSearh) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh ){
            reject('Dato invalido')
            return false
        }
        resolve(await store.get(dataSearh)) 
    })
}

function updateHospital(dataSearh, data) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh || !data){
            reject('Dato invalido')
            return false
        }
        resolve(await store.update(dataSearh, data)) 
    })
}

function removeHospital(dataSearh) {
    return store.remove(dataSearh)
}

module.exports = {
    addHospital,
    listHospital,
    updateHospital,
    getHospital,
    removeHospital
}