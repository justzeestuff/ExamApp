const express = require('express');
const route = express.Router()

route.post('/CreateExam', require('../controller/exams.controller.js').CreateExams)
route.post('/AssignExam', require('../controller/exams.controller.js').AssignExams)
route.post('/createQuestion', require('../controller/exams.controller.js').CreateQuestions)
route.get('/Access', require('../controller/exams.controller.js').Access)

module.exports = route