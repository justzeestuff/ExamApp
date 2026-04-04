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
const GetExams = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('exams').collection('exams');

        res.status(200).json(await collection.find().toArray())
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
const DeleteExam = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('exams').collection('exams');

        const {id} = req.params

        const result = await collection.deleteOne({_id: new ObjectId(id)})
        
        res.status(200).json({ message: result })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}
const GetQuestions = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('exams').collection('exams');

        const {_id} = req.params

        // const match = await collection.findOne({
        //     "_id": new ObjectId(_id)
        // })
        
        const match = await collection.find().toArray()

        res.status(200).json(match)
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
        const { answer, correct } = req.body

        const inserted = await collection.updateOne(
            { "questions.questionId": '51060fac91fe32ab77315c99' },
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
module.exports = { CreateExams, CreateQuestions, CreateAnswer, GetExams, DeleteExam,GetQuestions };