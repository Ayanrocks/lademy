const aws = require('aws-sdk');
const keys = require('../config/keys');

aws.config.update(keys.awsConfig);

module.exports = new aws.S3({ apiVersion: '2006-03-01' });
