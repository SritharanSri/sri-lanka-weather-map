
import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    setError('');

    try {
      
      const response = await axios.post('https://nodejs-jgs8.onrender.com/api/auth/signup', {
        username,
        email,
        password
      });

      console.log('Registration successful:', response.data);

      
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Full Name"
            className="input-field"
          />
        </div>
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
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
