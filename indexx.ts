import React from 'react';

// Sample highlights data
const highlights = [
    {
        title: 'Digital Art Exhibition',
        description: 'Showcased at the Modern Arts Gallery, 2023.',
        image: '/assets/exhibition.jpg',
        link: 'https://janbroz.com/exhibitions'
    },
    {
        title: 'Award Winner',
        description: 'Recipient of the Emerging Artist Award, 2022.',
        image: '/assets/award.jpg',
        link: 'https://janbroz.com/awards'
    },
    {
        title: 'Featured Project',
        description: 'Interactive installation: "Light & Motion".',
        image: '/assets/project.jpg',
        link: 'https://janbroz.com/projects'
    }
];

// Highlight Card Component
const HighlightCard: React.FC<{
    title: string;
    description: string;
    image: string;
    link: string;
}> = ({ title, description, image, link }) => (
    <a href={link} className="highlight-card">
        <img src={image} alt={title} className="highlight-image" />
        <div className="highlight-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </a>
);

// Main Artist Profile Page
const JanBrozProfile: React.FC = () => (
    <div className="profile-container">
        <header className="profile-header">
            <img src="/assets/janbroz-avatar.png" alt="JanBroz" className="avatar" />
            <h1>JanBroz</h1>
            <p className="subtitle">Digital Artist & Creative Technologist</p>
        </header>
        <section className="highlights-section">
            <h2>Highlights</h2>
            <div className="highlights-grid">
                {highlights.map((item, idx) => (
                    <HighlightCard key={idx} {...item} />
                ))}
            </div>
        </section>
        <footer className="profile-footer">
            <p>
                Connect: <a href="https://instagram.com/janbroz">@janbroz</a> | <a href="mailto:hello@janbroz.com">Email</a>
            </p>
        </footer>
        <style>{`
            .profile-container {
                font-family: 'Segoe UI', Arial, sans-serif;
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                min-height: 100vh;
                color: #222;
                padding: 0 1rem;
            }
            .profile-header {
                text-align: center;
                padding: 3rem 0 2rem 0;
            }
            .avatar {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                border: 4px solid #fff;
                box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                margin-bottom: 1rem;
            }
            .subtitle {
                color: #666;
                font-size: 1.2rem;
                margin-top: 0.5rem;
            }
            .highlights-section {
                max-width: 900px;
                margin: 0 auto;
            }
            .highlights-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                gap: 2rem;
                margin-top: 1.5rem;
            }
            .highlight-card {
                display: block;
                background: #fff;
                border-radius: 16px;
                box-shadow: 0 2px 16px rgba(0,0,0,0.07);
                overflow: hidden;
                text-decoration: none;
                color: inherit;
                transition: transform 0.15s, box-shadow 0.15s;
            }
            .highlight-card:hover {
                transform: translateY(-4px) scale(1.03);
                box-shadow: 0 6px 24px rgba(0,0,0,0.12);
            }
            .highlight-image {
                width: 100%;
                height: 160px;
                object-fit: cover;
            }
            .highlight-content {
                padding: 1rem 1.2rem;
            }
            .highlight-content h3 {
                margin: 0 0 0.5rem 0;
                font-size: 1.15rem;
                color: #1a237e;
            }
            .highlight-content p {
                margin: 0;
                color: #444;
                font-size: 1rem;
            }
            .profile-footer {
                text-align: center;
                margin: 3rem 0 1rem 0;
                color: #888;
                font-size: 1rem;
            }
            .profile-footer a {
                color: #1a237e;
                text-decoration: underline;
            }
        `}</style>
    </div>
);

export default JanBrozProfile;