import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login';
import RegistrationPage from './Register';
import HomePage from './MapComponent';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/"
          element={<HomePage /> } 
        />
      </Routes>
    </Router>
  );
}

export default App;