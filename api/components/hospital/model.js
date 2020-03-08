const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hospital = new Schema({
    service: {
        type: Schema.ObjectId,
        required: false,
        ref: 'Service'
    },
    doctor: {
        type: Schema.ObjectId,
        required: false,
        ref: 'Doctor'
    },
    patient: {
        type: Schema.ObjectId,
        required: false,
        ref: 'Patient'
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Hospital', hospital)

module.exports = model