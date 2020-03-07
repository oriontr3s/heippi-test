const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patient = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }
})

const model = mongoose.model('Patient', patient)

module.exports = model