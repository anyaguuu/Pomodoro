// const {MongoClient} = require('mongodb');

// async function listDatabases(client) {
//     // databasesList = await client.db().admin().listDatabases();

//     // console.log("Databases:");
//     // databasesList.databases.forEach(db => console.log( ` -${db.name}`));

//     // const mongodb = app.currentUser.mongoClient("mongodb-atlas");

//     const names = client.db("Names").collection("name1");

//     const ans = await names.findOne({name:"William"});
//     console.log("name: ", ans);
// }

// async function main() {
//     const uri = "mongodb+srv://anyagu:Sojenya135@cluster0.tiar473.mongodb.net/test";
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // make DB calls
//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

let mongoose = require("mongoose");
const uri = "mongodb+srv://anyagu:Sojenya135@cluster0.tiar473.mongodb.net/test";
mongoose.connect(url);

mongoose.connection.on("connected", function() {
    console.log("Mongoose connected to " + url);
})
