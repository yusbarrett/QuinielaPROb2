import React, { useState } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { useI18n } from '../i18n';

const Settings: React.FC = () => {
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext);
  const { t, language, setLanguage } = useI18n();
  const [username, setUsername] = useState('');

  return (
    <div className="page">
      <div className="hero settings-hero">
        <div>
          <h1 className="hero-title">{t.settings.title}</h1>
          <p className="hero-subtitle">{t.settings.subtitle}</p>
        </div>
      </div>

      <div className="settings-sections">
        <div className="settings-card">
          <h2>{t.settings.profile}</h2>
          <div className="setting-item">
            <label>{t.settings.username}</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder={t.settings.usernamePlaceholder}
              className="setting-input"
            />
          </div>
          <div className="setting-item">
            <label>{t.settings.avatar}</label>
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
          <h2>{t.settings.appearance}</h2>
          <div className="setting-item">
            <label>{t.settings.theme}</label>
            <div className="theme-toggle">
              <button
                className={`theme-btn ${!darkMode ? 'active' : ''}`}
                onClick={() => { if (darkMode) toggleDarkMode(); }}
              >
                {t.settings.light}
              </button>
              <button
                className={`theme-btn ${darkMode ? 'active' : ''}`}
                onClick={() => { if (!darkMode) toggleDarkMode(); }}
              >
                {t.settings.dark}
              </button>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h2>{t.settings.language}</h2>
          <div className="setting-item">
            <label>{t.settings.displayLanguage}</label>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value as 'en' | 'es')}
              className="setting-select"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>

        <div className="settings-card">
          <h2>{t.settings.about}</h2>
          <div className="about-info">
            <p><strong>{t.settings.aboutName}</strong></p>
            <p>{t.settings.aboutVersion}</p>
            <p>{t.settings.aboutDesc}</p>
            <p>{t.settings.aboutHosted}</p>
            <p>{t.settings.aboutDates}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
