import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const API = "http://localhost:5001/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${API}/auth/profile`, {
          withCredentials: true
        });
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${API}/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const response = await axios.post(
        `${API}/auth/register`,
        { name, email, password },
        { withCredentials: true }
      );

      setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    await axios.post(`${API}/auth/logout`, {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};