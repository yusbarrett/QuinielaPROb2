import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n';

interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
  confederation: string;
}

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

const WorldCup: React.FC = () => {
  const { t } = useI18n();
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

  if (loading) return <div className="loading">{t.common.loading}</div>;

  return (
    <div className="page">
      <h1 className="page-title">{t.worldCup.title}</h1>
      <p className="page-subtitle">{t.worldCup.subtitle}</p>

      <div className="group-filter">
        <button
          className={`filter-btn ${selectedGroup === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedGroup('all')}
        >
          {t.worldCup.allGroups}
        </button>
        {GROUPS.map(g => (
          <button
            key={g}
            className={`filter-btn ${selectedGroup === g ? 'active' : ''}`}
            onClick={() => setSelectedGroup(g)}
          >
            {t.worldCup.group} {g}
          </button>
        ))}
      </div>

      {selectedGroup === 'all' ? (
        GROUPS.map(group => {
          const groupTeams = teams.filter(t => t.group === group);
          return (
            <div key={group} className="group-section">
              <h2 className="group-title">{t.worldCup.group} {group}</h2>
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
          <h2 className="group-title">{t.worldCup.group} {selectedGroup}</h2>
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
