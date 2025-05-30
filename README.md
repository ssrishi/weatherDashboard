# React Weather Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Vite](https://img.shields.io/badge/Bundler-Vite-blue.svg)](https://vitejs.dev/)  
[![React](https://img.shields.io/badge/Library-React-61DAFB.svg)](https://reactjs.org/)  
[![Tailwind CSS](https://img.shields.io/badge/CSS–Utility%20Framework-Tailwind%20CSS-38B2AC.svg)](https://tailwindcss.com/)  

A high-performance, responsive weather application built with React, Vite, and Tailwind CSS. It provides current weather data and a five-day forecast for any city, featuring automatic refresh, error handling, and a unit toggle.

---

## 🔍 Table of Contents

1. [Key Features](#-key-features)  
2. [Tech Stack](#-tech-stack)  
3. [Getting Started](#-getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Configuration](#configuration)  
   - [Running in Development](#running-in-development)  
   - [Building for Production](#building-for-production)  
4. [Project Structure](#-project-structure)  
5. [Usage](#-usage)  
6. [Error Handling](#-error-handling)  
7. [Contributing](#-contributing)  
8. [License](#-license)  
9. [Contact](#-contact)  

---

## ✨ Key Features

- **City Search**: Look up any city worldwide.
- **Get Current Location**: Get weather of your current location
- **Current Conditions**: Displays temperature, humidity, wind speed, conditions, and weather icon.  
- **5-Day Forecast**: Shows daily high/low forecasts with icons.  
- **Unit Toggle**: Switch seamlessly between Celsius and Fahrenheit.  
- **Auto-Refresh**: Data automatically updates every 30 seconds.  
- **Error Handling**: Friendly messages for invalid input or network issues.  
- **Local Persistence**: Remembers your last searched city in `localStorage`.  
- **Fallback API**: Uses OpenWeatherMap by default, with WeatherAPI.com as a backup.  
- **Responsive Design**: Optimized for desktop, tablet, and mobile screens.  

---

## 🛠️ Tech Stack

- **Framework**: React 18 (Functional components & Hooks)  
- **Bundler**: Vite (ESM-powered, lightning fast)  
- **Styling**: Tailwind CSS (utility-first, mobile-friendly)  
- **APIs**:  
  - [OpenWeatherMap Current & Forecast](https://openweathermap.org/api)    
- **State Management**: React Context API  
- **Version Control**: Git & GitHub  

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16.x  
- npm ≥ 8.x or Yarn ≥ 1.22.x  

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/ssrishi/weather-dashboard.git
   cd weather-dashboard
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install

### Configuration
1. **Create a .env file in the project root (next to package.json):**
   ```bash
   VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
2 **Ensure no quotes or trailing spaces in your keys.**

### Running in Development
   ```bash
   npm run dev
   # or
   yarn dev

### **Building For Production**
   ```bash
   npm run build
   # or
   yarn build


### **🗂️ Project Structure**
```bash
weather-dashboard/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ErrorMessage.jsx
│   │   ├── Forecast.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherInfo.jsx
│   ├── context/
│   │   └── WeatherContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

### **🎯 Usage**

1. Enter a city in the search bar and press Enter or click Search.
2. View current weather and five-day forecast.
3. Toggle between °C and °F using the switch in the header.
4. Data will auto-refresh every 30 seconds.
5. Return later to see the last city you searched automatically loaded.

### **⚠️ Error Handling**
Invalid city name: Displays “City not found. Please try again.”

Network issues: Shows “Network error. Check your connection.”

API failure: Retries using the fallback service, then alerts the user.

### **🤝 Contributing**
Fork this repository.

Create a feature branch: git checkout -b feature/YourFeature.

Commit your changes: git commit -m 'Add YourFeature'.

Push to your branch: git push origin feature/YourFeature.

Open a Pull Request and describe your changes.

Please follow the GitHub Flow and maintain code quality. All contributions are welcome!

### 📫 Contact
Your Name • ssrishi17@gmail.com
Project Link: https://github.com/ssrishi/weatherDashboard
