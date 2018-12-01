const mongoose = require("mongoose"),
  keys = require("../config/dev.js");

mongoose.connect(
  keys.MongoURI,
  { useNewUrlParser: true }
);


