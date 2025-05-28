import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function ErrorMessage() {
  const { error } = useContext(WeatherContext);
  if (!error) return null;

  return (
    <div className="bg-red-200 text-red-800 px-4 py-2 rounded-lg mb-4">
      {error}
    </div>
  );
}
