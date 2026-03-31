require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./models/Movie');

const sampleMovies = [
  {
    title: "Inception",
    description: "A thief who steals corporate secrets...",
    thumbnail: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5UUF.jpg",
    banner: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31HES0.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    genre: ["Action", "Sci-Fi", "Thriller"],
    duration: "2h 28min",
    releaseYear: 2010,
    isTrending: true,
    isPopular: true
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding ");

    await Movie.deleteMany();
    console.log("Old data cleared");

    await Movie.insertMany(sampleMovies);
    console.log("Database seeded successfully ");

    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();