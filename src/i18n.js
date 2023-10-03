import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/en.json";
import uk from "./locales/uk/uk.json";


const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  lng: 'en', 
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
