import React, { useState, useContext, useEffect } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function SearchBar() {
  const { setCity, loading } = useContext(WeatherContext);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      setCity(text.trim());
      setText('');
      setSuggestions([]);
    }
  };

  const handleGeo = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      setCity(`${latitude},${longitude}`);
      setSuggestions([]);
    });
  };

  
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 relative">
        <div className="relative w-full">
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter city name"
            disabled={loading}
            className="w-full text-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 bg-white border rounded w-full mt-1 shadow z-10">
              {suggestions.map(city => (
                <li
                  key={city.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setCity(city.name);
                    setText('');
                    setSuggestions([]);
                  }}
                >
                  {city.name}, {city.countryCode}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-2 w-3/4">
          <button
            type="submit"
            disabled={!text.trim() || loading}
            className="px-6 py-1 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            {loading ? 'Loading...' : 'Search'}
          </button>
          <button
            type="button"
            onClick={handleGeo}
            className=" py-1 px-6 text-center text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            📍 Use My Location
          </button>
        </div>
      </form>
    </>
  );
}
