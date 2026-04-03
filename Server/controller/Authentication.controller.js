const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');

const Register = async (req,res) =>{
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try{
        await client.connect();
        const {username,specialName,password} = req.body

        const collection = client.db('teachers').collection('teachers')
        const user = await collection.insertOne({
            username: username,
            specialName: specialName,
            password: await bcrypt.hash(password, 12)
        })
        res.status(200).json({messege: user})
    }
    catch(err){
        res.status(400).json({mesege: err})
    }
    finally{
        await client.close();
    }
}
const Login = async (req,res) =>{
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    try{ 
        // if(savedUser !== null) return res.status(200).json({message: `${savedUser}`})

        await client.connect();
        const {specialName,password} = req.body
        const collection = client.db('teachers').collection('teachers')

        const match = await collection.findOne({specialName: specialName})
        if(!match) return res.status(200).json({message: "user not found"})

        const correct = await bcrypt.compare(password, match.password)
        if(!correct) return res.status(200).json({message: "incorrect specialUser or password"})

        res.status(200).json({messege: `ur signed in as ${match.username}`})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
    finally{
        await client.close();
    }
}
module.exports = {Register,Login};