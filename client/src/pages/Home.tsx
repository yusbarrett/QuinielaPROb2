import React from 'react';
import { useI18n } from '../i18n';

const Home: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="page">
      <div className="hero">
        <div className="hero-badge">{t.home.badge}</div>
        <h1 className="hero-title">{t.home.title}</h1>
        <p className="hero-subtitle">{t.home.subtitle}</p>
        <p className="hero-dates">{t.home.dates}</p>
      </div>

      <div className="info-grid">
        <div className="info-card highlight-card">
          <div className="info-card-icon">🏆</div>
          <h3>{t.home.teams48Title}</h3>
          <p>{t.home.teams48Desc}</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🌍</div>
          <h3>{t.home.hostNationsTitle}</h3>
          <p>{t.home.hostNationsDesc}</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🏟️</div>
          <h3>{t.home.venuesTitle}</h3>
          <p>{t.home.venuesDesc}</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">📊</div>
          <h3>{t.home.groupsTitle}</h3>
          <p>{t.home.groupsDesc}</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">⚽</div>
          <h3>{t.home.matchesTitle}</h3>
          <p>{t.home.matchesDesc}</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🇦🇷</div>
          <h3>{t.home.defendingTitle}</h3>
          <p>{t.home.defendingDesc}</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">{t.home.formatTitle}</h2>
        <div className="format-timeline">
          <div className="format-step">
            <div className="format-step-number">1</div>
            <div className="format-step-content">
              <h4>{t.home.groupStage}</h4>
              <p>{t.home.groupStageDesc}</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">2</div>
            <div className="format-step-content">
              <h4>{t.home.roundOf32}</h4>
              <p>{t.home.roundOf32Desc}</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">3</div>
            <div className="format-step-content">
              <h4>{t.home.roundOf16}</h4>
              <p>{t.home.roundOf16Desc}</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">4</div>
            <div className="format-step-content">
              <h4>{t.home.quarterfinals}</h4>
              <p>{t.home.quarterfinalsDesc}</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">5</div>
            <div className="format-step-content">
              <h4>{t.home.semifinals}</h4>
              <p>{t.home.semifinalsDesc}</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">6</div>
            <div className="format-step-content">
              <h4>{t.home.final}</h4>
              <p>{t.home.finalDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
