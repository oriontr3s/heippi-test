const express = require('express')

const response = require('../../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', addUser)
router.put('/:id', updateUser)
router.get('/:id', getUser)
router.get('/', listUser)

function addUser (req, res) {
    controller.addUser(req.body)
        .then((user) => {
            response.success(req, res, user, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function updateUser (req, res) {
    controller.updateUser(req.params.id, req.body)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function listUser (req, res) {
    controller.listUser()
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function getUser (req, res) {
    controller.getUser(req.params.id)
        .then((user) => {
            response.success(req, res, user, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

module.exports = router