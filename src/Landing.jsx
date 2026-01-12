
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Landing.css';

const tabs = [
  { id: 'home', label: 'Home', video: '/Home_Page_Reel.mp4' },
  { id: 'highlights', label: 'Highlights', video: '/highlights_reel/JA_2k18.mp4' },
  { id: 'story', label: 'Our Story', video: '/Story_Reel.mp4' },
  { id: 'events', label: 'Upcoming Events', video: '/highlights_reel/K_Pop.mp4' },
  { id: 'targets', label: 'Targets & Collaborators', video: '/highlights_reel/NASCON_25.mp4' },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Landing = ({ onDismiss }) => {
  const videoRefs = useRef([]);

  // Pause all videos except the hovered one
  const handleHover = (idx) => {
    videoRefs.current.forEach((v, i) => {
      if (v) {
        if (i === idx) {
          v.currentTime = 0;
          v.play();
        } else {
          v.pause();
        }
      }
    });
  };
  const handleLeave = () => {
    videoRefs.current.forEach((v) => v && v.pause());
  };

  return (
    <section className="landing-hero" id="landing">
      <div className="landing-overlay" />
      <div className="landing-content">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="landing-title">
          Welcome to JanBroz
        </motion.h1>
        <motion.div className="landing-tabs-horizontal" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.13 } } }}>
          {tabs.map((tab, idx) => (
            <motion.div
              key={tab.id}
              className="landing-tab-video-wrap"
              whileHover={{ scale: 1.06, boxShadow: '0 4px 32px #ffb34755' }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={() => handleHover(idx)}
              onMouseLeave={handleLeave}
              onClick={() => {
                if (onDismiss) onDismiss();
                setTimeout(() => scrollToSection(tab.id), 350); // Wait for transition
              }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              tabIndex={0}
              role="button"
              aria-label={tab.label}
            >
              <video
                ref={el => videoRefs.current[idx] = el}
                src={tab.video}
                className="landing-tab-video"
                muted
                loop
                playsInline
                preload="metadata"
                poster=""
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <span className="landing-tab-label">{tab.label}</span>
              <span className="landing-tab-overlay" />
            </motion.div>
          ))}
        </motion.div>
        <button
          className="landing-enter-btn"
          style={{ marginTop: 40, padding: '0.7em 2.2em', fontSize: '1.2rem', borderRadius: 8, background: '#ffb347', color: '#181818', fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 2px 16px #ffb34733' }}
          onClick={onDismiss}
        >
          Enter Site
        </button>
      </div>
    </section>
  );
};

export default Landing;
