import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fiTranslations from './locales/fi/translation.json';
import svTranslations from './locales/sv/translation.json';
import enTranslations from './locales/en/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations,
        },
        fi: {
            translation: fiTranslations,
        },
        sv: {
            translation: svTranslations,
        },
    },
    lng: localStorage.getItem("lang") || "fi", //localStorage by default "fi"
    fallbackLng: 'fi',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
