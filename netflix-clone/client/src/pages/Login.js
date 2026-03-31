import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await login({ email, password });
    console.log(res);

    navigate("/");
  } catch (err) {
    console.error(err);
    setError("Invalid credentials");
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
        <h1 style={{ color: 'white', marginBottom: '28px' }}>Sign In</h1>
        {error && <div style={{ background: '#e50914', color: 'white', padding: '10px', borderRadius: '4px', marginBottom: '16px' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </form>
        <p style={{ marginTop: '20px', color: '#737373' }}>
          New to Netflix? <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Sign up now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;