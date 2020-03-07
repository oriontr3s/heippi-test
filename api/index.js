const express = require('express')
const bodyParser = require('body-parser');

const config = require('../config.js')

const user = require('./components/user/network')
const userType = require('./components/userType/network')
const service = require('./components/service/network')
const patient = require('./components/patient/network')

const app = express()
const db = require('../store/db')
app.use(bodyParser.json());

app.use('/api/user', user)
app.use('/api/userType', userType)
app.use('/api/service', service)
app.use('/api/patient', patient)

db(config.db.dbUrl)

app.listen(config.api.port, () => {
    console.log('la aplication esta escuchando en el port ' + config.db.host + ':' + config.db.port)
})