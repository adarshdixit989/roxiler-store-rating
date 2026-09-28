# StoreRate API

Base URL: `http://localhost:5000/api`

## Authentication

`POST /auth/signup` — Normal user registration

`POST /auth/login` — Login for all roles. Returns JWT.

`PUT /auth/password` — Authenticated password change.

## Stores / User

`GET /stores?name=&address=` — Authenticated normal-user store listing.

`POST /stores/:id/rating` — Authenticated normal user submits or updates a 1–5 rating.

## Admin

`GET /admin/dashboard`

`GET /admin/users?name=&email=&address=&role=&sort=name&order=ASC`

`GET /admin/stores?name=&email=&address=&sort=name&order=ASC`

`POST /admin/users`

`POST /admin/stores`

## Store Owner

`GET /owner/dashboard`

Protected routes require:

`Authorization: Bearer <JWT>`

Roles are `ADMIN`, `USER`, and `OWNER`.
