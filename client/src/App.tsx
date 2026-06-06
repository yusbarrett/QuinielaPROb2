import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const drawerWidth = 280;
import WorldCup from './pages/WorldCup';
import DailySchedule from './pages/DailySchedule';
import FairPlay from './pages/FairPlay';
import Predictions from './pages/Predictions';
import PredictionsRanking from './pages/PredictionsRanking';
import Settings from './pages/Settings';
import { ThemeContext } from './components/ThemeContext';

const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
      }),
    [darkMode],
  );

  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const routeRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const handleDrawerToggle = () => setMobileOpen(open => !open);
  const handleCloseDrawer = () => setMobileOpen(false);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
          <Sidebar mobileOpen={mobileOpen} onMobileClose={handleCloseDrawer} />
          <Box component="main" sx={{ flexGrow: 1, ml: { sm: `${drawerWidth}px` }, minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
              <Toolbar>
                {!isDesktop && (
                  <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                    <MenuIcon />
                  </IconButton>
                )}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Quiniela WC 2026
                </Typography>
                <IconButton onClick={toggleDarkMode} color="inherit">
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Toolbar>
            </AppBar>
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
              <TransitionGroup>
                <CSSTransition key={location.pathname} nodeRef={routeRef} classNames="fade" timeout={320}>
                  <Box ref={routeRef} className="route-container">
                    <Routes location={location}>
                      <Route path="/" element={<Home />} />
                      <Route path="/world-cup" element={<WorldCup />} />
                      <Route path="/daily-schedule" element={<DailySchedule />} />
                      <Route path="/fair-play" element={<FairPlay />} />
                      <Route path="/predictions" element={<Predictions />} />
                      <Route path="/predictions-ranking" element={<PredictionsRanking />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </Box>
                </CSSTransition>
              </TransitionGroup>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
