/*
 *  Student authentication routes file
 *
 */

// Dependencies
const passport = require("passport");
const Student = require("../models/Students");
const bcrypt = require("bcrypt");
const uuid = require("uuid/v4");
const request = require("request");
const keys = require("../config/keys");

var emailVerificationToken = "";

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

  app.post("/student/verify", (req, res) => {
    emailVerificationToken = uuid();
    console.log(emailVerificationToken);
    htmlcontent = `<!DOCTYPE html><html lang="en"> <body> <h1 style="text-align: center; margin: 50px auto">Lademy verification</h1> <div style="margin: 50px auto; text-align: center"> <p> Enter the below link to the browser or <a href="https://lademy.herokuapp.com/student/verification/${emailVerificationToken}" >Click Here</a >. <strong>Link will expire in 15 minutes</strong> </p><div> <a href="https://lademy.herokuapp.com/student/verification/${emailVerificationToken}" >https://lademy.herokuapp.com/student/verification/${emailVerificationToken}</a > </div></div></body></html>`;
    const options = {
      method: "POST",
      url: "https://api.sendgrid.com/v3/mail/send",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + keys.sendgridAPIKey
      },
      body: {
        personalizations: [
          {
            to: [{ email: req.body.email, name: req.body.name }],
            subject: "Email Verification"
          }
        ],
        content: [
          {
            type: "text/plain",
            value: htmlcontent
          },
          {
            type: "text/html",
            value: htmlcontent
          }
        ],
        from: {
          email: "no-reply@lademy.com",
          name: "Lademy Customer Support"
        },
        reply_to: {
          email: "lademy.official@gmail.com",
          name: "Lademy Support"
        }
      },
      json: true
    };
    request.post(options, (err, response, body) => {
      if (!err) {
        console.log(emailVerificationToken);
        console.log("Success send");
        setTimeout(() => {
          emailVerificationToken = "";
          console.log("Token Expired");
        }, 1000 * 60 * 15);
        console.log(body);
        res.status(200).send("OK");
      } else {
        console.log(err);
        res.status("500").send("Server Error");
      }
    });
  });

  app.get("/student/verification/:emailVerificationToken", (req, res) => {
    if (req.params.emailVerificationToken == emailVerificationToken) {
      emailVerificationToken = "";
      console.log("Success, Token Expire");
      res.status(200);
    } else {
      res.send("Token Expired");
    }
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
