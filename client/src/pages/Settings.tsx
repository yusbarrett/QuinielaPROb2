import React, { useState } from 'react';
import { ThemeContext } from '../components/ThemeContext';

const Settings: React.FC = () => {
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext);
  const [language, setLanguage] = useState('en');
  const [username, setUsername] = useState('');

  return (
    <div className="page">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Customize your Quiniela World Cup 2026 experience</p>

      <div className="settings-sections">
        <div className="settings-card">
          <h2>👤 User Profile</h2>
          <div className="setting-item">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="setting-input"
            />
          </div>
          <div className="setting-item">
            <label>Avatar</label>
            <div className="avatar-selector">
              {['🦆', '🦅', '🦉', '🐻', '🐺', '🦁', '🐯', '🦊', '🐍', '🐉', '🦄', '🐧'].map(a => (
                <button
                  key={a}
                  className={`avatar-btn`}
                  onClick={() => {}}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h2>🎨 Appearance</h2>
          <div className="setting-item">
            <label>Theme</label>
            <div className="theme-toggle">
              <button
                className={`theme-btn ${!darkMode ? 'active' : ''}`}
                onClick={() => { if (darkMode) toggleDarkMode(); }}
              >
                ☀️ Light
              </button>
              <button
                className={`theme-btn ${darkMode ? 'active' : ''}`}
                onClick={() => { if (!darkMode) toggleDarkMode(); }}
              >
                🌙 Dark
              </button>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h2>🌐 Language</h2>
          <div className="setting-item">
            <label>Display Language</label>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="setting-select"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="pt">Português</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

        <div className="settings-card">
          <h2>ℹ️ About</h2>
          <div className="about-info">
            <p><strong>Quiniela World Cup 2026</strong></p>
            <p>Version 1.0.0</p>
            <p>A prediction game for the FIFA World Cup 2026</p>
            <p>Hosted in USA, Mexico &amp; Canada</p>
            <p>June 11 – July 19, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
