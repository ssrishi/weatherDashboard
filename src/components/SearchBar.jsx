import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function SearchBar() {
  const { setCity, loading } = useContext(WeatherContext);
  const [text, setText] = useState('');

  const handle = e => { e.preventDefault(); if (text.trim()) { setCity(text.trim()); setText(''); }};

  return (
    <form onSubmit={handle} className="flex">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter city name"
        disabled={loading}
        className="flex-grow text-lg px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!text.trim() || loading}
        className={`px-6 text-xl py-4 bg-blue-300 rounded-r-lg text-white transition'`}
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
}
