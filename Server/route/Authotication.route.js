const express = require('express');
const route = express.Router()

route.post('/Register', require('../controller/Authentication.controller.js').Register)
route.post('/Login', require('../controller/Authentication.controller.js').Login)

module.exports = route