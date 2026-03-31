const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();

    console.log("MOVIES FROM DB:", movies); // 👈 debug

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;