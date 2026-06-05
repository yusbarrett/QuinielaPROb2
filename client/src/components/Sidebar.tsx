import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/world-cup', label: 'World Cup', icon: '🏆' },
  { path: '/daily-schedule', label: 'Daily Schedule', icon: '📅' },
  { path: '/fair-play', label: 'Fair Play', icon: '⚽' },
  { path: '/predictions', label: 'Predictions', icon: '🔮' },
  { path: '/predictions-ranking', label: 'Predictions Ranking', icon: '📊' },
  { path: '/settings', label: 'Settings', icon: '⚙️' },
];

const Sidebar: React.FC = () => {
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
        <p>USA 🇺🇸 MEX 🇲🇽 CAN 🇨🇦</p>
        <p className="sidebar-footer-sub">June 11 - July 19, 2026</p>
      </div>
    </aside>
  );
};

export default Sidebar;
