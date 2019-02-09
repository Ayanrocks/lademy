/*
 * Student Model File
 *
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

// Student Schema
const studentSchema = new Schema({
  studentID: String,
  profilePic: String,
  name: String,
  username: String,
  password: String,
  salt: String,
  email: String,
  phone: Number,
  age: Number,
  stream: String,
  gender: String,
  lectures: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lectures',
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Students', studentSchema);
