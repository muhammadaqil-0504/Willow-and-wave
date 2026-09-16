// routes/checkout.js — /api/checkout (requires a logged-in user)
const express = require("express");
const db = require("../db");
const requireAuth = require("../middleware/auth");

const router = express.Router();

// Expected body: { items: [{ name, category, price, qty }, ...] }
router.post("/checkout", requireAuth, (req, res) => {
  const { items } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Cart is empty — nothing to check out." });
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const insertOrder = db.prepare("INSERT INTO orders (user_id, total) VALUES (?, ?)");
  const insertItem = db.prepare(
    "INSERT INTO order_items (order_id, product_name, category, unit_price, quantity) VALUES (?, ?, ?, ?, ?)"
  );

  // Wrap in a transaction so either the whole order saves, or none of it does.
  const placeOrder = db.transaction((items) => {
    const orderResult = insertOrder.run(req.userId, total);
    const orderId = orderResult.lastInsertRowid;
    for (const item of items) {
      insertItem.run(orderId, item.name, item.category, item.price, item.qty);
    }
    return orderId;
  });

  const orderId = placeOrder(items);

  res.status(201).json({ orderId, total });
});

// Order history for the logged-in user
router.get("/orders", requireAuth, (req, res) => {
  const orders = db
    .prepare("SELECT id, total, created_at FROM orders WHERE user_id = ? ORDER BY created_at DESC")
    .all(req.userId);

  const getItems = db.prepare("SELECT product_name, category, unit_price, quantity FROM order_items WHERE order_id = ?");
  const withItems = orders.map((order) => ({ ...order, items: getItems.all(order.id) }));

  res.json(withItems);
});

module.exports = router;
