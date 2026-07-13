const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true, trim: true },
    title: { type: String, required: true, trim: true },
    instructor: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
