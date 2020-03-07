const express = require('express')
const bodyParser = require('body-parser');

const config = require('../config.js')
const user = require('./components/user/network')

const app = express()
const db = require('../store/db')
app.use(bodyParser.json());

app.use('/api/user', user)

db(config.db.dbUrl)

app.listen(config.api.port, () => {
    console.log('la aplication esta escuchando en el port ' + config.db.host + ':' + config.db.port)
})