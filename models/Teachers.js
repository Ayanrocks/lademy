const mongoose = require("mongoose");
const { Schema } = mongoose;
const plm = require("passport-local-mongoose");

const teacherSchema = new Schema({
  teacherID: Number,
  name: String,
  age: Number,
  stream: String,
  gender: String,
  lectures: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lectures"
  }
});

teacherSchema.plugin(plm);

module.exports = mongoose.model("Teachers", teacherSchema);
