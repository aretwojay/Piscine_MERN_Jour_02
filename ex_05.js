const MongoClient = require('mongodb').MongoClient;
const express = require("express")
const app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const url = 'mongodb://127.0.0.1:27042'
const dbName = 'mern-pool';

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/views/ex_05.html");
});

app.post('/', function (req, res) {
    if (req.body.admin == "on")
        req.body.admin = true;
    else
        req.body.admin = false;

    MongoClient.connect(url, function(err, client) { 
        if (err)
            return console.log("Connection failed")
        console.log("Connection successful"); 
        const db = client.db(dbName);
        let obj = {
            id: parseInt(req.body.id), 
            lastname: req.body.lastname, 
            firstname: req.body.firstname, 
            email: req.body.email, 
            phone: req.body.phone, 
            validated: req.body.validated, 
            admin: req.body.admin
        };
        db.collection("students").insertOne(obj, function (err, res) {
            if (err) throw err;
            console.log("1 student inserted")
            client.close();
        });
    });
    res.send("envoyé ?");

});



app.listen(3000, function() { 
    console.log('Server running on port 3000'); 
});