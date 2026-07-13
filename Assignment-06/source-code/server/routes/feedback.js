const router = require('express').Router();
const mongoose = require('mongoose');
const Feedback = require('../models/Feedback');
const { requireAuth, requireRole } = require('../middleware/auth');

router.post('/', requireAuth, requireRole('student'), async (req, res) => {
  try {
    const { courseId, rating, comment, categories } = req.body;
    const fb = await Feedback.create({
      student: req.user.id,
      course: courseId,
      rating,
      comment,
      categories,
    });
    res.status(201).json(fb);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ error: 'You already reviewed this course' });
    res.status(400).json({ error: e.message });
  }
});

router.get('/course/:id', requireAuth, requireRole('admin'), async (req, res) => {
  const list = await Feedback.find({ course: req.params.id })
    .populate('student', 'name email')
    .sort({ createdAt: -1 });
  res.json(list);
});

router.get('/summary', requireAuth, requireRole('admin'), async (_req, res) => {
  const summary = await Feedback.aggregate([
    {
      $group: {
        _id: '$course',
        avgRating: { $avg: '$rating' },
        count: { $sum: 1 },
      },
    },
    { $lookup: { from: 'courses', localField: '_id', foreignField: '_id', as: 'course' } },
    { $unwind: '$course' },
    { $project: { _id: 0, courseId: '$_id', code: '$course.code', title: '$course.title', avgRating: 1, count: 1 } },
    { $sort: { avgRating: -1 } },
  ]);
  res.json(summary);
});

module.exports = router;
