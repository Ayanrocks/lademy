const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema({
    studentID : Number,
    name: String,
    age: Number,
    stream: String,
    gender: String,
    lectures: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lectures'
    }
})

module.exports = mongoose.model('Students', studentSchema);