const mongoose = require('mongoose')

const Schema = mongoose.Schema

const service = new Schema({
    name: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Service', service)

module.exports = model