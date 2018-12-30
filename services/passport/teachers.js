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

// @TODO add custom authentiocation fucntion to hasdh password and store data accordingly

passport.use(new localStrategy(Teachers.authenticate()));
