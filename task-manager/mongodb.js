const mongodb= require('mongodb');
const MongoClient=mongodb.MongoClient;
const url = 'mongodb://localhost:27017';


// Database Name
const dbName = 'task-manager';

MongoClient.connect(url,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect to db')
    }
    console.log("connected successfully")
    const db = client.db(dbName)
    db.collection('users').insertOne({
        name:"Rowan Ahmed",
        age:23
    },(error,result)=>{
        if(error){
            return console.log("unable to insert user")
        }
        console.log(result.ops)
    })
})