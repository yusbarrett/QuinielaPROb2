import React from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});
