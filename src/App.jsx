import React, { useContext } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';
import Forecast from './components/Forecast';
import { WeatherContext } from './context/WeatherContext';

export default function App() {
  const { unit, toggleUnit } = useContext(WeatherContext);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-extrabold text-primary">Weather Dashboard</h1>
        <p className="text-lg text-gray-600">Real-time weather and 5-day forecast</p>
        <button
          onClick={toggleUnit}
          className="mt-4 inline-block bg-gray-800 text-white hover:bg-gray-600 transition rounded-full px-6 py-2 text-sm font-medium shadow"
        >
          Switch to {unit === 'metric' ? '°F' : '°C'}
        </button>
      </header>
      <main className="space-y-4">
        <SearchBar />
        <ErrorMessage />
        <WeatherInfo />
        <Forecast />
      </main>
    </div>
  );
}
