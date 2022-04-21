const express = require("express");
const {
  findAllFriends,
  findFriendsById,
} = require("./db-access-folder/db-access");
const cors = require("cors");

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());

app.use((req, _, next) => {
  console.log("New Request", req.method, req.url);
  next();
});

app.get("/friends", (_, res) => {
  findAllFriends()
    .then((allFriends) => res.json(allFriends))
    .catch(() => res.json({ err: "Error finding Friends..." }));
});

app.get("/friends/:id", (req, res) => {
  const id = req.params.id;
  findFriendsById(id)
    .then((allFriends) => res.json(allFriends))
    .catch(() =>
      res.json({ err: "Error finding friends with id " + id + "..." })
    );
});

app.listen(PORT, () => console.log("Server listing to Port: ", PORT));
