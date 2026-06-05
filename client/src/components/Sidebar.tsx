import React from 'react';
import { NavLink } from 'react-router-dom';
import { useI18n } from '../i18n';

const Sidebar: React.FC = () => {
  const { t } = useI18n();

  const menuItems = [
    { path: '/', label: t.sidebar.home, icon: '🏠' },
    { path: '/world-cup', label: t.sidebar.worldCup, icon: '🏆' },
    { path: '/daily-schedule', label: t.sidebar.dailySchedule, icon: '📅' },
    { path: '/fair-play', label: t.sidebar.fairPlay, icon: '⚽' },
    { path: '/predictions', label: t.sidebar.predictions, icon: '🔮' },
    { path: '/predictions-ranking', label: t.sidebar.predictionsRanking, icon: '📊' },
    { path: '/settings', label: t.sidebar.settings, icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">⚽</div>
        <h1 className="sidebar-title">Quiniela<br/>WC 2026</h1>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>{t.sidebar.footer}</p>
        <p className="sidebar-footer-sub">{t.sidebar.footerSub}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
