const express = require('express');
const route = express.Router()

route.post('/CreateExam', require('../controller/exams.controller.js').CreateExams)
route.post('/createQuestion', require('../controller/exams.controller.js').CreateQuestions)
route.delete('/DeleteExam/:id', require('../controller/exams.controller.js').DeleteExam)
route.get('/GetExams', require('../controller/exams.controller.js').GetExams)
route.get('/EditExam/:id', require('../controller/exams.controller.js').EditExam)

module.exports = route