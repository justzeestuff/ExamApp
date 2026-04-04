const express = require('express');
const route = express.Router()

route.post('/CreateStudent', require('../controller/students.controller.js').CreateStudents)
route.get('/GetStudents', require('../controller/students.controller.js').GetStudents)

module.exports = route