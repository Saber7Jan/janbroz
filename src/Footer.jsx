import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-social">
      <span className="footer-label">Follow Us</span>
      <a href="https://www.instagram.com/janbroz78?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/share/1EbquWsY9g/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a href="https://www.youtube.com/@janbroz5808" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <FaYoutube />
      </a>
    </div>
  </footer>
);

export default Footer;
