import React from 'react';

const Footer = ({ lang }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          <p>{lang === 'ar' ? 'تمكين الخدمات الأمنية بمعايير عالمية' : 'Empowering security services with global standards'}</p>
        </div>
        <div className="footer-social-icons">
          <a href="https://x.com/amnoonsa?lang=ar" target="_blank" rel="noopener noreferrer">
            <img src="/img/social/x.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/amnoon-security-consulting" target="_blank" rel="noopener noreferrer">
            <img src="/img/social/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;