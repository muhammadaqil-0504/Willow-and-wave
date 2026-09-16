// server.js — entry point. Run with: npm start
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const checkoutRoutes = require("./routes/checkout");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // allows the front-end (a different origin, e.g. Live Server on :5500) to call this API
app.use(express.json()); // parses JSON request bodies

app.use("/api", authRoutes);
app.use("/api", checkoutRoutes);

app.get("/", (req, res) => {
  res.send("Willow & Wave API is running.");
});

app.listen(PORT, () => {
  console.log(`Willow & Wave backend running on http://localhost:${PORT}`);
});
