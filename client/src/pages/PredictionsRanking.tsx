import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n';

interface RankingUser {
  id: string;
  username: string;
  avatar: string;
  points: number;
  totalPoints: number;
  predictionsCount: number;
}

const PredictionsRanking: React.FC = () => {
  const { t } = useI18n();
  const [rankings, setRankings] = useState<RankingUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rankings')
      .then(res => res.json())
      .then(data => { setRankings(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const getMedal = (position: number) => {
    if (position === 1) return '🥇';
    if (position === 2) return '🥈';
    if (position === 3) return '🥉';
    return `#${position}`;
  };

  if (loading) return <div className="loading">{t.predictionsRanking.loading}</div>;

  return (
    <div className="page">
      <div className="hero ranking-hero">
        <div>
          <h1 className="hero-title">{t.predictionsRanking.title}</h1>
          <p className="hero-subtitle">{t.predictionsRanking.subtitle}</p>
        </div>
      </div>

      <div className="ranking-table-container">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>{t.predictionsRanking.position}</th>
              <th>{t.predictionsRanking.player}</th>
              <th>{t.predictionsRanking.predictions}</th>
              <th>{t.predictionsRanking.points}</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((user, idx) => (
              <tr key={user.id} className={`ranking-row ${idx < 3 ? 'top-three' : ''}`}>
                <td className="ranking-position">{getMedal(idx + 1)}</td>
                <td className="ranking-user">
                  <span className="ranking-avatar">{user.avatar}</span>
                  <span className="ranking-username">{user.username}</span>
                </td>
                <td className="ranking-predictions">{user.predictionsCount}</td>
                <td className="ranking-points">{user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ranking-info">
        <div className="info-card">
          <h3>{t.predictionsRanking.pointsSystem}</h3>
          <ul>
            <li>{t.predictionsRanking.exactScore}: <strong>3 {t.predictionsRanking.points}</strong></li>
            <li>{t.predictionsRanking.correctWinner}: <strong>1 {t.predictionsRanking.points}</strong></li>
            <li>{t.predictionsRanking.wrongPrediction}: <strong>0 {t.predictionsRanking.points}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PredictionsRanking;
