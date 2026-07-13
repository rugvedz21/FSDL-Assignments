const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Booking = require('../models/Booking');

router.get('/cars', async (req, res) => {
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
  res.json(cars);
});

router.get('/cars/featured', async (req, res) => {
  const cars = await Car.find({ featured: true }).limit(3);
  res.json(cars);
});

router.get('/cars/brands', async (req, res) => {
  res.json(await Car.distinct('brand'));
});

router.get('/cars/:id', async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) return res.status(404).json({ error: 'Not found' });
  const similar = await Car.find({ brand: car.brand, _id: { $ne: car._id } }).limit(3);
  res.json({ car, similar });
});

router.post('/cars', async (req, res) => {
  const car = await Car.create(req.body);
  res.json(car);
});

router.put('/cars/:id', async (req, res) => {
  res.json(await Car.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/cars/:id', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

router.post('/bookings', async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
});

router.get('/bookings', async (req, res) => {
  res.json(await Booking.find().populate('car').sort({ createdAt: -1 }));
});

router.get('/cart', async (req, res) => {
  const cars = await Car.find({ _id: { $in: req.session.cart || [] } });
  const total = cars.reduce((s, c) => s + c.price, 0);
  res.json({ cars, total, count: cars.length });
});

router.post('/cart/:id', (req, res) => {
  if (!req.session.cart) req.session.cart = [];
  if (!req.session.cart.includes(req.params.id)) req.session.cart.push(req.params.id);
  res.json({ count: req.session.cart.length });
});

router.delete('/cart/:id', (req, res) => {
  req.session.cart = (req.session.cart || []).filter(id => id !== req.params.id);
  res.json({ count: req.session.cart.length });
});

router.delete('/cart', (req, res) => {
  req.session.cart = [];
  res.json({ count: 0 });
});

module.exports = router;
