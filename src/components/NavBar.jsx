import React from 'react';

const NavBar = ({ lang }) => {
  const items = lang === 'ar'
    ? ['القطاعات الصناعية', 'الأمن البحري', 'قطاع الطيران', 'الأمن الرقمي', 'الاستشارات التدريبية', 'اتصل بنا']
    : ['Industrial Sectors', 'Maritime Security', 'Aviation Sector', 'Digital Security', 'Training Consultations', 'Contact'];
  const hrefs = ['#industrial', '#maritime', '#aviation', '#digital', '#training', '#contact'];

  return (
    <nav>
      {items.map((label, index) => (
        <a href={hrefs[index]} key={index}>{label}</a>
      ))}
    </nav>
  );
};

export default NavBar;