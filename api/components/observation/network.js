const express = require('express')

const response = require('../../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', addObservation)
router.put('/:id', updateObservation)
router.get('/:id', getObservation)
router.get('/', listObservation)
router.delete('/:id', removeObservation)

function addObservation (req, res) {
    controller.addObservation(req.body)
        .then((observation) => {
            response.success(req, res, observation, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function updateObservation (req, res) {
    controller.updateObservation(req.params.id, req.body)
        .then((observation) => {
            response.success(req, res, observation, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function listObservation (req, res) {
    controller.listObservation()
        .then((observation) => {
            response.success(req, res, observation, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function getObservation (req, res) {
    controller.getObservation(req.params.id)
        .then((observation) => {
            response.success(req, res, observation, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function removeObservation( req , res) {
    controller.removeObservation(req.params.id)
        .then((observation) => {
            response.success(req, res, observation, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

module.exports = router