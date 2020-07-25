const express = require("express");
var PORT = 8000 || process.env.PORT;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Booking = require("./models/booking");
const Message = require("./models/message");
const app = express();
// const home = require('./public/views/cookworld.ejs');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//MongoDB:
mongoose.connect("mongodb://localhost/SangeeMiniProject",{ useUnifiedTopology: true, useNewUrlParser: true })
.then(console.log("Connected to DB"));


app.get("/", (req, res) => {
  res.render("cookworld");
});

app.get("/food", (req, res) => {
  res.render("food");
});

app.get("/booking", (req, res) => {
  res.redirect("/");
});

app.get("/message", (req, res) => {
  res.redirect("/");
});

app.get("/bookingDetails", (req, res) => {
  // res.render("customer");
  Booking.find({}, (err, BookingFound) => {
    if (err) {
      console.log(err);
    } else {
      res.render("booking", { Booking: BookingFound });
    }
  });
});

app.get("/feedback", (req, res) => {
  Message.find({}, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.render("message", { Messages: found, title: "Customer Feedback" });
    }
  });
});
//Booking POST Route:
app.post("/booking", (req, res) => {
  Booking.create(req.body, (err, Success) => {
    if (err) {
      console.log(err);
    } else if (Success) {
      console.log(req.body);
      res.redirect("/");
    }
  });
});

app.post("/message", (req, res) => {
  // console.log(req.body);
  Message.create(req.body, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});
app.listen(PORT, (req, res) => {
  console.log("Server is Running");
});
