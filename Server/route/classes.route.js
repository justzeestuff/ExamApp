const express = require('express');
const route = express.Router()

route.post('/CreateClass', require('../controller/classes.controller.js').CreateClasses)
route.get('/GetClass', require('../controller/classes.controller.js').GetClasses)

module.exports = route