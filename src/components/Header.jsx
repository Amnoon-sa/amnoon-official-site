import React from 'react';

const Header = ({ lang }) => {
  return (
    <header>
      {lang === 'ar' ? (
        <>
          <img src="/img/main/2030logo.png" alt="رؤية السعودية 2030" style={{ height: '120px' }} />
          <h1>ﺷﺮﻛﺔ اﻣﻨﻮن ﻟﻼﺳﺘﺸﺎرات اﻟﻤﻬﻨﻴﺔ</h1>
          <img src="/img/main/logo-white.png" alt="شعار الشركة" style={{ width: '255px', height: '250px' }} />
        </>
      ) : (
        <>
          <img src="/img/main/logo-white.png" alt="Company Logo" style={{ width: '140px', height: '150px' }} />
          <h1>Amnoon Professional Consulting Compan</h1>
          <img src="/img/main/2030logo.png" alt="Saudi 2030 Vision Logo" style={{ height: '120px' }} />
        </>
      )}
    </header>
  );
};

export default Header;