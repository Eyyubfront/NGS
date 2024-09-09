import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS_EN from './locales/en/translation';
import TRANSLATIONS_AZ from './locales/az/translation';

// Dil tercihini localStorage'dan oku veya varsayılan olarak Azerice ayarla
const language = localStorage.getItem('language') || 'az';

i18n
  .use(initReactI18next)
  .init({
    lng: language, // Varsayılan dil
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

// Dil değişikliği yapıldığında localStorage'ı güncelle
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
