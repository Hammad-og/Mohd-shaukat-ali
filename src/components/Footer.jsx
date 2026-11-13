import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="logo-text">Shaukat</span>
          <span className="logo-dot">.</span>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Mohammad Shaukat Ali.
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/mohammad-shaukat-ali-803740144/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
