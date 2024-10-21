import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next) 
  .init({   
    resources: {
      en: {
        translation: require('./locales/en/translation.json')
      },
      ru: {
        translation: require('./locales/ru/translation.json')
      },
      ky: {
        translation: require('./locales/kg/translation.json')
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18next;
