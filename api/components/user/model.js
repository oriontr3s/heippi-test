const mongoose = require('mongoose')

const Schema = mongoose.Schema

const user = new Schema({
    userType: {
        type: Schema.ObjectId,
        required: true,
        ref: 'UserType'
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    } 
})

const model = mongoose.model('User', user)

module.exports = model