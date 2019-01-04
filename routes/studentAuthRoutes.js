/*
 *  Student authentication routes file
 *
 */

// Dependencies
const passport = require("passport");
const Student = require("../models/Students");
const bcrypt = require("bcrypt");
const uuid = require("uuid/v4");

module.exports = app => {
  // Register a student route
  app.post("/student/signup", (req, res) => {
    //Register the student to the DB
    Student.findOne({ username: req.body.username }, (err, student) => {
      if (!err && student) {
        res.send({ Error: "Username Exists" });
      } else if (!student) {
        const salt = bcrypt.genSalt(10, (err, salt) => {
          if (!err && salt) {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (!err && hash) {
                const studentID = uuid();
                const studentDetails = {
                  studentID,
                  profilePic: "",
                  username: req.body.username,
                  password: hash,
                  salt,
                  name: req.body.name,
                  email: req.body.email,
                  phone: req.body.phone,
                  age: req.body.age,
                  stream: "",
                  gender: req.body.gender,
                  lectures: ""
                };

                Student.create(studentDetails, err => {
                  if (!err) {
                    res.status(200).send("Saved sucessfully");
                  } else {
                    console.log(err);
                    res.status(500).send({ Error: "Error saving to database" });
                  }
                });
              } else {
                console.log(err, "Error hashing pass");
              }
            });
          } else {
            console.log(err, "Unable to generate salt");
          }
        });
      }
    });
  });

  // Google login route
  app.get(
    "/student/auth/google",
    passport.authenticate("google", { scope: ["profile", "email", "openid"] })
  );

  //Google auth callback
  app.get("/auth/google/callback", (req, res) => {
    console.log("Success google");
    res.send({ status: "done" });
  });

  //Login the student
  app.post("/student/login", passport.authenticate("local"), (req, res) => {
    console.log("Authenticatiion successful");
    console.log(req.user);

    res.send({ status: "Success" });
  });
};
