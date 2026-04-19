const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.get('/', async (req, res) => {
  const cars = await Car.find({ _id: { $in: req.session.cart } });
  const total = cars.reduce((s, c) => s + c.price, 0);
  res.render('cart', { cars, total });
});

router.post('/add/:id', (req, res) => {
  if (!req.session.cart.includes(req.params.id)) req.session.cart.push(req.params.id);
  res.redirect('back');
});

router.post('/remove/:id', (req, res) => {
  req.session.cart = req.session.cart.filter(id => id !== req.params.id);
  res.redirect('/cart');
});

router.post('/clear', (req, res) => {
  req.session.cart = [];
  res.redirect('/cart');
});

module.exports = router;
