import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import en from './Locales/en.json';
import ar from './Lar.json';
import { UseLanguageStore } from './store/LanguageStore';
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {translation:en},
        ar: {translation:ar}
    },
    lng: UseLanguageStore.getState().language || 'en',
    fallbackLng: "en",
  });
  export default i18n;


