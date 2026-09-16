# Willow & Wave — Backend

A small Node.js + Express + SQLite API for the Willow & Wave front-end:
sign up, log in, and checkout (saves real orders to a database).

## Setup (PowerShell / Windows)

1. Make sure [Node.js](https://nodejs.org) is installed (`node -v` to check).
2. Open this `willow-wave-backend` folder in a terminal.
3. Install dependencies:
   ```
   npm install
   ```
4. Copy the environment template and set your own secret:
   ```
   copy .env.example .env
   ```
   Then open `.env` and change `JWT_SECRET` to any long random string.
5. Start the server:
   ```
   npm start
   ```
   You should see: `Willow & Wave backend running on http://localhost:3000`

The database (`willow.db`) is created automatically on first run — it's just
a file that sits in this folder. You can open it with a tool like
[DB Browser for SQLite](https://sqlitebrowser.org/) to see your data.

## Running alongside the front-end

Keep this backend running in one terminal (`npm start`), and open
`index.html` with Live Server (or any local server) as before — they run on
different ports (backend: 3000, Live Server: usually 5500) and `cors()` is
already enabled so they can talk to each other.

## API endpoints

| Method | Route             | Auth required | Body                                              |
|--------|-------------------|---------------|----------------------------------------------------|
| POST   | `/api/signup`     | No            | `{ name, email, password }`                        |
| POST   | `/api/login`      | No            | `{ email, password }`                               |
| POST   | `/api/checkout`   | Yes           | `{ items: [{ name, category, price, qty }, ...] }`  |
| GET    | `/api/orders`     | Yes           | —                                                    |

"Auth required" means the request needs a header:
`Authorization: Bearer <token>` — the token comes back from `/api/signup`
or `/api/login`.

## Database tables

- `users` — id, name, email, password_hash, created_at
- `orders` — id, user_id, total, created_at
- `order_items` — id, order_id, product_name, category, unit_price, quantity

Passwords are never stored in plain text — they're hashed with bcrypt
before saving.

## Next steps you could add later

- Password reset via email
- Admin view to see all orders
- Real payment gateway integration (JazzCash, Easypaisa, Stripe, etc.)
- Move products into the database too, instead of hardcoding them in `script.js`
