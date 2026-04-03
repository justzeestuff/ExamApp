    const {MongoClient} = require('mongodb');

    const CreateStudents = async (req,res) =>{
        const client = new MongoClient('mongodb://127.0.0.1:27017')
        try{
            await client.connect();
            const collection = client.db('classes').collection('classes');
            const { firstName, lastName } = req.body

            const match = await collection.findOne({classNumber: req.body.classNumber})
            if(!match) return res.status(404).json({message: "class Not Found"})

            await collection.updateOne(
                {"_id": match._id},
                {"$push": {
                    students:[
                        {
                            "name": firstName,
                            "lastName": lastName,
                            "hashedName": require('crypto').randomBytes(5),
                            "taking": false
                        }
                    ]
                }}
            )

            res.status(200).json({message: "sucessful"})
        }
        catch(err){
            res.status(400).json({message: err.message})
        }
        finally{
            await client.close();
        }
    }
module.exports = CreateStudents;