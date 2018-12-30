/*
 *  Student authentication routes file
 *
 */

// Dependencies
const passport = require("passport");
const Student = require("../models/Students");

module.exports = app => {
  // Register a student route
  app.post("/student/signup", (req, res) => {
    //Register the student to the DB
    Student.register(
      new Student({ username: req.body.username }),
      req.body.password,
      (err, student) => {
        if (!err && student) {
          //Authenticate the student with passport
          passport.authenticate("local");
          console.log(student);
          res.status(200).send();
        } else {
          console.log(err);
          res.status(500).send({ Error: "Unable to save to the database" });
        }
      }
    );
  });

  //Login the student
  app.post("/student/login", passport.authenticate("local"), (req, res) => {
    console.log("Authenticatiion successful");
    res.send({ status: "Success" });
  });
};
