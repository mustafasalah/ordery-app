import i18next from "i18next";
import "intl-pluralrules";
import { initReactI18next } from "react-i18next";
import ar from "../langs/ar.json";
import en from "../langs/en.json";

const i18n = i18next.use(initReactI18next).init({
    lng: "ar",
    fallbackLng: "ar",
    resources: {
        ar,
        en,
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
