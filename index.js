const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courseTitle = require("./data/courseTitle.json");

app.get("/", (req, res) => {
  res.send("API server is running");
});

app.get("/course", (req, res) => {
  res.send(courseTitle);
});

app.listen(port, () => {
  console.log("server is running on port:", port);
});
