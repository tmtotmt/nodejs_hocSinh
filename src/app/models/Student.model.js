const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// định nghĩa 1 schema   Stutent
const student = new Schema({
    name: { type: String, default: 'no Name' },
    age: { type: Number },
    description: { type: String },
    img: {type: String},
    video: {type: String},
    date: { type: Date, default: Date.now },
  });

// tạo một model student từ class Schema đã định nghĩa, rồi xuất ra
module.exports = mongoose.model('student', student); //mongoose.model('ModelName', mySchema)
