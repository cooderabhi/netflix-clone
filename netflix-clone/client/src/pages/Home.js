import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies', {
          withCredentials: true
        });
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>Loading...</div>;

  return (
    <div style={{ paddingTop: '80px', color: 'white' }}>
      <h1 style={{ paddingLeft: '50px' }}>Welcome to Netflix</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px 50px' }}>
        {movies.map(movie => (
          <div key={movie._id} style={{ width: '200px' }}>
            <img 
              src={movie.thumbnail} 
              alt={movie.title}
              style={{ width: '100%', borderRadius: '4px' }}
            />
            <h3 style={{ fontSize: '14px', marginTop: '10px' }}>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;