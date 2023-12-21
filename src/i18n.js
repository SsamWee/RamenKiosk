import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation:{
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                spanish: 'Spanish',
                english: "English",
                japanese: 'Japanese',
                return: 'Return',
                takeout: 'Take-out',
                eatin: 'Eat-in'
            }
        },
        es: {
            translation: {
                spanish: 'Español',
                english: "Ingles",
                japanese: 'Japones',
                return: 'Regresar',
                takeout: 'Para llevar',
                eatin: 'Tomar aquí'
            }
        },
        ja: {
            translation: {
                spanish: 'スペイン語、',
                english: "英語",
                japanese: '日本語',
                return: '戻る',
                takeout: 'テイクアウト',
                eatin: '食べます'
            }
        },
    }
});

export default i18n;
