import React, { useState, useEffect } from 'react';

interface RankingUser {
  id: string;
  username: string;
  avatar: string;
  points: number;
  totalPoints: number;
  predictionsCount: number;
}

const PredictionsRanking: React.FC = () => {
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

  if (loading) return <div className="loading">Loading rankings...</div>;

  return (
    <div className="page">
      <h1 className="page-title">Predictions Ranking</h1>
      <p className="page-subtitle">See who is the best at predicting World Cup 2026 results</p>

      <div className="ranking-table-container">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Player</th>
              <th>Predictions</th>
              <th>Points</th>
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
          <h3>Points System</h3>
          <ul>
            <li>Exact score: <strong>3 points</strong></li>
            <li>Correct winner (not exact score): <strong>1 point</strong></li>
            <li>Wrong prediction: <strong>0 points</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PredictionsRanking;
