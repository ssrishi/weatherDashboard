import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState(() => localStorage.getItem('lastCity') || '');
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState(() => localStorage.getItem('unit') || 'metric');
  const [lastUpdated, setLastUpdated] = useState(null);

  const toggleUnit = () => {
    const next = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(next);
    localStorage.setItem('unit', next);
    if (city) fetchWeather(city);
  };

const fetchWeatherOpen = async (name) => {
  const isCoord = name.includes(',');
  const [lat, lon] = name.split(',');
  const query = isCoord ? { lat, lon } : { q: name };
  const params = new URLSearchParams({ ...query, units: unit, appid: import.meta.env.VITE_OPENWEATHER_API_KEY });
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?${params}`);
  if (!res.ok) throw (await res.json()).message;
  return res.json();
};

const fetchForecastOpen = async (name) => {
  const isCoord = name.includes(',');
  const [lat, lon] = name.split(',');
  const query = isCoord ? { lat, lon } : { q: name };
  const params = new URLSearchParams({ ...query, units: unit, appid: import.meta.env.VITE_OPENWEATHER_API_KEY });
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${params}`);
  if (!res.ok) throw (await res.json()).message;
  const result = await res.json();
  const days = {};
  result.list.forEach(item => {
    const day = item.dt_txt.split(' ')[0];
    if (!days[day]) days[day] = item;
  });
  return Object.values(days).slice(0, 5);
};


  const fetchWeather = async (name) => {
    if (!name) return;
    setLoading(true); setError('');
    try {
      const w = await fetchWeatherOpen(name);
      setData({
        name: w.name,
        main: { temp: w.main.temp, humidity: w.main.humidity },
        wind: { speed: w.wind.speed },
        weather: [{ icon: w.weather[0].icon, description: w.weather[0].description }]
      });
      const fList = await fetchForecastOpen(name);
      setForecast(fList.map(f => ({ date: f.dt_txt.split(' ')[0], temp: f.main.temp, icon: f.weather[0].icon })));
    } catch (e) {
      setData(null); setForecast([]); setError(e.toString());
    } finally {
      setLastUpdated(new Date()); setLoading(false);
      localStorage.setItem('lastCity', name);
    }
  };

  useEffect(() => {
    if (!city) return;
    fetchWeather(city);
    const id = setInterval(() => fetchWeather(city), 30000);
    return () => clearInterval(id);
  }, [city, unit]);

  return (
    <WeatherContext.Provider value={{ city, setCity, data, forecast, error, loading, unit, toggleUnit, lastUpdated }}>
      {children}
    </WeatherContext.Provider>
  );
}
