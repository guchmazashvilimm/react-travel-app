import { useState, useEffect } from 'react';

const WeatherApi = ({ city, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Weather data not available for this city');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (city) {
      fetchData();
    }

    return () => setWeatherData(null);
  }, [city, apiKey]);

  return { weatherData, error };
};

export default WeatherApi;
