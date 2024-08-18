/* eslint-disable import/no-extraneous-dependencies */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import LOCALS from './constants';
import en from './copies/en.json';
import pl from './copies/pl.json';
import es from './copies/es.json';

const resources = {
  [LOCALS.EN]: {
    translation: en,
  },
  [LOCALS.PL]: {
    translation: pl,
  },
  [LOCALS.SP]: {
    translation: es,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: [LOCALS.EN, LOCALS.PL, LOCALS.SP],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
