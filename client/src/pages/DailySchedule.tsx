import React, { useState, useEffect } from 'react';

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

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

const DailySchedule: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => { setGames(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filteredGames = games.filter(g => {
    if (selectedGroup !== 'all' && g.group !== selectedGroup) return false;
    if (selectedDate && !g.date.startsWith(selectedDate)) return false;
    return true;
  });

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const uniqueDates = [...new Set(games.map(g => g.date.split('T')[0]))].sort();

  if (loading) return <div className="loading">Loading schedule...</div>;

  return (
    <div className="page">
      <h1 className="page-title">Daily Schedule</h1>
      <p className="page-subtitle">Complete match schedule for the FIFA World Cup 2026</p>

      <div className="schedule-filters">
        <div className="filter-group">
          <label>Group:</label>
          <select value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)}>
            <option value="all">All Groups</option>
            {GROUPS.map(g => (
              <option key={g} value={g}>Group {g}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Date:</label>
          <select value={selectedDate} onChange={e => setSelectedDate(e.target.value)}>
            <option value="">All Dates</option>
            {uniqueDates.map(d => (
              <option key={d} value={d}>{formatDate(d + 'T12:00:00Z')}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredGames.length === 0 ? (
        <div className="empty-state">
          <p>No matches found for the selected filters.</p>
        </div>
      ) : (
        <div className="schedule-list">
          {filteredGames.map(game => (
            <div key={game.id} className="match-card">
              <div className="match-header">
                <span className="match-group">Group {game.group}</span>
                <span className="match-date">{formatDate(game.date)}</span>
              </div>
              <div className="match-body">
                <div className="match-team home">
                  <span className="match-team-flag">{game.homeTeam?.flag}</span>
                  <span className="match-team-name">{game.homeTeam?.name}</span>
                </div>
                <div className="match-score">
                  {game.status === 'completed' ? (
                    <span className="score-display">
                      {game.homeScore} - {game.awayScore}
                    </span>
                  ) : (
                    <span className="score-display upcoming">{formatTime(game.date)}</span>
                  )}
                </div>
                <div className="match-team away">
                  <span className="match-team-flag">{game.awayTeam?.flag}</span>
                  <span className="match-team-name">{game.awayTeam?.name}</span>
                </div>
              </div>
              <div className="match-footer">
                <span className="match-venue">🏟️ {game.venue}</span>
                <span className="match-status">
                  {game.status === 'completed' ? '✅ Finished' : '🕐 Upcoming'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailySchedule;
