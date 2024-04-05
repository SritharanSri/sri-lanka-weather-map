import React, { useState } from 'react';
import axios from 'axios';
import "./login.css"; // Import your CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://nodejs-jgs8.onrender.com/api/auth/login', {
        email,
        password
      });
      
      console.log('Login successful:', response.data);
      navigate('/'); 
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('Invalid email or password');
    }
  };
  const handleRegisterClick = () => {
    navigate('/register'); 
  };
  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="register-link" onClick={handleRegisterClick}>Don't have an account? Register here</p>
      {error && <p className="error-message">{error}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
