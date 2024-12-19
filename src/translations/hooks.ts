import { translations } from './translations';

export const useTranslation = (key: string) => {
  return translations[key] || { en: key, pt: key };
};