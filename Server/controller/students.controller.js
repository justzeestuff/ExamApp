const { MongoClient } = require('mongodb');

const CreateStudents = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('students').collection('students');

        const {first,last,classNumber} = req.body

        const inserted = await collection.insertOne({
            first: first,
            last: last,
            classNumber: classNumber
        })
        res.status(200).json(inserted)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}

const GetStudents = async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try {
        await client.connect();
        const collection = client.db('students').collection('students');

        res.status(200).json(await collection.find().toArray())
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
    finally {
        await client.close();
    }
}
module.exports = { CreateStudents,GetStudents };