/*
 *  Student authentication routes file
 *
 */

// Dependencies
const passport = require('passport');
const bcrypt = require('bcrypt');
const uuid = require('uuid/v4');
const request = require('request');
const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const Student = require('../models/Students');
const S3 = require('../services/aws');

// File Profile Path

const profilePicPath = path.join(__dirname, '../public/profilePic/');

// Function to filter File Types

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png'];

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error('Wrong File Type');
    error.code = 'LIMIT_FILE_TYPES';

    return cb(error, false);
  }

  return cb(null, true);
};

// Declared variables

let emailVerificationToken = '';
const resetVerificationToken = '';
let studentDataTemp = {};

// File Upload Handlers

const upload = multer({
  dest: profilePicPath,
  fileFilter,
  limits: {
    fileSize: 1600000,
  },
});

// Checks JWT tokens

function tokenCheck(req, res, next) {
  const header = req.headers.authorization;

  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    // If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
}

// **** Function to Signup Students ****

function signup(req, res, hash, salt) {
  // Creating Student ID
  const studentID = uuid();
  const imageExtension = req.body.profilePic.split('.').pop();
  const newFile = `${studentID}.${imageExtension}`;
  fs.renameSync(req.body.profilePic, profilePicPath + newFile);
  let awsLocation = '';
  fs.readFile(profilePicPath + newFile, (err, file) => {
    if (err) throw err;
    const params = {
      ACL: 'public-read',
      Bucket: 'lademy', // pass your bucket name
      Key: newFile,
      Body: file,
    };
    S3.upload(params, (s3Err, data) => {
      if (s3Err) throw s3Err;
      awsLocation = data.Location;
      console.log(`upload ${awsLocation}`);
      console.log(`aws: ${awsLocation}`);

      const studentDetails = {
        studentID,
        profilePic: awsLocation,
        username: req.body.username,
        password: hash,
        salt,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
        stream: '',
        gender: req.body.gender,
        lectures: null,
      };

      Student.create(studentDetails, (err) => {
        if (!err) {
          res.status(200).send('Saved sucessfully');
          fs.unlinkSync(profilePicPath + newFile);
        } else {
          console.log(err);
          res.status(500).send({ Error: 'Error saving to database' });
        }
      });
    });
  });
}

module.exports = (app) => {
  // Register a student route
  app.post('/student/signup', (req, res) => {
    // Register the student to the DB
    Student.findOne({ username: req.body.username, email: req.body.email }, (err, student) => {
      if (!err && student) {
        res.send({ Error: 'Username or email Exists' });
      } else if (!student) {
        bcrypt.genSalt(10, (err, salt) => {
          if (!err && salt) {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (!err && hash) {
                signup(req, res, hash, salt);
                console.log('Done Saving');
              } else {
                console.log(err, 'Error hashing pass');
              }
            });
          } else {
            console.log(err, 'Unable to generate salt');
          }
        });
      }
    });
  });

  app.post('/student/verify', upload.single('file'), async (req, res) => {
    emailVerificationToken = uuid();
    try {
      await sharp(req.file.path)
        .resize(500)
        .flatten('white')
        .toFile(profilePicPath + req.file.originalname);
      await fs.unlink(req.file.path, (err) => {
        if (err) {
          res.status(500);
        }
      });
    } catch (e) {
      console.log(e);
      res.status(502);
    }

    Student.findOne({ username: req.body.username, email: req.body.email }, (err, student) => {
      if (!err && student) res.send({ msg: 'Username or Email Exists' });
      else {
        studentDataTemp = {
          profilePic: `${req.file.destination}/${req.file.originalname}`,
          username: req.body.username,
          password: req.body.password,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          age: req.body.age,
          gender: req.body.gender,
        };

        const htmlcontent = `<!DOCTYPE html><html lang="en"><head><title>Email Verification</title></head> <body> <h1 style="text-align: center; margin: 50px auto">Lademy verification</h1> <div style="margin: 50px auto; text-align: center"> <p> Enter the below link to the browser or <a href="http://lademy.herokuapp.com/student/verification/${emailVerificationToken}" >Click Here</a >. <strong>Link will expire in 15 minutes</strong> </p><div> <a href="https://lademy.herokuapp.com/student/verification/${emailVerificationToken}" >https://lademy.herokuapp.com/student/verification/${emailVerificationToken}</a > </div></div></body></html>`;
        const options = {
          method: 'POST',
          url: 'https://api.mailjet.com/v3.1/send',
          headers: {
            Authorization: `Basic ${keys.mailjetAPIKey}`,
            'content-type': 'application/json',
          },
          body: {
            Messages: [
              {
                From: {
                  Email: 'no-reply-lademy@orilliance.com',
                  Name: 'Lademy Support',
                },
                To: [{ Email: req.body.email, Name: req.body.name }],
                Subject: 'Email Verification',
                TextPart: htmlcontent,
                HTMLPart: htmlcontent,
              },
            ],
          },
          json: true,
        };
        request.post(options, (err) => {
          if (!err) {
            setTimeout(() => {
              emailVerificationToken = '';
              studentDataTemp = {};
            }, 1000 * 60 * 15);
            res.send({ msg: 'Verification Mail Sent' });
          } else {
            res.status(500);
          }
        });
      }
    });
  });

  app.get('/student/verification/:emailVerificationToken', (req, res) => {
    if (req.params.emailVerificationToken === emailVerificationToken) {
      request.post(
        {
          url: 'http://localhost:5000/student/signup',
          method: 'POST',
          form: studentDataTemp,
        },
        (err) => {
          if (err) {
            res.send({ Error: 'Error Saving to DB' });
            request.get(`/student/verification/${emailVerificationToken}`);
          }
          studentDataTemp = {};
          emailVerificationToken = '';
          res.status(200).redirect('/student/login');
        },
      );
    } else {
      studentDataTemp = {};
      res.send('Token Expired');
    }
  });

  // Google login route
  app.get(
    '/student/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email', 'openid'] }),
  );

  // Google auth callback
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.send({ status: 'done' });
  });

  // Facebook login route
  app.get('/student/auth/facebook', passport.authenticate('facebook'));

  // Facebook auth callback
  app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    res.send({ status: 'done' });
  });

  // Reset Password Logic

  // Forget password link
  app.post('/student/forget', (req, res) => {
    Student.findOne({ email: req.body.email }, (err, student) => {
      if (!err && student) {
        const htmlcontent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Reset Password</title></head><body><h1 style="text-align:center;margin:50px auto">Lademy Reset Password</h1><div style="margin:50px auto;text-align:center"><p>Enter the below link to the browser or <a href="http://lademy.herokuapp.com/student/reset/${resetVerificationToken}">Click Here</a> to reset your password . <strong>Link will expire in 15 minutes</strong></p><div><a href="https://lademy.herokuapp.com/student/reset/${resetVerificationToken}">https://lademy.herokuapp.com/student/reset/${resetVerificationToken}</a></div></div></body></html>`;
        const options = {
          method: 'POST',
          url: 'https://api.mailjet.com/v3.1/send',
          headers: {
            Authorization: `Basic ${keys.mailjetAPIKey}`,
            'content-type': 'application/json',
          },
          body: {
            Messages: [
              {
                From: {
                  Email: 'no-reply-lademy@orilliance.com',
                  Name: 'Lademy Support',
                },
                To: [{ Email: req.body.email, Name: req.body.name }],
                Subject: 'Reset Password Link',
                TextPart: htmlcontent,
                HTMLPart: htmlcontent,
              },
            ],
          },
          json: true,
        };
        request.post(options, (err) => {
          if (!err) {
            setTimeout(() => {
              emailVerificationToken = '';
            }, 1000 * 60 * 15);
            res.status(200).send();
          } else {
            res.status(500);
          }
        });
        res.send('Done');
      } else {
        res.status(404).send({ error: 'No student Found' });
      }
    });
  });

  app.get('/student/info', (req, res) => {
    res.send(req.user);
  });

  // Login the student
  app.post('/student/login', passport.authenticate('local'), (req, res) => {
    res.status(200).send({ status: 'success' });
  });

  // Logout Student

  app.get('/student/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};

// !!Trash Comments

// const profilePic =
//   req.body.gender === "Male"
//     ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVDerql1PFrLlwTV-S3KBWuXx2loziJGcNd_jxVNmVBXZy4boxA"
//     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0byTDjwOUPqhChtmb35ug_iaCSWE6nmimWzDfgmNXpUbjkiMzJQ";
