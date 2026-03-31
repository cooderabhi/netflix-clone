import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#141414'
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.85)',
        padding: '60px 68px',
        borderRadius: '4px',
        width: '100%',
        maxWidth: '450px'
      }}>
        <h1 style={{ color: 'white', marginBottom: '28px' }}>Sign Up</h1>
        {error && <div style={{ background: '#e50914', color: 'white', padding: '10px', borderRadius: '4px', marginBottom: '16px' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              marginBottom: '16px',
              background: '#333',
              border: 'none',
              borderRadius: '4px',
              color: 'white'
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              marginBottom: '16px',
              background: '#333',
              border: 'none',
              borderRadius: '4px',
              color: 'white'
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              marginBottom: '16px',
              background: '#333',
              border: 'none',
              borderRadius: '4px',
              color: 'white'
            }}
            required
          />
          <button type="submit" style={{
            width: '100%',
            padding: '16px',
            background: '#e50914',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: '20px', color: '#737373' }}>
          Already have an account? <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Sign in now</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;