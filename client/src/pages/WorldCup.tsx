import React, { useState, useEffect } from 'react';

interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
  confederation: string;
}

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

const WorldCup: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/teams')
      .then(res => res.json())
      .then(data => { setTeams(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filteredTeams = selectedGroup === 'all'
    ? teams
    : teams.filter(t => t.group === selectedGroup);

  if (loading) return <div className="loading">Loading teams...</div>;

  return (
    <div className="page">
      <h1 className="page-title">World Cup 2026 Groups</h1>
      <p className="page-subtitle">48 teams across 12 groups competing for the greatest prize in football</p>

      <div className="group-filter">
        <button
          className={`filter-btn ${selectedGroup === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedGroup('all')}
        >
          All Groups
        </button>
        {GROUPS.map(g => (
          <button
            key={g}
            className={`filter-btn ${selectedGroup === g ? 'active' : ''}`}
            onClick={() => setSelectedGroup(g)}
          >
            Group {g}
          </button>
        ))}
      </div>

      {selectedGroup === 'all' ? (
        GROUPS.map(group => {
          const groupTeams = teams.filter(t => t.group === group);
          return (
            <div key={group} className="group-section">
              <h2 className="group-title">Group {group}</h2>
              <div className="team-grid">
                {groupTeams.map(team => (
                  <div key={team.id} className="team-card">
                    <span className="team-flag">{team.flag}</span>
                    <span className="team-name">{team.name}</span>
                    <span className="team-confederation">{team.confederation}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="group-section">
          <h2 className="group-title">Group {selectedGroup}</h2>
          <div className="team-grid">
            {filteredTeams.map(team => (
              <div key={team.id} className="team-card">
                <span className="team-flag">{team.flag}</span>
                <span className="team-name">{team.name}</span>
                <span className="team-confederation">{team.confederation}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldCup;
