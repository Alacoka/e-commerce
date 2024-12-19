export type Language = 'en' | 'pt';

export interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

export interface ThemeSettings {
  isDarkMode: boolean;
}