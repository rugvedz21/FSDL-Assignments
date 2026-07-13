const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Booking = require('../models/Booking');

router.get('/', async (req, res) => {
  const { search, brand, fuel, sort } = req.query;
  let filter = {};
  if (search) filter.$or = [
    { brand: new RegExp(search, 'i') },
    { model: new RegExp(search, 'i') }
  ];
  if (brand) filter.brand = brand;
  if (fuel) filter.fuel = fuel;

  let sortOpt = { createdAt: -1 };
  if (sort === 'low') sortOpt = { price: 1 };
  if (sort === 'high') sortOpt = { price: -1 };
  if (sort === 'new') sortOpt = { year: -1 };

  const cars = await Car.find(filter).sort(sortOpt);
  const featured = await Car.find({ featured: true }).limit(3);
  const brands = await Car.distinct('brand');
  res.render('index', { cars, featured, brands, query: req.query });
});

router.get('/cars/new', (req, res) => res.render('new'));

router.post('/cars', async (req, res) => {
  await Car.create(req.body);
  res.redirect('/');
});

router.get('/cars/:id', async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) return res.redirect('/');
  const similar = await Car.find({ brand: car.brand, _id: { $ne: car._id } }).limit(3);
  res.render('show', { car, similar });
});

router.get('/cars/:id/edit', async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.render('edit', { car });
});

router.put('/cars/:id', async (req, res) => {
  await Car.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/cars/' + req.params.id);
});

router.delete('/cars/:id', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

router.post('/cars/:id/book', async (req, res) => {
  await Booking.create({ ...req.body, car: req.params.id });
  res.render('booking-success', { car: await Car.findById(req.params.id) });
});

router.get('/bookings', async (req, res) => {
  const bookings = await Booking.find().populate('car').sort({ createdAt: -1 });
  res.render('bookings', { bookings });
});

module.exports = router;
