const express = require('express')

const response = require('../../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', addHospital)
router.put('/:id', updateHospital)
router.get('/:id', getHospital)
router.get('/', listHospital)
router.delete('/:id', removeHospital)

function addHospital (req, res) {
    controller.addHospital(req.body)
        .then((hospital) => {
            response.success(req, res, hospital, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function updateHospital (req, res) {
    controller.updateHospital(req.params.id, req.body)
        .then((hospital) => {
            response.success(req, res, hospital, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function listHospital (req, res) {
    controller.listHospital()
        .then((hospital) => {
            response.success(req, res, hospital, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function getHospital (req, res) {
    controller.getHospital(req.params.id)
        .then((hospital) => {
            response.success(req, res, hospital, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function removeHospital( req , res) {
    controller.removeHospital(req.params.id)
        .then((hospital) => {
            response.success(req, res, hospital, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

module.exports = router