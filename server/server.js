const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  level: { type: String, required: true },
  app: { type: String, required: true },
  imgUrl: { type: String, required: true },
  userImgUrl: { type: String, required: true },
  price: { type: Number, required: true },
});

const Courses = mongoose.model("courses", courseSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 8080;

app.get("/courses", (req, res) => {
  Courses.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
  // res.send("Hello World!");
});

app.get("/courses/:id", (req, res) => {
  const { id } = req.params;
  Courses.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
  // res.send("Hello World!");
});

// app.get("/courses/:id", (req, res) => {
//   Courses.findByIdAndDelete(id, (err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       res.send(500).json({ message: err });
//     }
//   });
//   // res.send("Hello World!");
// });

app.post("/courses", (req, res) => {
  let course = new Courses({
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
    app: req.body.app,
    imgUrl: req.body.imgUrl,
    userImgUrl: req.body.userImgUrl,
    price: req.body.price,
  });
  course.save();
});

app.delete("/courses/:id", (req, res) => {
  const { id } = req.params;
  Courses.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("Deleted");
    } else {
      res.status(500).json({ message: err });
    }
  });
});

mongoose.connect(
  "mongodb+srv://maralzeynal:Maral.2003@cluster0.wojm7e7.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      app.listen(port, () => {
        console.log(`http://localhost:${port}`);
      });
    } else {
      console.log(err);
    }
  }
);
