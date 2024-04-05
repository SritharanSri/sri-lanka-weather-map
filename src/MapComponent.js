

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Header from './Header';

function MapComponent() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    
    axios.get('https://nodejs-jgs8.onrender.com/api/weather')
      .then(response => {
     
        setWeatherData(response.data);
      })
      .catch(error => {
        
        console.error('Error fetching data:', error);
      });
  }, []);

 const position = [7.8731, 80.7718];



 return (
  <div>
    <Header/>
    <MapContainer center={position} zoom={10} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {weatherData.map((data, index) => (
        <Marker key={index} position={[data.latitude, data.longitude]}>
          <Popup>
            {data.district} <br />
            Temperature: {data.temperature}°C <br />
            Humidity: {data.humidity}% <br />
            Air Pressure: {data.airPressure} hPa
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
 );
};

export default MapComponent;
