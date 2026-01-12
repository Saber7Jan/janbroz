
import React, { useState, useRef, useEffect } from 'react';
import './Dashboard.css';


// Instagram reels do not allow direct video embedding, so we'll use a preview image and play a local/fallback video if available.
// If you have local 20s preview videos, add their paths to 'previewVideo'.
const highlights = [
  {
    event: 'Jubilee Arts 2018 – Lisbon, Portugal',
    date: 'July 2018',
    description: 'Represented Pakistan in the global talent showcase, fusing traditional and modern dance styles.',
    previewVideo: '/highlights_reel/JA_2k18.mp4',
    videoUrl: 'https://the.ismaili/pk/en/news/sabir-shakir-pakistan',
  },
  {
    event: 'Toastmasters Event – Bahria University, Islamabad',
    date: 'March 2023',
    description: 'Special performance for a public speaking and leadership forum.',
    previewVideo: '/highlights_reel/Bahria_toast.mp4',
    videoUrl: 'https://www.instagram.com/reel/CzDYMYZsyhM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    event: 'Pak–China Cultural Event – COMSATS University, Islamabad',
    date: 'April 2023',
    description: 'Performed in collaboration with the China Study Center.',
    previewVideo: '/highlights_reel/PAK_CHINA.mp4',
    videoUrl: 'https://www.instagram.com/reel/C1m0-ybKT4s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    event: "NASCON'23 – FAST University, Islamabad",
    date: 'May 2023',
    description: 'Feature performance of our fusion choreography at a major tech & arts festival.',
    previewVideo: '/highlights_reel/NASCON_23.mp4',
    videoUrl: 'https://www.instagram.com/reel/CrQKHZotv_b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    event: 'K POP World Festival – Pakistan Regional Preliminary',
    date: 'May 2024',
    description: 'Selected as cover-dance finalists for the prestigious Korean Embassy–hosted talent competition.',
    previewVideo: '/highlights_reel/K_Pop.mp4',
    videoUrl: 'https://www.instagram.com/reel/C9uFj65qUJ-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    event: "NASCON'25 – FAST University, Islamabad",
    date: 'April 2025',
    description: 'Headlined the talent showcase at the university’s largest tech–arts festival.',
    previewVideo: '/highlights_reel/NASCON_25.mp4',
    videoUrl: 'https://www.instagram.com/reel/DJc108LsOF6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];



const Dashboard = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  // Play 20s preview, auto-advance to next video after 20s
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    let timeoutId;
    const stopAt20 = () => {
      if (video.currentTime >= 20) {
        next();
      }
    };
    video.addEventListener('timeupdate', stopAt20);
    // Fallback in case timeupdate is missed
    timeoutId = setTimeout(() => {
      next();
    }, 20000);
    return () => {
      video.removeEventListener('timeupdate', stopAt20);
      clearTimeout(timeoutId);
    };
  }, [current]);

  const prev = () => setCurrent((current - 1 + highlights.length) % highlights.length);
  const next = () => setCurrent((current + 1) % highlights.length);

  const item = highlights[current];

  // For vertical videos (Bahria_toast, NASCON_25), use objectFit: 'contain' and aspect ratio 9/16
  const isVertical = ["/highlights_reel/Bahria_toast.mp4", "/highlights_reel/NASCON_25.mp4"].includes(item.previewVideo);

  return (
    <section className="dashboard highlight-carousel" id="highlights">
      <h2>Performance Highlights</h2>
      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous Highlight">&#8592;</button>
        <div className="carousel-slide">
          <div className="carousel-video-bg" style={isVertical ? { aspectRatio: '9/16', maxWidth: 400, margin: '0 auto' } : { aspectRatio: '16/9' }}>
            <video
              ref={videoRef}
              src={item.previewVideo}
              autoPlay
              muted
              loop
              playsInline
              className="carousel-video"
              style={isVertical
                ? { objectFit: 'contain', width: '100%', height: '100%', background: '#000' }
                : { objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="carousel-overlay" />
          </div>
          <div className="carousel-content">
            <h3>{item.event}</h3>
            <p className="date">{item.date}</p>
            <p className="carousel-desc">{item.description}</p>
            <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="highlight-link">
              Watch Full Video
            </a>
          </div>
        </div>
        <button className="carousel-arrow right" onClick={next} aria-label="Next Highlight">&#8594;</button>
      </div>
    </section>
  );
};

export default Dashboard;
