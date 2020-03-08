const mongoose = require('mongoose')

const Schema = mongoose.Schema

const observation = new Schema({
    medicalRecord: {
        type: Schema.ObjectId,
        required: true,
        ref: 'MedicalRecord'
    },
    doctor: {
        type: Schema.ObjectId,
        required: true,
        ref: 'Doctor'
    },
    comment: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Observation', observation)

module.exports = model