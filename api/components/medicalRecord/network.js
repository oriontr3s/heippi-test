const express = require('express')

const response = require('../../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', addMedicalRecord)
router.put('/:id', updateMedicalRecord)
router.get('/:id', getMedicalRecord)
router.get('/', listMedicalRecord)
router.delete('/:id', removeMedicalRecord)

function addMedicalRecord (req, res) {
    controller.addMedicalRecord(req.body)
        .then((medicalRecord) => {
            response.success(req, res, medicalRecord, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function updateMedicalRecord (req, res) {
    controller.updateMedicalRecord(req.params.id, req.body)
        .then((medicalRecord) => {
            response.success(req, res, medicalRecord, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function listMedicalRecord (req, res) {
    controller.listMedicalRecord()
        .then((medicalRecord) => {
            response.success(req, res, medicalRecord, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function getMedicalRecord (req, res) {
    controller.getMedicalRecord(req.params.id)
        .then((medicalRecord) => {
            response.success(req, res, medicalRecord, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function removeMedicalRecord( req , res) {
    controller.removeMedicalRecord(req.params.id)
        .then((medicalRecord) => {
            response.success(req, res, medicalRecord, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

module.exports = router