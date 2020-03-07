const store = require('../../../store/medicalRecord')

function addMedicalRecord(data) {
    return new Promise((resolve, reject) => {
        if(!data){
            reject('Dato invalido')
            return false
        }
        resolve(store.add(data))
    })
}

function listMedicalRecord() {
    return store.list()
}

function getMedicalRecord(dataSearh) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh ){
            reject('Dato invalido')
            return false
        }
        resolve(await store.get(dataSearh)) 
    })
}

function updateMedicalRecord(dataSearh, data) {
    return new Promise( async (resolve, reject) => {
        if(!dataSearh || !data){
            reject('Dato invalido')
            return false
        }
        resolve(await store.update(dataSearh, data)) 
    })
}

function removeMedicalRecord(dataSearh) {
    return store.remove(dataSearh)
}

module.exports = {
    addMedicalRecord,
    listMedicalRecord,
    updateMedicalRecord,
    getMedicalRecord,
    removeMedicalRecord
}