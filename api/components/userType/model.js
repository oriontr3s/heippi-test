const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userType = new Schema({
    name: {
        type: String,
        required: true
    }
})

const model = mongoose.model('UserType', userType)

module.exports = model