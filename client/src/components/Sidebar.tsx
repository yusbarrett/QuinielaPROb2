import React from 'react';
import { NavLink } from 'react-router-dom';
import { useI18n } from '../i18n';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Toolbar,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SettingsIcon from '@mui/icons-material/Settings';

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const drawerWidth = 280;

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, onMobileClose }) => {
  const { t } = useI18n();

  const menuItems = [
    { path: '/', label: t.sidebar.home, icon: <HomeIcon /> },
    { path: '/world-cup', label: t.sidebar.worldCup, icon: <SportsSoccerIcon /> },
    { path: '/daily-schedule', label: t.sidebar.dailySchedule, icon: <CalendarMonthIcon /> },
    { path: '/fair-play', label: t.sidebar.fairPlay, icon: <EmojiEventsIcon /> },
    { path: '/predictions', label: t.sidebar.predictions, icon: <AutoGraphIcon /> },
    { path: '/predictions-ranking', label: t.sidebar.predictionsRanking, icon: <BarChartIcon /> },
    { path: '/settings', label: t.sidebar.settings, icon: <SettingsIcon /> },
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: 'background.paper' }}>
      <Box>
        <Toolbar sx={{ justifyContent: 'center', py: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Quiniela WC 2026
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t.sidebar.footer}
            </Typography>
          </Box>
        </Toolbar>
        <Divider />
        <List>
          {menuItems.map(item => (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              end={item.path === '/'}
              onClick={onMobileClose}
              sx={{
                '&.active': {
                  bgcolor: 'action.selected',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box sx={{ p: 2, bgcolor: 'background.default' }}>
        <Typography variant="body2" color="text.secondary">
          {t.sidebar.footerSub}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
