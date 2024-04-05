import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Weather App</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="/">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  background: '#fff',
  color: '#333',
  textAlign: 'center',
  padding: '10px'
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0
}

export default Header;
