import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'anime-dark' | 'anime-light' | 'corporate-dark' | 'corporate-light';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isAnime: boolean;
  isDark: boolean;
  toggleStyle: () => void;
  toggleBrightness: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-theme-mode';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode;
      if (stored && ['anime-dark', 'anime-light', 'corporate-dark', 'corporate-light'].includes(stored)) {
        return stored;
      }
    }
    return 'corporate-dark';
  });

  const isAnime = mode.startsWith('anime');
  const isDark = mode.endsWith('dark');

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  };

  const toggleStyle = () => {
    const newMode = isAnime
      ? isDark ? 'corporate-dark' : 'corporate-light'
      : isDark ? 'anime-dark' : 'anime-light';
    setMode(newMode);
  };

  const toggleBrightness = () => {
    const newMode = isDark
      ? isAnime ? 'anime-light' : 'corporate-light'
      : isAnime ? 'anime-dark' : 'corporate-dark';
    setMode(newMode);
  };

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove('anime-dark', 'anime-light', 'corporate-dark', 'corporate-light');
    // Add current theme class
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, isAnime, isDark, toggleStyle, toggleBrightness }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Section titles mapping
export const sectionTitles = {
  hero: { anime: 'Romance Dawn', corporate: 'Home' },
  about: { anime: 'East Blue Saga', corporate: 'About Me' },
  skills: { anime: 'Grand Line Arsenal', corporate: 'Skills' },
  education: { anime: 'Training Arc', corporate: 'Education' },
  experience: { anime: 'Allied Crews', corporate: 'Experience' },
  projects: { anime: 'Legendary Battles', corporate: 'Projects' },
  blog: { anime: "Captain's Log", corporate: 'Articles' },
  contact: { anime: 'Final Island', corporate: 'Contact' },
};

export function useSectionTitle(section: keyof typeof sectionTitles) {
  const { isAnime } = useTheme();
  return isAnime ? sectionTitles[section].anime : sectionTitles[section].corporate;
}
