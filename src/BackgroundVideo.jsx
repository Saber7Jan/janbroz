import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// YouTube embed URL for background video
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/4q4w9hVUsSk?autoplay=1&mute=1&controls=0&loop=1&playlist=4q4w9hVUsSk&modestbranding=1&showinfo=0&rel=0';

// For future: Instagram embed (not used by default)
// const INSTAGRAM_EMBED_URL = 'https://www.instagram.com/p/B_vR3TUHJdV/embed';

const BackgroundVideo = forwardRef(({ className = '' }, ref) => {
  const iframeRef = useRef(null);

  // Expose pause method for parent
  useImperativeHandle(ref, () => ({
    pause: () => {
      // YouTube iframe API would be needed for true pause, but we can hide the iframe for now
      if (iframeRef.current) {
        iframeRef.current.style.display = 'none';
      }
    },
    resume: () => {
      if (iframeRef.current) {
        iframeRef.current.style.display = 'block';
      }
    }
  }));

  return (
    <div className={`background-video ${className}`} style={{position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden'}}>
      <iframe
        ref={iframeRef}
        src={YOUTUBE_EMBED_URL}
        title="Background Reel"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          width: '100vw',
          height: '100vh',
          minHeight: '100%',
          minWidth: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)', zIndex: 1}} />
    </div>
  );
});

export default BackgroundVideo;
