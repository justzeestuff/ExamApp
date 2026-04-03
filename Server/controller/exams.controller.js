const { resolve } = require('dns');
const { MongoClient, ObjectId } = require('mongodb');

const CreateExams = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('exams').collection('exams');
        const { subject } = req.body

        const inserted = await collection.insertOne({
            creator: null,
            subject: subject,
            assignedTo: [],
            questions: []
        })

        res.status(200).json({ message: inserted })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}
const AssignExams = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const exams = client.db('exams').collection('exams');
        const classes = client.db('classes').collection('classes')

        const match = await classes.findOne({
            "_id": new ObjectId("69cb6f556e8890b4ab92362d")
        })

        const inserted = await exams.updateOne(
            { "_id": new ObjectId('69cb6f6e6e8890b4ab92362f') },
            {
                "$push": {
                    assignedTo: match.classNumber
                }
            }
        )

        res.status(200).json({ message: inserted })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}
const CreateQuestions = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('exams').collection('exams');


        const inserted = await collection.updateOne(
            { "_id": new ObjectId('69cb6f6e6e8890b4ab92362f') },
            {
                "$push": {
                    questions: {
                        questionId: require('crypto').randomBytes(12).toString('hex'),
                        question: req.body.question,
                        image: null,
                        answers: []
                    }
                }
            }
        )

        res.status(200).json({ message: inserted })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}
const CreateAnswer = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('exams').collection('exams');
        const  {answer, correct} = req.body

        const inserted = await collection.updateOne(
            {"questions.questionId": '51060fac91fe32ab77315c99'},
            {
                "$push": {
                     "questions.$.answers": { answer: answer, correct: correct }
                }
            }
        )
        res.status(200).json({ message: inserted })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}
const Access = async (req,res) =>{
    // DropDown classes
    // on input refetch avaliable exams to the class
    // if no data then throw err

    // to prevent 2 users writing exam on same student add boolean

    // hash student names and show real usernames in results only 
    // Taking : true
    // if user is not taking then false
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('exams').collection('exams');
        const {classId} = req.body
        const match = await collection.findOne({ "_id": new ObjectId(classId) })
        if(!match) return res.status(400).json({message: "u havent assigned it to any class yet"})

        const response = await fetch('http://localhost:3000/GetClass')
        const data = await response.json()
        
        res.status(200).json({ message: {
            match: match.assignedTo,
            data: data
        }})
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}
const TakingExam = async (req,res) =>{
    // DropDown classes
    // on input refetch avaliable exams to the class
    // if no data then throw err

    // to prevent 2 users writing exam on same student add boolean

    // hash student names and show real usernames in results only 
    // Taking : true
    // if user is not taking then false
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('exams').collection('exams');
        const {classId} = req.body
        const match = await collection.findOne({ "_id": new ObjectId(classId) })
        if(!match) return res.status(400).json({message: "u havent assigned it to any class yet"})

        const response = await fetch('http://localhost:3000/GetClass')
        const data = await response.json()
        
        res.status(200).json({ message: {
            match: match.assignedTo,
            data: data
        }})
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}
module.exports = { CreateExams, AssignExams, CreateQuestions, CreateAnswer, Access, TakingExam };