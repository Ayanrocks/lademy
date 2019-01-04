/*
 * Students passport authentication service
 *
 */

//Dependencies
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const googleStrategy = require("passport-google-oauth2").Strategy;
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
      proxy: false
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        email: profile.emails[0].value
      });
      if (existingUser) {
        return done(null, existingUser);
      }
      console.log(profile);
      const user = await new User({
        studentID: uuid(),
        profilePic: profile.picture,
        name: profile.displayName,
        username: profile.name,
        age: "",
        gender: profile.gender,
        email: profile.emails[0].value,
        phone: "",
        stream: "",
        lectures: ""
      }).save();
      done(null, user);
    }
  )
);

//Facebook Strategy

passport.use(
  new facebookStrategy(
    {
      clientID: "<@TODO Add your credentials>",
      clientSecret: "<@TODO Add your credentials>",
      callbackURL: "/auth/facebook/callback",
      enableProof: true,
      profileFields: ["id", "emails", "name", "birthday"]
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        email: profile.emails[0].value
      });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        DOB: profile.birthday
      }).save();
      done(null, user);
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
