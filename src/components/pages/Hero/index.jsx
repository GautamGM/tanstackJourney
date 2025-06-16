import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Master <span className="gradient-text">TanStack</span> in 2023</h1>
          <p className="subtitle">
            The complete guide to modern React data management. Learn step-by-step with practical examples and real-world projects.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Start Learning
            </button>
            <button className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              View Documentation
            </button>
          </div>
        </div>
        
        <div className="hero-graphic">
          <div className="tech-grid">
            <div className="tech-item">React</div>
            <div className="tech-item">TypeScript</div>
            <div className="tech-item">TanStack</div>
            <div className="tech-item">Query</div>
            <div className="tech-item">Router</div>
            <div className="tech-item">Table</div>
            <div className="tech-item">Virtual</div>
            <div className="tech-item">NextJS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;