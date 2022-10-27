const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courseTitle = require("./data/courseTitle.json");
const courseDetails = require("./data/courseData.json");

app.get("/", (req, res) => {
  res.send("API server is running");
});

//course title list send through API
app.get("/course", (req, res) => {
  res.send(courseTitle);
});

//course data send through API
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedData = courseDetails.find(
    (course) => course.category_id === id
  );
  res.send(selectedData);
  console.log(id);
  console.log(selectedData);
});

app.listen(port, () => {
  console.log("server is running on port:", port);
});
