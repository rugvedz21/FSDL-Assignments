# 🏎️ CarBazaar — Used Car E-commerce Portal

A premium full-stack marketplace for buying, selling, and booking test drives of used cars.
Built with **Node.js + Express + MongoDB + EJS**.

## ✨ Features
- 🚗 Browse, search, filter & sort used cars (by brand / fuel / price / year)
- ⭐ Featured deals carousel
- 📅 Test-drive booking system with full inquiry form
- 🛒 Session-based shopping cart
- 📝 Full CRUD — sell / list / edit / delete cars
- 🎨 Premium dark-mode UI with gradients, animations, blur effects
- 📱 Fully responsive design

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Make sure MongoDB is running
- Open **MongoDB Compass**
- Connect to: `mongodb://127.0.0.1:27017`
- The app auto-creates database `car_bazaar`

### 3. Seed sample cars (optional but recommended)
```bash
npm run seed
```

### 4. Start the server
```bash
npm start
```
Visit **http://localhost:3000** 🎉

---

## 🍃 Connecting MongoDB Compass

1. **Install MongoDB Community Server** (if not already): https://www.mongodb.com/try/download/community
   Make sure the `mongod` service is running (it auto-starts on Windows after install).
2. **Open MongoDB Compass**.
3. In the connection screen paste this URI:
   ```
   mongodb://127.0.0.1:27017
   ```
   Click **Connect**.
4. After running the app once (or `npm run seed`), you'll see a database named **`car_bazaar`** appear with two collections:
   - `cars`
   - `bookings`
5. Click any collection to view, edit, or delete documents visually.

### Want a remote MongoDB Atlas DB instead?
Edit `.env` and replace `MONGO_URI` with your Atlas connection string, e.g.:
```
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.xxxx.mongodb.net/car_bazaar
```

---

## 📁 Project Structure
```
├── server.js           # Express app entry
├── seed.js             # Sample car data seeder
├── .env                # Mongo URI + secrets
├── models/
│   ├── Car.js
│   └── Booking.js
├── routes/
│   ├── cars.js         # CRUD + booking
│   └── cart.js         # Session cart
├── views/              # EJS templates
└── public/css/style.css
```

## 🛠 Tech Stack
| Layer | Tech |
|-------|------|
| Backend | Node.js, Express |
| Database | MongoDB + Mongoose |
| Templating | EJS |
| Session | express-session |
| Styling | Custom CSS (gradients, glassmorphism) |
| Fonts | Poppins + Racing Sans One |

---
Built for **Assignment 6 — Web Tech**. Drive your dream! 🚀
