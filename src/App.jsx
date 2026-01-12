


import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Landing from './Landing';

function App() {
  const homeVideoRef = useRef(null);
  const aboutVideoRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  // Show/hide videos based on section in view

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home');
      const story = document.getElementById('story');
      const highlights = document.getElementById('highlights');
      let current = 'home';
      if (highlights && highlights.getBoundingClientRect().top <= 80) {
        current = 'highlights';
      } else if (story && story.getBoundingClientRect().top <= 80) {
        current = 'story';
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (homeVideoRef.current) {
      homeVideoRef.current.style.display = activeSection === 'home' ? 'block' : 'none';
    }
    if (aboutVideoRef.current) {
      aboutVideoRef.current.style.display = activeSection === 'story' ? 'block' : 'none';
      if (activeSection === 'story') {
        aboutVideoRef.current.style.background = "url('/Our_Story/Image 1.jpg') center center/cover no-repeat";
        aboutVideoRef.current.style.objectFit = 'cover';
      } else {
        aboutVideoRef.current.style.background = '';
      }
    }
  }, [activeSection]);

  return (
    <>
      {/* Landing page as first section */}
      <Landing />
      {/* Home background video */}
      <video
        ref={homeVideoRef}
        className="home-bg-video global-bg-video"
        autoPlay
        loop
        muted
        playsInline
        poster=""
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: 0, display: activeSection === 'home' ? 'block' : 'none' }}
      >
        <source src="/Home_Page_Reel.mp4" type="video/mp4" />
      </video>
      {/* Main content uses flex column to ensure Home fills viewport */}
      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '0' }}>
          <div id="home" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}><Home /></div>
          <div id="highlights"><Dashboard /></div>
          <div id="story"><About /></div>
          <section id="events" style={{ minHeight: '100vh', background: '#181818', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', color: '#ffb347' }}>Upcoming Events</h2>
            <p style={{ fontSize: '1.1rem', color: '#eee' }}>Stay tuned for our upcoming performances and events!</p>
          </section>
          <section id="targets" style={{ minHeight: '100vh', background: '#101010', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', color: '#ffb347' }}>Targets & Collaborators</h2>
            <p style={{ fontSize: '1.1rem', color: '#eee' }}>We are open to new collaborations and have exciting goals ahead. More details coming soon!</p>
            <footer className="targets-footer">
              <div className="targets-follow-label">Follow Us</div>
              <div className="targets-social-row">
                <a href="https://www.instagram.com/janbroz78?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="targets-social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/share/1EbquWsY9g/" target="_blank" rel="noopener noreferrer" className="targets-social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/@janbroz5808" target="_blank" rel="noopener noreferrer" className="targets-social-link" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
