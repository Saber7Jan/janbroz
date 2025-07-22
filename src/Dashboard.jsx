import React from 'react';
import './Dashboard.css';

// Example highlights data (can be moved to a separate file or fetched dynamically)
const highlights = [
  {
    event: 'Jubilee Arts 2018 – Lisbon, Portugal',
    date: 'July 2018',
    description: 'Represented Pakistan in the global talent showcase, fusing traditional and modern dance styles.',
    link: '#',
    linkLabel: 'View Highlight',
  },
  {
    event: 'Toastmasters Event – Bahria University, Islamabad',
    date: 'March 2023',
    description: 'Special performance for a public speaking and leadership forum.',
    link: '#',
    linkLabel: 'Watch Performance',
  },
  {
    event: 'Pak–China Cultural Event – COMSATS University, Islamabad',
    date: 'April 2023',
    description: 'Performed in collaboration with the China Study Center.',
    link: '#',
    linkLabel: 'Watch Performance',
  },
  {
    event: "NASCON'23 – FAST University, Islamabad",
    date: 'May 2023',
    description: 'Feature performance of our fusion choreography at a major tech & arts festival.',
    link: '#',
    linkLabel: 'Watch Performance',
  },
  {
    event: 'K‑POP World Festival – Pakistan Regional Preliminary',
    date: 'May 2024',
    description: 'Selected as cover-dance finalists for the prestigious Korean Embassy–hosted talent competition.',
    link: '#',
    linkLabel: 'Watch Performance',
  },
  {
    event: 'NASCON\'25 – FAST University, Islamabad',
    date: 'April 2025',
    description: 'Headlined the talent showcase at the university’s largest tech–arts festival.',
    link: '#',
    linkLabel: 'Watch Performance',
  },
  {
    event: 'Global Encounters Festival 2025 – National Auditions',
    date: 'June 2025',
    description: 'Participated in the national-level selection round for upcoming Global Encounters initiatives.',
    link: '#',
    linkLabel: 'Watch Performance',
  },
];

const Dashboard = () => (
  <section className="dashboard">
    <h2>Performance Highlights</h2>
    <div className="highlights-list">
      {highlights.map((item, idx) => (
        <div className="highlight-card" key={idx}>
          <h3>{item.event}</h3>
          <p className="date">{item.date}</p>
          <p>{item.description}</p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="highlight-link">
              {item.linkLabel}
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Dashboard;
