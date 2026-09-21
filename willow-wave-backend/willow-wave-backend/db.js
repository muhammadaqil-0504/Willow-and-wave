// db.js — SQLite database setup.
// Uses a single file (willow.db) that sits right next to this script.
// better-sqlite3 is synchronous, which keeps the beginner-friendly
// code simple — no async/await needed for queries.
const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "willow.db"));

// Enable foreign key constraints (off by default in SQLite).
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    total REAL NOT NULL,
    payment_method TEXT NOT NULL DEFAULT 'cod',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_name TEXT NOT NULL,
    category TEXT NOT NULL,
    unit_price REAL NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
  );
`);

// Safe migration: if this database was created before `payment_method`
// existed on the orders table, add it now. Running on an already-migrated
// database just fails quietly (column already exists) — that's expected.
try {
  db.exec(
    "ALTER TABLE orders ADD COLUMN payment_method TEXT NOT NULL DEFAULT 'cod'",
  );
} catch (err) {
  // Column already exists — nothing to do.
}

module.exports = db;
