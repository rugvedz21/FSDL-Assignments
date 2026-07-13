const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

// --- NoSQL JSON file paths ---
const DEST_FILE = path.join(__dirname, "data", "destinations.json");
const BOOK_FILE = path.join(__dirname, "data", "bookings.json");

// Helper: read/write JSON files (NoSQL store)
function readJSON(file) {
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// --- API Routes ---

// Get all destinations
app.get("/api/destinations", (req, res) => {
  const destinations = readJSON(DEST_FILE);
  res.json(destinations);
});

// Get single destination
app.get("/api/destinations/:id", (req, res) => {
  const destinations = readJSON(DEST_FILE);
  const dest = destinations.find((d) => d.id === parseInt(req.params.id));
  if (!dest) return res.status(404).json({ error: "Not found" });
  res.json(dest);
});

// Create a booking
app.post("/api/bookings", (req, res) => {
  const { name, email, destination, mode, passengers } = req.body;
  const destinations = readJSON(DEST_FILE);
  const dest = destinations.find((d) => d.id === parseInt(destination));
  if (!dest) return res.status(400).json({ error: "Invalid destination" });

  const bookings = readJSON(BOOK_FILE);
  const booking = {
    id: Date.now(),
    name,
    email,
    destination: dest.name,
    mode,
    passengers: parseInt(passengers),
    totalPrice: dest.price * parseInt(passengers),
    date: new Date().toISOString(),
  };
  bookings.push(booking);
  writeJSON(BOOK_FILE, bookings);
  res.json({ success: true, booking });
});

// Get all bookings
app.get("/api/bookings", (req, res) => {
  const bookings = readJSON(BOOK_FILE);
  res.json(bookings);
});

// Serve HTML pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/destination", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "destination.html"));
});

app.get("/bookings", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bookings.html"));
});

app.listen(PORT, () => {
  console.log(`SkyWay Travels running at http://localhost:${PORT}`);
});
