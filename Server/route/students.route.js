const express = require('express');
const route = express.Router()

route.post('/CreateStudent', require('../controller/students.controller.js'))

module.exports = route