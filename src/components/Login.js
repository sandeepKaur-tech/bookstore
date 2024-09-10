import React from "react"
import { useState } from "react";
import { Outlet } from "react-router-dom"
import Header from "./Header"
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
  
      try {
        // Firebase authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
       
        const user = userCredential.user;
        console.log('Logged in as:', user.email);
      } catch (error) {
        console.error('Login failed:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    );
  };
  