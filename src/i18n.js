import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../public/locales/en/en.json";
import uk from "../public/locales/uk/uk.json";


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
  lng: 'en', // Встановіть початкову мову
  fallbackLng: 'en', // Встановіть мову за замовчуванням
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
