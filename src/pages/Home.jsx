import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsSlider from '../components/NewsSlider';
import Section from '../components/Section';
import Footer from '../components/Footer';
import PartnerLogos from '../components/PartnerLogos';
import Loader from '../components/Loader';
import '../styles/style.css';

const Home = () => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  return (
    <>
      <Loader />
      <Header lang={lang} />
      <div className="main-image" data-aos="zoom-in" data-aos-duration="1500">
        <button onClick={toggleLang} className="btn-arabic">
          {lang === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
      <NavBar lang={lang} />
      <NewsSlider lang={lang} />
      <Section lang={lang} section="industrial" />
      <Section lang={lang} section="maritime" />
      <Section lang={lang} section="aviation" />
      <Section lang={lang} section="digital" />
      <Section lang={lang} section="training" />
      <Section lang={lang} section="contact" />
      <PartnerLogos lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default Home;