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
