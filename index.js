const express = require("express");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "/public/")));

server.get("/", (req, res) => {
  res.send("Hello Express");
});

server.get("/auth", (req, res) => {
  res.send("Hello Athenticator");
});

server.listen(3300, () => {
  console.log("Express server running on http://localhost:3300");
});
