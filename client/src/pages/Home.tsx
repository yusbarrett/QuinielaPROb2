import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="page">
      <div className="hero">
        <div className="hero-badge">FIFA WORLD CUP 2026</div>
        <h1 className="hero-title">Quiniela World Cup 2026</h1>
        <p className="hero-subtitle">
          USA 🇺🇸 &bull; Mexico 🇲🇽 &bull; Canada 🇨🇦
        </p>
        <p className="hero-dates">June 11 &ndash; July 19, 2026</p>
      </div>

      <div className="info-grid">
        <div className="info-card highlight-card">
          <div className="info-card-icon">🏆</div>
          <h3>48 Teams</h3>
          <p>For the first time in history, 48 national teams will compete in the FIFA World Cup, expanded from the previous 32-team format.</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🌍</div>
          <h3>3 Host Nations</h3>
          <p>The tournament will be co-hosted by the United States, Mexico, and Canada across 16 host cities in North America.</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🏟️</div>
          <h3>16 Venues</h3>
          <p>Matches will be played across iconic stadiums from MetLife Stadium in New York to Estadio Azteca in Mexico City.</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">📊</div>
          <h3>12 Groups</h3>
          <p>Teams are split into 12 groups of 4. The top 2 from each group plus 8 best third-placed teams advance to the Round of 32.</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">⚽</div>
          <h3>104 Matches</h3>
          <p>An unprecedented 104 matches will be played across 39 days of world-class football action.</p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">🇦🇷</div>
          <h3>Defending Champions</h3>
          <p>Argentina enters as the defending champion after winning their third World Cup title in Qatar 2022.</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Tournament Format</h2>
        <div className="format-timeline">
          <div className="format-step">
            <div className="format-step-number">1</div>
            <div className="format-step-content">
              <h4>Group Stage</h4>
              <p>June 11 – 27, 2026 • 12 groups of 4 teams each play round-robin matches</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">2</div>
            <div className="format-step-content">
              <h4>Round of 32</h4>
              <p>June 28 – July 3, 2026 • Top 2 per group + 8 best third-placed teams</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">3</div>
            <div className="format-step-content">
              <h4>Round of 16</h4>
              <p>July 4 – 7, 2026 • 16 teams compete in knockout matches</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">4</div>
            <div className="format-step-content">
              <h4>Quarterfinals</h4>
              <p>July 9 – 11, 2026 • 8 teams battle for a spot in the semifinals</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">5</div>
            <div className="format-step-content">
              <h4>Semifinals</h4>
              <p>July 14 – 15, 2026 • The final four teams compete for a place in history</p>
            </div>
          </div>
          <div className="format-step">
            <div className="format-step-number">6</div>
            <div className="format-step-content">
              <h4>Final</h4>
              <p>July 19, 2026 • MetLife Stadium, East Rutherford, New Jersey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
