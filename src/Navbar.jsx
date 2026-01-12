
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'highlights', label: 'Highlights' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">JanBroz</div>
      <nav>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={active === section.id ? 'active' : ''}
          >
            {section.label}
          </a>
        ))}
      </nav>
      <div className="navbar-social">
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
    </header>
  );
};

export default Navbar;
