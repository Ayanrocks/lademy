/*
 * Students passport authentication service
 *
 */

//Dependencies
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const googleStrategy = require("passport-google-oauth20").Strategy;
const facebookStrategy = require("passport-facebook").Strategy;
const Students = require("../../models/Students");
const bcrypt = require("bcrypt");
const uuid = require("uuid/v4");

passport.serializeUser((student, done) => {
  done(null, student);
});

passport.deserializeUser((id, done) => {
  Students.findById(id, (err, student) => {
    done(err, student);
  });
});

passport.use(
  new localStrategy((username, password, done) => {
    Students.findOne({ username }, (err, student) => {
      if (err) {
        return done(err);
      }
      if (!student) {
        return done(null, false, { message: "User not Found" });
      }
      if (validPassword(password, student.password)) {
        return done(null, false, { message: "Incorrect Password" });
      }
      return done(null, student);
    });
  })
);

// Google Strategy

passport.use(
  new googleStrategy(
    {
      clientID:
        "520010618723-hblvljb1cf0mipppc2e3sgi1nr5marsj.apps.googleusercontent.com",
      clientSecret: "ZvwDh7AKv-l0CbJexIjPKczf",
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await Students.findOne({
          email: profile.emails[0].value
        });
        if (existingUser) {
          return done(null, existingUser);
        }
        console.log(profile);
        const student = await new Students({
          studentID: uuid(),
          profilePic: profile.picture,
          name: profile.displayName,
          username: "",
          age: "",
          gender: profile.gender,
          email: profile.emails[0].value,
          phone: "",
          stream: "",
          lectures: null
        }).save();
        done(null, student);
      } catch (e) {
        console.log(e);
        done(e, null, "Server Error");
      }
    }
  )
);

//Facebook Strategy

passport.use(
  new facebookStrategy(
    {
      clientID: "585576495199660",
      clientSecret: "a88fed9831425d5de789afc1e8ca8a35",
      callbackURL: "/auth/facebook/callback",
      enableProof: true,
      profileFields: ["id", "email", "gender", "name", "birthday"]
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        const existingUser = await Students.findOne({
          email: profile.emails[0].value
        });
        if (existingUser) {
          return done(null, existingUser, "User found");
        }
        const student = await new Students({
          studentID: uuid(),
          profilePic: profile.picture,
          name: profile.name.givenName + " " + profile.name.familyName,
          username: "",
          age: "",
          gender: profile.gender,
          email: profile.emails[0].value,
          phone: "",
          stream: "",
          lectures: null
        }).save();
        done(null, student);
      } catch (e) {
        done(e, null, "Error 500");
      }
    }
  )
);

function validPassword(password, hashedPassword) {
  bcrypt.compare(password, hashedPassword).then(res => {
    if (res) {
      return true;
    }
  });
  return false;
}
