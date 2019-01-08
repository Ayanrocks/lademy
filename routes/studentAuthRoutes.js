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
    Student.findOne(
      { username: req.body.username, email: req.body.email },
      (err, student) => {
        if (!err && student) {
          res.send({ Error: "Username or email Exists" });
        } else if (!student) {
          const salt = bcrypt.genSalt(10, (err, salt) => {
            if (!err && salt) {
              bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (!err && hash) {
                  const studentID = uuid();
                  const profilePic =
                    req.body.gender === "Male"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVDerql1PFrLlwTV-S3KBWuXx2loziJGcNd_jxVNmVBXZy4boxA"
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0byTDjwOUPqhChtmb35ug_iaCSWE6nmimWzDfgmNXpUbjkiMzJQ";
                  const studentDetails = {
                    studentID,
                    profilePic,
                    username: req.body.username,
                    password: hash,
                    salt,
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    age: req.body.age,
                    stream: "",
                    gender: req.body.gender,
                    lectures: null
                  };

                  Student.create(studentDetails, err => {
                    if (!err) {
                      res.status(200).send("Saved sucessfully");
                    } else {
                      console.log(err);
                      res
                        .status(500)
                        .send({ Error: "Error saving to database" });
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
      }
    );
  });

  // Google login route
  app.get(
    "/student/auth/google",
    passport.authenticate("google", { scope: ["profile", "email", "openid"] })
  );

  //Google auth callback
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log("Success google");
      res.send({ status: "done" });
    }
  );

  // Facebook login route
  app.get("/student/auth/facebook", passport.authenticate("facebook"));

  //Facebook auth callback
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      console.log("Success facebook");
      res.send({ status: "done" });
    }
  );

  //Login the student
  app.post("/student/login", passport.authenticate("local"), (req, res) => {
    console.log("Authenticatiion successful");

    res.status(200).send({ status: "success" });
  });
};
