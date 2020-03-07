const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hospital = new Schema({
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