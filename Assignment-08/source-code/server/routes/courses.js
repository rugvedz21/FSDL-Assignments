const router = require('express').Router();
const Course = require('../models/Course');
const { requireAuth, requireRole } = require('../middleware/auth');

router.get('/', async (_req, res) => {
  const courses = await Course.find().sort({ code: 1 });
  res.json(courses);
});

router.post('/', requireAuth, requireRole('admin'), async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
