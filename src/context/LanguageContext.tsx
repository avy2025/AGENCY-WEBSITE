import React, { createContext, useContext, useState } from 'react';
import { translations, type Language } from '../translations/translations';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Default is Hindi ('hi') but check localStorage first
    const saved = localStorage.getItem('site_lang');
    return (saved === 'en' || saved === 'hi') ? saved : 'hi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('site_lang', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && k in value) {
        value = value[k];
      } else {
        // Fallback to english if hindi key is missing
        let fallback: any = translations['en'];
        let matchedFallback = true;
        for (const fk of keys) {
          if (fallback && fk in fallback) {
            fallback = fallback[fk];
          } else {
            matchedFallback = false;
            break;
          }
        }
        return matchedFallback && typeof fallback === 'string' ? fallback : key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
