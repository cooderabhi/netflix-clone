const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTrendingMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ isTrending: true });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPopularMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ isPopular: true });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};