import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextReactNative from 'i18next-react-native-language-detector';
import en from './assets/locales/en';
import es from './assets/locales/es';

const resources = {
  en: en,
  es: es,
};

i18n
  .use(initReactI18next)
  .use(i18nextReactNative)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react
    },
  });

export default i18n;
