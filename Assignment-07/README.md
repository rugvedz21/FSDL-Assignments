# Assignment 07 — Student Feedback Review System (MERN)

## Description
A MERN-stack application where students submit course feedback and admins review aggregated ratings. Includes JWT-based authentication and role-based access (student/admin).

## Technologies Used
- MongoDB + Mongoose
- Express.js
- React 18 + Vite + React Router
- JWT authentication

## Folder Contents
- `source-code/server/` — Express API (port 5000)
- `source-code/client/` — React frontend (port 5173)
- `output-screenshots/` — login screen and submit-feedback screen

## How to Run
```bash
# MongoDB must be running locally (mongodb://localhost:27017)

cd source-code/server
cp .env.example .env   # set JWT_SECRET
npm install
npm run dev             # http://localhost:5000

cd ../client
npm install
npm run dev              # http://localhost:5173
```
