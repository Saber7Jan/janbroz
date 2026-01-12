import React from 'react';
import './Home.css';



const socialLinks = [
  { href: 'https://www.instagram.com/janbroz78?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: <i className="fab fa-instagram" aria-label="Instagram" /> },
  { href: 'https://www.facebook.com/share/1EbquWsY9g/', icon: <i className="fab fa-facebook-f" aria-label="Facebook" /> },
  { href: 'https://www.youtube.com/@janbroz5808', icon: <i className="fab fa-youtube" aria-label="YouTube" /> },
  { href: 'https://tiktok.com/', icon: <i className="fab fa-tiktok" aria-label="TikTok" /> },
];

const Home = () => (
  <section className="home-hero" id="home">
    <div className="home-overlay">
      <div className="home-content home-content-centered">
        <h1 className="home-title">JanBroz</h1>
        <h2 className="home-subtitle">Dance. Culture. Innovation.</h2>
        <p className="home-script">
          Twin brothers from Hunza, blending tradition and modernity through dance. From village gatherings to international stages, our journey is a celebration of rhythm, identity, and creativity.
        </p>
        <div className="home-social-row">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="home-social-link">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Home;
