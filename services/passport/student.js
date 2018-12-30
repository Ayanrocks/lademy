/*
 * Students passport authentication service
 *
 */

//Dependencies
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Students = require("../../models/Students");
const mongoose = require("mongoose");

passport.serializeUser((student, done) => {
  done(null, student.studentID);
});

passport.deserializeUser((id, done) => {
  Students.findById();
});

passport.use(new localStrategy(Students.authenticate()));
