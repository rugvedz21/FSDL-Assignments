# Student Feedback Review System

MERN-stack app: students submit course feedback, admins review aggregated ratings.

## Stack
- **Backend:** Node + Express + Mongoose (MongoDB)
- **Frontend:** React 18 + Vite + React Router
- **Auth:** JWT (Bearer token in `localStorage`)

## Project layout
```
feedback-app/
├── server/   # Express API (port 5000)
└── client/   # React app (port 5173, proxies /api → server)
```

## Setup

### 1. MongoDB
Run a local MongoDB on `mongodb://localhost:27017` (or set `MONGO_URI`).

### 2. Server
```bash
cd server
cp .env.example .env          # edit JWT_SECRET
npm install
npm run dev                   # http://localhost:5000
```

### 3. Client
```bash
cd client
npm install
npm run dev                   # http://localhost:5173
```

## Try it
1. Register an **admin** account.
2. Seed a course (admin only):
   ```bash
   curl -X POST http://localhost:5000/api/courses \
     -H "Authorization: Bearer <token>" \
     -H "Content-Type: application/json" \
     -d '{"code":"CS101","title":"Intro to CS","instructor":"Dr. Lee"}'
   ```
3. Register a **student** account → go to **Submit** → leave feedback.
4. Log back in as admin → **Dashboard** shows aggregated ratings.

## API

| Method | Route | Auth |
|--------|-------|------|
| POST | `/api/auth/register` | public |
| POST | `/api/auth/login` | public |
| GET | `/api/courses` | public |
| POST | `/api/courses` | admin |
| POST | `/api/feedback` | student |
| GET | `/api/feedback/course/:id` | admin |
| GET | `/api/feedback/summary` | admin |

## Key design decisions
- Compound unique index on `{ student, course }` prevents duplicate reviews.
- Aggregation pipeline (`$group` + `$lookup`) computes per-course averages server-side.
- Role-based middleware (`requireRole`) gates admin routes.
