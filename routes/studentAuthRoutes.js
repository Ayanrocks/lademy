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
const multer = require("multer");
const keys = require("../config/keys");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

const profilePicPath = path.join(__dirname, "../public/profilePic/");

const fileFilter = function(req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/png"];

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Wrong File Type");
    error.code = "LIMIT_FILE_TYPES";

    return cb(error, false);
  }

  cb(null, true);
};

var upload = multer({
  dest: profilePicPath,
  fileFilter,
  limits: {
    fileSize: 1600000
  }
});
let emailVerificationToken = "";
let resetVerificationToken = "";
let studentDataTemp = {};

// Checks JWT tokens
function tokenCheck(req, res, next) {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
}

// Function to Signup Students
function signup(req, res, hash, salt) {
  const studentID = uuid();
  let imageExtension = req.body.profilePic.split(".").pop();
  const newFile = profilePicPath + studentID + "." + imageExtension;
  fs.rename(req.body.profilePic, newFile, err => {
    if (err) {
      console.log(err);
    }
  });
  // const profilePic =
  //   req.body.gender === "Male"
  //     ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVDerql1PFrLlwTV-S3KBWuXx2loziJGcNd_jxVNmVBXZy4boxA"
  //     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0byTDjwOUPqhChtmb35ug_iaCSWE6nmimWzDfgmNXpUbjkiMzJQ";
  const studentDetails = {
    studentID,
    profilePic: newFile,
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
      res.status(500).send({ Error: "Error saving to database" });
    }
  });
}

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
          bcrypt.genSalt(10, (err, salt) => {
            if (!err && salt) {
              bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (!err && hash) {
                  signup(req, res, hash, salt);
                  console.log("Done SAving");
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

  app.post("/student/verify", upload.single("file"), async (req, res) => {
    emailVerificationToken = uuid();
    try {
      await sharp(req.file.path)
        .resize(500)
        .flatten("white")
        .toFile(profilePicPath + req.file.originalname);
      await fs.unlink(req.file.path, err => {
        if (err) {
          res.status(500);
        }
      });
    } catch (e) {
      console.log(e);
      res.status(502);
    }
    studentDataTemp = {
      profilePic: req.file.destination + "/" + req.file.originalname,
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      age: req.body.age,
      gender: req.body.gender
    };
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
        console.log("Mail Sent to ", req.body.email);
        setTimeout(() => {
          emailVerificationToken = "";
          studentDataTemp = {};
          console.log("Token Expired");
        }, 1000 * 60 * 15);
        res.status(200).send();
      } else {
        console.log(err);
        res.status(500);
      }
    });
  });

  app.get("/student/verification/:emailVerificationToken", (req, res) => {
    if (req.params.emailVerificationToken === emailVerificationToken) {
      console.log(studentDataTemp);
      request.post(
        {
          url: "http://localhost:5000/student/signup",
          method: "POST",
          form: studentDataTemp
        },
        err => {
          if (err) {
            res.send({ Error: "Error Saving to DB" });
            request.get(`/student/verification/${emailVerificationToken}`);
          }
          studentDataTemp = {};
          emailVerificationToken = "";
          res.status(200).redirect("/student/dashboard");
        }
      );
    } else {
      studentDataTemp = {};
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
        // request.post(options, (err, response, body) => {
        //   if (!err) {
        //     console.log("Success send");
        //     setTimeout(() => {
        //       emailVerificationToken = "";
        //       console.log("Token Expired");
        //     }, 1000 * 60 * 15);
        //     res.status(200).send();
        //   } else {
        //     console.log(err);
        //     res.status(500);
        //   }
        // });
        res.send("DOe");
      } else {
        console.log("Not found");
        res.status(404).send({ error: "No student Found" });
      }
    });
  });

  app.get("/student/info", (req, res) => {
    res.send(req.user);
  });

  //Login the student
  app.post("/student/login", passport.authenticate("local"), (req, res) => {
    console.log("Authenticatiion successful");

    res.status(200).send({ status: "success" });
  });
};
