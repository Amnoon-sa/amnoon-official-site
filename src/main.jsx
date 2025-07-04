import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const lang = window.location.pathname.includes('/ar') ? 'ar' : 'en';
const dir = lang === 'ar' ? 'rtl' : 'ltr';

document.documentElement.lang = lang;
document.documentElement.dir = dir;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App lang={lang} />
  </React.StrictMode>,
);