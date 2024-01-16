
import React from 'react';
import WeatherApi from './WeatherApi';

const WeatherComponent = () => {
  const apiKey = '8e40f286d2cdc9c1d2505e2d9dd35617';

  const cities = ['indonesia','malaysia','Paris'];

  return (
    <div>
      {cities.map((city) => (
        <WeatherCard key={city} city={city} apiKey={apiKey} />
      ))}
    </div>
  );
};

const WeatherCard = ({ city, apiKey }) => {
  const { weatherData, error } = WeatherApi({ city, apiKey });

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc'}}>
      <h2>Weather in {weatherData?.name}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default WeatherComponent;
