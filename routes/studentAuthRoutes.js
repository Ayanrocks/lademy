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

let emailVerificationToken = "";
let resetVerificationToken = "";
let verify = false;

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
    htmlcontent = `<!DOCTYPE html><html lang="en"><head><title>Email Verification</title></head> <body> <h1 style="text-align: center; margin: 50px auto">Lademy verification</h1> <div style="margin: 50px auto; text-align: center"> <p> Enter the below link to the browser or <a href="http://lademy.herokuapp.com/student/verification/${emailVerificationToken}" >Click Here</a >. <strong>Link will expire in 15 minutes</strong> </p><div> <a href="https://lademy.herokuapp.com/student/verification/${emailVerificationToken}" >https://lademy.herokuapp.com/student/verification/${emailVerificationToken}</a > </div></div></body></html>`;
    const options = {
      method: "POST",
      url: "https://api.mailjet.com/v3.1/send",
      headers: {
        Authorization: "Basic " + keys.mailjetAPIKey,
        "content-type": "application/json"
      },
      body: {
        Messages: [
          {
            From: {
              Email: "no-reply-lademy@orilliance.com",
              Name: "Lademy Support"
            },
            To: [{ Email: req.body.email, Name: req.body.name }],
            Subject: "Email Verification",
            TextPart: htmlcontent,
            HTMLPart: htmlcontent
          }
        ]
      },
      json: true
    };
    request.post(options, (err, response, body) => {
      if (!err) {
        console.log("Success send");
        setTimeout(() => {
          emailVerificationToken = "";
          console.log("Token Expired");
        }, 1000 * 60 * 15);
        res.status(200).send();
      } else {
        console.log(err);
        res.status(500);
      }
    });
  });

  app.get("/student/verify", (req, res) => {
    res.send({ verify: verify });
    if (verify) {
      verify = false;
    }
  });

  app.get("/student/verification/:emailVerificationToken", (req, res) => {
    if (req.params.emailVerificationToken == emailVerificationToken) {
      emailVerificationToken = "";
      verify = true;
      res.status(200).redirect("/student/dashboard");
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

  // Reset Password Logic

  //Forget password link
  app.post("/student/forget", (req, res) => {
    console.log(req.body.email + " from s");
    Student.findOne({ email: req.body.email }, (err, student) => {
      if (!err && student) {
        htmlcontent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Reset Password</title></head><body><h1 style="text-align:center;margin:50px auto">Lademy Reset Password</h1><div style="margin:50px auto;text-align:center"><p>Enter the below link to the browser or <a href="http://lademy.herokuapp.com/student/reset/${resetVerificationToken}">Click Here</a> to reset your password . <strong>Link will expire in 15 minutes</strong></p><div><a href="https://lademy.herokuapp.com/student/reset/${resetVerificationToken}">https://lademy.herokuapp.com/student/reset/${resetVerificationToken}</a></div></div></body></html>`;
        const options = {
          method: "POST",
          url: "https://api.mailjet.com/v3.1/send",
          headers: {
            Authorization: "Basic " + keys.mailjetAPIKey,
            "content-type": "application/json"
          },
          body: {
            Messages: [
              {
                From: {
                  Email: "no-reply-lademy@orilliance.com",
                  Name: "Lademy Support"
                },
                To: [{ Email: req.body.email, Name: req.body.name }],
                Subject: "Reset Password Link",
                TextPart: htmlcontent,
                HTMLPart: htmlcontent
              }
            ]
          },
          json: true
        };
        request.post(options, (err, response, body) => {
          if (!err) {
            console.log("Success send");
            setTimeout(() => {
              emailVerificationToken = "";
              console.log("Token Expired");
            }, 1000 * 60 * 15);
            res.status(200).send();
          } else {
            console.log(err);
            res.status(500);
          }
        });
      } else {
        console.log("Not found");
        res.status(404).send({ error: "No student Found" });
      }
    });
  });

  //Login the student
  app.post("/student/login", passport.authenticate("local"), (req, res) => {
    console.log("Authenticatiion successful");

    res.status(200).send({ status: "success" });
  });
};
