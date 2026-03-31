const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Routes
const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movies");

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes middleware
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Netflix API is running!" });
});

// Error handling middleware (must be AFTER routes)
app.use((err, req, res, next) => {
  console.error(err); // 🔥 helpful for debugging

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// DB + Server start
const PORT = process.env.PORT || 5001;

mongoose
  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌:", err);
    process.exit(1);
  });