import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function WeatherInfo() {
  const { data, loading, lastUpdated, unit } = useContext(WeatherContext);
  if (loading && !data) return <p className="text-center mt-4">Loading weather...</p>;
  if (!data) return null;

  const { name, main, wind, weather } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const speedLabel = unit === 'metric' ? 'm/s' : 'mph';
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="bg-blue-200 rounded-2xl shadow-lg p-8 mt-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-primary">{name}</h2>
      <img src={iconUrl} alt={weather[0].description} className="mx-auto  w-24 mb-4" />
      <p className="capitalize text-xl mb-6 text-gray-600">{weather[0].description}</p>
      <div className="grid grid-cols-3 gap-6 text-left">
        <div>
          <p className="text-xl uppercase text-gray-500">Temperature</p>
          <p className="text-2xl font-semibold">{main.temp}{tempUnit}</p>
        </div>
        <div>
          <p className="text-xl uppercase text-gray-500">Humidity</p>
          <p className="text-2xl font-semibold">{main.humidity}%</p>
        </div>
        <div>
          <p className="text-xl uppercase text-gray-500">Wind Speed</p>
          <p className="text-2xl font-semibold">{wind.speed.toFixed(1)} {speedLabel}</p>
        </div>
      </div>
      <p className="mt-6 text-xl text-gray-700">Last updated: {lastUpdated?.toLocaleTimeString()}</p>
    </div>
  );
}
