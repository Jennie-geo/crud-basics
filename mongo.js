
const findDocument = require("./findInterns.js");
const insertMyMovies = require("./interns.js");
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://jenny:jenny@cluster0-dfmzd.mongodb.net/mongodb-basics?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        console.log("An Error occurred", err);
    } else {
        const collection = client.db("mongodb-basics").collection("devices");
        // perform actions on the collection object
        console.log("Response returned - ", collection);
        insertMyMovies(client.db("mongodb-basics"), () => { });
        client.close();
    };
});


