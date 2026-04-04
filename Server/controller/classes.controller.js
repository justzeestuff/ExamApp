const {MongoClient} = require('mongodb');

const CreateClasses = async (req,res) =>{
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try{
        await client.connect();
        const collection = client.db('classes').collection('classes');

        await collection.insertOne({
            classNumber: req.body.classNumber,
            assignedExams: []
        })
        res.status(200).json({message: "sucessful"})
    }
    catch(err){
        res.status(400).json({mesege: err})
    }
    finally{
        await client.close();
    }
}
const GetClasses = async (req,res) =>{
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try{
        await client.connect();
        const collection = client.db('classes').collection('classes');

        res.status(200).json(await collection.find().toArray())
    }
    catch(err){
        res.status(400).json({mesege: err})
    }
    finally{
        await client.close();
    }
}
module.exports = {CreateClasses, GetClasses}