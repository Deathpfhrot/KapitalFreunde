const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

function findAllFriends() {
  return getDB().then((db) => db.collection("friends").find().toArray());
}

function findFriendsById(id) {
  return getDB().then((db) =>
    db.collection("friends").findOne({ _id: new ObjectId(id) })
  );
}

module.exports = {
  findAllFriends,
  findFriendsById,
};
