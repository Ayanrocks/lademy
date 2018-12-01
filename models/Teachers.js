const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    teacherID: Number,
    name: String,
    age: Number,
    stream: String,
    gender: String,
    lectures: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lectures'
    }
})

module.exports = mongoose.model('Teachers', teacherSchema);