const express = require('express')

const response = require('../../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', addService)
router.put('/:id', updateService)
router.get('/:id', getService)
router.get('/', listService)
router.delete('/:id', removeService)

function addService (req, res) {
    controller.addService(req.body)
        .then((service) => {
            response.success(req, res, service, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function updateService (req, res) {
    controller.updateService(req.params.id, req.body)
        .then((service) => {
            response.success(req, res, service, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function listService (req, res) {
    controller.listService()
        .then((service) => {
            response.success(req, res, service, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function getService (req, res) {
    controller.getService(req.params.id)
        .then((service) => {
            response.success(req, res, service, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function removeService( req , res) {
    controller.removeService(req.params.id)
        .then((service) => {
            response.success(req, res, service, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

module.exports = router