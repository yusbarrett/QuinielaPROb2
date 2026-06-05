import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n';

interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
  confederation: string;
}

interface Game {
  id: string;
  group: string;
  matchday: number;
  date: string;
  homeTeam: Team;
  awayTeam: Team;
  venue: string;
  homeScore: number | null;
  awayScore: number | null;
  status: string;
}

interface User {
  id: string;
  username: string;
  avatar: string;
  points: number;
}

interface Prediction {
  id: string;
  userId: string;
  gameId: string;
  homeScore: number;
  awayScore: number;
  points: number;
  user?: User;
  game?: Game;
}

const Predictions: React.FC = () => {
  const { t, language } = useI18n();
  const [games, setGames] = useState<Game[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/games').then(res => res.json()),
      fetch('/api/users').then(res => res.json()),
    ]).then(([gamesData, usersData]) => {
      setGames(gamesData);
      setUsers(usersData);
      if (usersData.length > 0) setSelectedUser(usersData[0].id);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedUser) return;
    fetch(`/api/predictions?userId=${selectedUser}`)
      .then(res => res.json())
      .then(data => setPredictions(data))
      .catch(() => {});
  }, [selectedUser]);

  const getUserPrediction = (gameId: string) => {
    return predictions.find(p => p.gameId === gameId);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { month: 'short', day: 'numeric' });
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString(language === 'es' ? 'es-ES' : 'en-US', { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) return <div className="loading">{t.predictions.loading}</div>;

  return (
    <div className="page">
      <h1 className="page-title">{t.predictions.title}</h1>
      <p className="page-subtitle">{t.predictions.subtitle}</p>

      <div className="user-selector">
        <label>{t.predictions.selectUser}</label>
        <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
          {users.map(u => (
            <option key={u.id} value={u.id}>{u.avatar} {u.username}</option>
          ))}
        </select>
      </div>

      <div className="predictions-list">
        {games.map(game => {
          const pred = getUserPrediction(game.id);
          return (
            <div key={game.id} className="prediction-card">
              <div className="prediction-header">
                <span className="pred-group">{t.predictions.group} {game.group}</span>
                <span className="pred-date">{formatDate(game.date)} • {formatTime(game.date)}</span>
              </div>
              <div className="prediction-body">
                <div className="pred-team">
                  <span className="pred-flag">{game.homeTeam?.flag}</span>
                  <span className="pred-name">{game.homeTeam?.name}</span>
                </div>
                <div className="pred-score-inputs">
                  {pred ? (
                    <span className="pred-score-display">
                      {pred.homeScore} - {pred.awayScore}
                    </span>
                  ) : (
                    <span className="pred-no-score">{t.predictions.noPrediction}</span>
                  )}
                </div>
                <div className="pred-team">
                  <span className="pred-flag">{game.awayTeam?.flag}</span>
                  <span className="pred-name">{game.awayTeam?.name}</span>
                </div>
              </div>
              <div className="prediction-footer">
                <span className="pred-venue">🏟️ {game.venue}</span>
                {pred && pred.points > 0 && (
                  <span className="pred-points">+{pred.points} {t.predictions.points}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Predictions;
