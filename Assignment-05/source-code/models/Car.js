const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  kmDriven: { type: Number, default: 0 },
  fuel: { type: String, enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG'], default: 'Petrol' },
  transmission: { type: String, enum: ['Manual', 'Automatic'], default: 'Manual' },
  color: { type: String, default: 'Black' },
  description: { type: String, default: '' },
  image: { type: String, default: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800' },
  owner: { type: String, default: 'First' },
  location: { type: String, default: 'Mumbai' },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Car', carSchema);
