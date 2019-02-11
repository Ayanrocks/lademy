/*
 * Database connection file
 *
 */

const mongoose = require('mongoose');


const keys = require('../config/keys.js');

mongoose.connect(keys.MongoURI, { useNewUrlParser: true });
