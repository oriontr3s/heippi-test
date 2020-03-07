const express = require('express')

const response = require('../../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', addPatient)
router.put('/:id', updatePatient)
router.get('/:id', getPatient)
router.get('/', listPatient)
router.delete('/:id', removePatient)

function addPatient (req, res) {
    controller.addPatient(req.body)
        .then((patient) => {
            response.success(req, res, patient, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function updatePatient (req, res) {
    controller.updatePatient(req.params.id, req.body)
        .then((patient) => {
            response.success(req, res, patient, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function listPatient (req, res) {
    controller.listPatient()
        .then((patient) => {
            response.success(req, res, patient, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function getPatient (req, res) {
    controller.getPatient(req.params.id)
        .then((patient) => {
            response.success(req, res, patient, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function removePatient( req , res) {
    controller.removePatient(req.params.id)
        .then((patient) => {
            response.success(req, res, patient, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

module.exports = router