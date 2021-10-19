const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

// định nghĩa 1 schema   Stutent
const StudentSchema = new Schema({
    name: { type: String, default: 'no Name' },
    age: { type: Number },
    description: { type: String },
    img: {type: String},
    video: {type: String},
    slug: {type: String, slug: 'name', unique: true}
  }, {
    timestamps: true,
  });

// tạo một model student từ class Schema đã định nghĩa, rồi xuất ra
module.exports = mongoose.model('student', StudentSchema); //mongoose.model('ModelName', mySchema)
