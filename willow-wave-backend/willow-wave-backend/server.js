// server.js — entry point. Run with: npm start
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const checkoutRoutes = require("./routes/checkout");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // allows the front-end (a different origin, e.g. Live Server on :5500) to call this API
app.use(express.json({ type: () => true })); // always parse the body as JSON, regardless of Content-Type header

app.use("/api", authRoutes);
app.use("/api", checkoutRoutes);

app.get("/", (req, res) => {
  res.send("Willow & Wave API is running.");
});

// Catch-all error handler — makes sure the front-end always gets a
// clean JSON error (instead of an HTML crash page) if a route throws
// unexpectedly, and logs the real error here in the terminal for you.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong on the server." });
});

app.listen(PORT, () => {
  console.log(`Willow & Wave backend running on http://localhost:${PORT}`);
});
