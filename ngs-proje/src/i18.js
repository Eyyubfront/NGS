import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS_EN from './locales/en/translation'; 
import TRANSLATIONS_AZ from './locales/az/translation';

i18n
  .use(initReactI18next)
  .init({
    lng: 'az', // Varsayılan dil Azerice
    fallbackLng: 'az', // Dil bulunamadığında varsayılan olarak Azerice
    resources: {
      en: { translation: TRANSLATIONS_EN },
      az: { translation: TRANSLATIONS_AZ }
    },
    interpolation: {
      escapeValue: false, // XSS koruması için gerekli değil
    },
    react: {
      useSuspense: false, // Dil dosyaları yüklenene kadar uygulamanın beklemesini engeller
    },
  });

export default i18n;
