import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';

const languages = {
    de: { translation: require('./lang/de.json') },
    en: { translation: require('./lang/en.json') },
    es: { translation: require('./lang/es.json') },
    fr: { translation: require('./lang/fr.json') },
    pt: { translation: require('./lang/pt.json') }
};

const detectedLocale = navigator.language;

i18n
    .use(initReactI18next)
    .init({
        resources: languages,
        lng: detectedLocale,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

moment.locale(detectedLocale);

export default i18n;
