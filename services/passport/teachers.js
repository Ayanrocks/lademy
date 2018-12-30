/*
 * Teachers passport authentication service
 *
 */

//Dependencies
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Teachers = require("../../models/Teachers");
const mongoose = require("mongoose");

passport.serializeUser((teacher, done) => {
  done(null, teacher.teacherID);
});

passport.deserializeUser((id, done) => {
  Teachers.findById();
});

passport.use(new localStrategy(Teachers.authenticate()));
