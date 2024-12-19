import React, { createContext, useContext, useState } from 'react';
import { ThemeSettings } from '../types/settings';

interface SettingsContextType {
  theme: ThemeSettings;
  toggleTheme: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeSettings>({ isDarkMode: false });

  const toggleTheme = () => {
    setTheme(prev => ({ isDarkMode: !prev.isDarkMode }));
  };

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};