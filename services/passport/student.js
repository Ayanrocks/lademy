/*
 * Students passport authentication service
 *
 */

// Dependencies
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require('bcrypt');
const uuid = require('uuid/v4');
const keys = require('../../config/keys');
const Students = require('../../models/Students');

passport.serializeUser((student, done) => {
  done(null, student.id);
});

passport.deserializeUser((id, done) => {
  Students.findById(id, (err, student) => {
    done(err, student);
  });
});

function validPassword(password, hashedPassword) {
  bcrypt.compare(password, hashedPassword).then(res => res);
}

passport.use(
  new LocalStrategy((username, password, done) => {
    Students.findOne({ username }, (err, student) => {
      console.log(student);
      if (err) {
        console.log('err');
        return done(err);
      }
      if (!student) {
        console.log('nooo');
        return done(null, false, { message: 'User not Found' });
      }
      if (!validPassword(password, student.password)) {
        return done(null, false, { message: 'Incorrect Password' });
      }
      console.log('Sucess', student);
      return done(null, student);
    });
  }),
);

// Google Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await Students.findOne({
          email: profile.emails[0].value,
        });
        if (existingUser) {
          return done(null, existingUser);
        }
        const student = await new Students({
          studentID: uuid(),
          profilePic: profile.picture,
          name: profile.displayName,
          username: '',
          age: '',
          gender: profile.gender,
          email: profile.emails[0].value,
          phone: '',
          stream: '',
          lectures: null,
        }).save();
        done(null, student);
      } catch (e) {
        done(e, null, 'Server Error');
      }
    },
  ),
);

// Facebook Strategy

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      enableProof: true,
      profileFields: ['id', 'email', 'gender', 'name', 'birthday'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await Students.findOne({
          email: profile.emails[0].value,
        });
        if (existingUser) {
          return done(null, existingUser, 'User found');
        }
        const student = await new Students({
          studentID: uuid(),
          profilePic: profile.picture,
          name: `${profile.name.givenName} ${profile.name.familyName}`,
          username: '',
          age: '',
          gender: profile.gender,
          email: profile.emails[0].value,
          phone: '',
          stream: '',
          lectures: null,
        }).save();
        return done(null, student);
      } catch (e) {
        return done(e, null, 'Error 500');
      }
    },
  ),
);
