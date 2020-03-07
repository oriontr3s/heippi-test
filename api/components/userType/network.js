const express = require('express')

const response = require('../../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', addUserType)
router.put('/:id', updateUserType)
router.get('/:id', getUserType)
router.get('/', listUserType)
router.delete('/:id', removeUserType)

function addUserType (req, res) {
    controller.addUserType(req.body)
        .then((userType) => {
            response.success(req, res, userType, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function updateUserType (req, res) {
    controller.updateUserType(req.params.id, req.body)
        .then((userType) => {
            response.success(req, res, userType, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function listUserType (req, res) {
    controller.listUserType()
        .then((userType) => {
            response.success(req, res, userType, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function getUserType (req, res) {
    controller.getUserType(req.params.id)
        .then((userType) => {
            response.success(req, res, userType, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function removeUserType( req , res) {
    controller.removeUserType(req.params.id)
        .then((userType) => {
            response.success(req, res, userType, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

module.exports = router