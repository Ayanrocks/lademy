module.exports = {
  MongoURI: process.env.MongoURI,
  sessionSecret: process.env.SESSION_SECRET,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  facebookClientID: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  mailjetgridAPIKey: process.env.MAILJET_API_KEY,
  awsConfig: {
    secretAcessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACESS_KEY_ID,
    region: "us-east-2"
  }
};
