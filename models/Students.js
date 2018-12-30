const mongoose = require("mongoose");
const { Schema } = mongoose;
const plm = require("passport-local-mongoose");
const studentSchema = new Schema({
  studentID: Number,
  name: String,
  age: Number,
  stream: String,
  gender: String,
  lectures: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lectures"
  }
});

//@TODO remove plm

studentSchema.plugin(plm);

module.exports = mongoose.model("Students", studentSchema);
