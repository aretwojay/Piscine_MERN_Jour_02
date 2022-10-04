const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27042'

MongoClient.connect(url, function(err, client) { 
    if (err)
        return console.log("Connection failed")
    console.log("Connection successful"); 

    client.close();
});