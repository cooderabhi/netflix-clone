const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  genre: [String],
  duration: String,
  releaseYear: Number,
  rating: {
    type: Number,
    default: 0
  },
  isTrending: {
    type: Boolean,
    default: false
  },
  isPopular: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);