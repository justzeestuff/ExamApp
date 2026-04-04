const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./route/classes.route.js'))
app.use('/', require('./route/students.route.js'))
app.use('/', require('./route/exams.route.js'))

app.listen(3000, () => console.log("http://localhost:3000"))