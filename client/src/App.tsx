import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import WorldCup from './pages/WorldCup';
import DailySchedule from './pages/DailySchedule';
import FairPlay from './pages/FairPlay';
import Predictions from './pages/Predictions';
import PredictionsRanking from './pages/PredictionsRanking';
import Settings from './pages/Settings';
import { ThemeContext } from './components/ThemeContext';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/world-cup" element={<WorldCup />} />
            <Route path="/daily-schedule" element={<DailySchedule />} />
            <Route path="/fair-play" element={<FairPlay />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/predictions-ranking" element={<PredictionsRanking />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
