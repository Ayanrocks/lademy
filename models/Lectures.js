const mongoose = require("mongoose");
const { Schema } = mongoose;

const lectureSchema = new Schema({
  lectureName: String,
  stream: String,
  students: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Students"
  },
  teachers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teachers"
  },
  lectureUrl: String,
  views: Number
});

module.exports = mongoose.model("lectures", lectureSchema);
