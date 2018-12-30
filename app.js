/*
 * Main app.js file for the app
 *
 */

//Dependencies

const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  expressSession = require("express-session"),
  passport = require("passport"),
  keys = require("./config/keys.js");

require("./database/connection");
require("./models/Lectures");
require("./models/Students");
require("./models/Teachers");

require("./services/passport/student");
require("./services/passport/teachers");

//Configuration
app.use(cookieParser());
app.use(
  expressSession({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/client/dist"));

//Routes
require("./routes/studentAuthRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

//Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Started at " + PORT));
