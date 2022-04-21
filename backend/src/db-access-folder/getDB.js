const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

const url = process.env.DB_URL;
const client = new MongoClient(url);

const databaseName = process.env.DB_NAME;

let dbRefrence;

function getDB() {
  return new Promise((resolve, rejects) => {
    if (dbRefrence) {
      resolve(dbRefrence);
    } else {
      client
        .connect()
        .then((connectedClient) => {
          const db = connectedClient.db(databaseName);
          dbRefrence = db; // ganz wichting: zwischenspeicher, damit beim nächsten aufruf von getDB die connection nicht neu aufgebaut werden muss
          resolve(db);
        })
        .catch(() => rejects({ err: "Failed to cennect to Database Friends" }));
    }
  });
}

module.exports = { getDB };
