const express = require('express')

const response = require('../../../network/response')
const controller = require('./controller')

const router = express.Router()

router.post('/', addDoctor)
router.put('/:id', updateDoctor)
router.get('/:id', getDoctor)
router.get('/', listDoctor)
router.delete('/:id', removeDoctor)

function addDoctor (req, res) {
    controller.addDoctor(req.body)
        .then((doctor) => {
            response.success(req, res, doctor, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        });
}

function updateDoctor (req, res) {
    controller.updateDoctor(req.params.id, req.body)
        .then((doctor) => {
            response.success(req, res, doctor, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function listDoctor (req, res) {
    controller.listDoctor()
        .then((doctor) => {
            response.success(req, res, doctor, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function getDoctor (req, res) {
    controller.getDoctor(req.params.id)
        .then((doctor) => {
            response.success(req, res, doctor, 201)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}

function removeDoctor( req , res) {
    controller.removeDoctor(req.params.id)
        .then((doctor) => {
            response.success(req, res, doctor, 200)
        })
        .catch((err) => {
            response.error(req, res, 'Error Interno', 500)
        });
}


module.exports = router