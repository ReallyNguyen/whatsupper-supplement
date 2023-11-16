import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Example theme state
  const switchDark = () => {
    setTheme('dark');
  };
  
  const switchLight = () => {
    setTheme('light');
  };
  

  const contextValue = {
    theme,
    switchDark,
    switchLight,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
export default ThemeContext;