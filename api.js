let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongoUrl = "mongodb://localhost:27017";
const mongoUrl = "mongodb+srv://zomato:zomato123@cluster0.x6wa1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const dotenv = require('dotenv')
dotenv.config()
let port = process.env.PORT || 8210;
var db;
//get
app.get('/',(req,res) => {
    res.send("Welcome to Express")
})

//location
app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//restaurant as per location
app.get('/restaurants',(req,res) => {
    let stateId = Number(req.query.state_id)
    let query = {};
    if(stateId){
        query = {state_id:stateId}
    }
    console.log(">>>>restId",stateId)
    db.collection('restaurantsdata').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})




MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log("Error while connecting");
    db = client.db('zomato');
    app.listen(port,() => {
        console.log(`Listening to port ${port}`)
    })
})
