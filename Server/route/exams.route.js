const express = require('express');
const route = express.Router()

route.post('/CreateExam', require('../controller/exams.controller.js').CreateExams)
route.post('/createQuestion', require('../controller/exams.controller.js').CreateQuestions)
route.delete('/DeleteExam/:id', require('../controller/exams.controller.js').DeleteExam)
route.get('/GetExams', require('../controller/exams.controller.js').GetExams)
route.get('/GetQuestions', require('../controller/exams.controller.js').GetQuestions)

module.exports = route