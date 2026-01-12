import React, { useRef } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "home",
    title: "Home",
    description: "Welcome to JanBroz – Dance. Culture. Innovation.",
    bg: "/Home_Page_Reel.mp4",
    type: "video",
  },
  {
    id: "highlights",
    title: "Highlights",
    description: "See our best performances and milestones.",
    bg: "/highlights_reel/JA_2k18.mp4",
    type: "video",
  },
  {
    id: "story",
    title: "Our Story",
    description: "Discover our journey from Hunza to the world stage.",
    bg: "/Story_Reel.mp4",
    type: "video",
  },
  {
    id: "upcoming",
    title: "Upcoming Events",
    description: "Stay tuned for our next big shows and appearances.",
    bg: "/some_upcoming_image.jpg",
    type: "image",
  },
  {
    id: "targets",
    title: "Targets & Collaborators",
    description: "Our future goals and dream collaborations.",
    bg: "/some_targets_image.jpg",
    type: "image",
  },
];

export default function HorizontalSections() {
  const containerRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  return (
    <div className="relative w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex"
         ref={containerRef}
         style={{ scrollBehavior: "smooth" }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center bg-black/80 h-16 items-center">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            className="mx-2 px-4 py-2 text-white font-semibold hover:text-yellow-400 transition"
          >
            {s.title}
          </button>
        ))}
      </nav>
      {/* Sections */}
      {sections.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className="snap-center w-screen h-screen flex-shrink-0 flex items-center justify-center relative"
        >
          {/* Background */}
          {s.type === "video" ? (
            <video
              src={s.bg}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:brightness-110"
              style={{ zIndex: 0 }}
            />
          ) : (
            <img
              src={s.bg}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:brightness-110"
              style={{ zIndex: 0 }}
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10 group transition duration-300 hover:bg-black/40" />
          {/* Content */}
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center text-center px-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">{s.title}</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl">{s.description}</p>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
