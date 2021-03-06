const mongoose = require('mongoose')

const Schema = mongoose.Schema

const medicalRecord = new Schema({
    patient: { 
        type: Schema.ObjectId,
        required: true,
        ref: 'Patient'
    },
    date: {
        type: Date,
        required: true
    }
})

const model = mongoose.model('MedicalRecord', medicalRecord)

module.exports = model