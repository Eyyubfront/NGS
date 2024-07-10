import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Dil dosyalarını yüklemek için backend
import LanguageDetector from 'i18next-browser-languagedetector'; // Tarayıcı dilini algılamak için

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'az', // Başlangıçta Azerice dilini kullanabilirsiniz
    debug: true, // Debug modu açık
    interpolation: {
      escapeValue: false, // XSS koruması için
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Dil dosyalarının yükleneceği yol
    },
  });

export default i18n;
