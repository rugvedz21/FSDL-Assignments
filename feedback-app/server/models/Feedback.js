const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, trim: true, maxlength: 1000 },
    categories: [{ type: String, enum: ['teaching', 'content', 'pace', 'materials'] }],
  },
  { timestamps: true }
);

feedbackSchema.index({ student: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
