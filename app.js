const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  path = require('path'),
  keys = require("./config/keys.js");

require('./database/connection');
require("./models/Lectures");
require("./models/Students");
require('./models/Teachers')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Started at " + PORT));
