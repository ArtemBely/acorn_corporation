import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// конфиг i18n (мультиязычность)

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "En",
    debug: true,
    detection: {
      // order: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
