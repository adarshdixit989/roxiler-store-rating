# StoreRate — Full-Stack Intern Coding Challenge

A role-based store rating platform built for the FullStack Intern Coding Challenge.

## Stack

- Frontend: React 18, Vite, React Router, Axios
- Backend: Node.js, Express.js, JWT, bcryptjs
- Database: MySQL 8+
- Authentication: JWT + role-based authorization

## Features

### Admin
- Dashboard counts for users, stores and ratings
- Create USER / ADMIN / OWNER accounts
- Create stores and optionally assign an owner
- Search/filter users and stores
- Sort supported listing columns ascending/descending

### Normal User
- Signup and login
- Search stores by name/address
- View overall rating and personal rating
- Submit or modify a 1–5 rating
- Change password

### Store Owner
- Login and change password
- View assigned store average rating
- View users who rated the store and their rating

## Validation

- Name: 20–60 characters
- Address: max 400 characters
- Password: 8–16 characters, at least one uppercase and one special character
- Email: standard browser + server validation
- Rating: integer 1–5

## Local Setup

### 1. Database

Create the schema:

```bash
mysql -u root -p < backend/schema.sql
```

Optional demo data:

```bash
mysql -u root -p < backend/seed.sql
```

> The seed file contains bcrypt hashes for demo accounts. If your environment rejects those demo credentials, create accounts from the Admin UI or generate a fresh hash with `node -e "console.log(require('bcryptjs').hashSync('Admin@123',10))"`.

### 2. Backend

```bash
cd backend
copy .env.example .env   # Windows
# cp .env.example .env  # macOS/Linux
npm install
npm run dev
```

API: `http://localhost:5000/api`

Health check: `http://localhost:5000/api/health`

### 3. Frontend

```bash
cd frontend
copy .env.example .env   # Windows
# cp .env.example .env  # macOS/Linux
npm install
npm run dev
```

Frontend: `http://localhost:5173`

## Demo Credentials

If you use the seed file, the intended accounts are:

| Role | Email | Password |
|---|---|---|
| Admin | admin@storerate.demo | Admin@123 |
| User | user@storerate.demo | User@123 |
| Owner | owner@storerate.demo | Owner@123 |

If the seed password hashes do not match your generated credentials, create fresh users through SQL/Admin UI as noted above.

## Deployment

### Backend — Render

`backend/render.yaml` contains a Render web-service template. Set `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, and a strong `JWT_SECRET` in the Render dashboard. The MySQL database itself must be hosted separately; Render's service configuration only deploys the API.

### Frontend — Vercel

`frontend/vercel.json` enables SPA fallback routing. Set:

```text
VITE_API_URL=https://YOUR-BACKEND-DOMAIN/api
```

then deploy the `frontend` directory as a Vite project.

## API

See `backend/api.md` for endpoint documentation.

## Submission Checklist

- [ ] `npm install` succeeds in backend and frontend
- [ ] MySQL schema imported
- [ ] `.env` values configured
- [ ] Admin, User and Owner login tested
- [ ] Rating create/update tested
- [ ] Admin filters/sorting tested
- [ ] Owner dashboard tested
- [ ] Production API URL configured in Vercel
- [ ] README and screenshots added to GitHub

## Project Structure

```text
store-rating-app/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── routes/
│   ├── schema.sql
│   ├── seed.sql
│   ├── api.md
│   └── render.yaml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── services/
│   └── vercel.json
└── README.md
```
