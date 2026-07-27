import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialTheme() {
  const saved = localStorage.getItem('theme-preference');
  if (saved === 'light' || saved === 'dark' || saved === 'system') {
    return saved;
  }
  return 'system';
}

function applyTheme(themePreference) {
  const resolved = themePreference === 'system' ? getSystemTheme() : themePreference;
  document.documentElement.setAttribute('data-theme', resolved);
}

function ThemeProvider({ children }) {
  const [themePreference, setThemePreference] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(themePreference);
    localStorage.setItem('theme-preference', themePreference);
  }, [themePreference]);

  useEffect(() => {
    if (themePreference !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme('system');
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [themePreference]);

  const value = {
    theme: themePreference,
    setTheme: setThemePreference,
    resolvedTheme:
      themePreference === 'system' ? getSystemTheme() : themePreference,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
export default ThemeContext;