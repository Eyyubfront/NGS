import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // i18next ve I18nextProvider'ı içe aktarın
import i18n from './i18'; // i18n nesnesini içe aktarın
import App from './App'; // Ana uygulama bileşeninizi içe aktarın

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
