const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

const url = process.env.DB_URL;
const client = new MongoClient(url);

const databaseName = "kapitalistischeFreundebuch";

client
  .connect()
  .then((connectedClient) => {
    const db = connectedClient.db(databaseName);
    const friends = db.collection("friends");

    return friends;
  })
  .then((friends) => {
    console.log(friends);
    client.close(); // close connection
  });
