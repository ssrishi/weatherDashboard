import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function Forecast() {
  const { forecast, unit } = useContext(WeatherContext);
  if (!forecast.length) return null;

  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecast.map(day => (
          <div key={day.date} className="bg-blue-200 p-4 rounded-xl shadow-md text-center">
            <p className="text-xl font-medium text-gray-700 mb-2">{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="icon"
              className="mx-auto w-16 mb-2"
            />
            <p className="text-xl font-bold">{Math.round(day.temp)}{tempUnit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
