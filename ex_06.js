const MongoClient = require('mongodb').MongoClient;
const express = require("express")
const app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const url = 'mongodb://127.0.0.1:27042'
const dbName = 'mern-pool';

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    MongoClient.connect(url, function(err, client) { 
        if (err)
            return console.log("Connection failed")
        console.log("Connection successful"); 
        const db = client.db(dbName);

        db.collection("students").find({validated : "in progress"}, { sort: { lastname: 1} } ).toArray(function(err, content) {
            if (err) return res.send("Failed to save the collection");
            res.send(content);
            client.close();
        });
    });

});

app.listen(3000, function() { 
    console.log('Server running on port 3000'); 
});