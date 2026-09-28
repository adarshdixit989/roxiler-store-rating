# Roxiler Store Rating

A full-stack store rating platform built with React, Express.js, MySQL and JWT authentication.

## Roles

- **ADMIN** — manage users and stores, view platform statistics.
- **USER** — search stores and submit/update ratings.
- **OWNER** — view store details and customer ratings.

## Project structure

- \`frontend/\` — React + Vite UI
- \`backend/\` — Express.js REST API
- \`backend/schema.sql\` — MySQL schema
- \`backend/seed.sql\` / \`backend/src/seed.js\` — demo data

## Run locally

### 1. Backend

\`\`\`powershell
cd backend
npm install
Copy-Item .env.example .env
\`\`\`

Set your MySQL password and JWT secret in \`.env\`.

Create the database:

\`\`\`powershell
mysql -u root -p
\`\`\`

Then inside MySQL:

\`\`\`sql
source schema.sql;
\`\`\`

Seed demo data:

\`\`\`powershell
npm run seed
npm run dev
\`\`\`

API health check: \`http://localhost:5000/api/health\`

### 2. Frontend

Open another terminal:

\`\`\`powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
\`\`\`

Open \`http://localhost:5173\`.

## Demo accounts

| Role | Email | Password |
|---|---|---|
| Admin | admin@storerate.demo | Admin@123 |
| User | user@storerate.demo | User@123 |
| Owner | owner@storerate.demo | Owner@123 |

## Submission checklist

Before submitting the coding challenge:

1. Push the latest \`main\` branch.
2. Confirm the frontend opens and login works.
3. Confirm the backend health endpoint returns JSON status \`ok\`.
4. Confirm at least one user can submit/update a rating.
5. Confirm Admin and Owner dashboards load with their respective accounts.
6. Deploy the frontend to Vercel and backend to a Node-compatible host such as Render.
7. Set \`VITE_API_URL\` on the frontend to the deployed backend API URL.
8. Submit:
   - GitHub repository URL
   - Live frontend URL
   - API/live backend URL if requested
   - Demo credentials if the evaluator needs them
   - Short project description and tech stack

## Important

Never commit real \`.env\` files, database passwords, JWT secrets or API keys. Use the provided \`.env.example\` files.
