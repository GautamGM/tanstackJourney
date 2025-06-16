import React from 'react';

const tanstackTools = [
  {
    name: "React Query",
    description: "Powerful asynchronous state management for React",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    color: "#4361ee",
    difficulty: 40,
    difficultyLabel: "Medium"
  },
  {
    name: "TanStack Router",
    description: "Type-safe routing with first-class search param support",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    color: "#06d6a0",
    difficulty: 60,
    difficultyLabel: "Intermediate"
  },
  {
    name: "TanStack Table",
    description: "Headless UI for building powerful tables & datagrids",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
    color: "#ff6b6b",
    difficulty: 70,
    difficultyLabel: "Advanced"
  },
  {
    name: "TanStack Virtual",
    description: "Headless virtualizer for scrollable elements",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
    color: "#ffd166",
    difficulty: 50,
    difficultyLabel: "Medium"
  }
];

const ToolsSection = () => {
  return (
    <section className="tools-section">
      <div className="container">
        <h2 className="section-title">The TanStack Ecosystem</h2>
        <p className="section-subtitle">
          Powerful tools for modern web development. Each tool solves specific problems in elegant ways.
        </p>
        
        <div className="tools-grid">
          {tanstackTools.map((tool, index) => (
            <div key={index} className="tool-card card fade-in">
              <div className="tool-icon" style={{ backgroundColor: tool.color }}>
                {tool.icon}
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${tool.difficulty}%`,
                    backgroundColor: tool.color 
                  }}
                />
              </div>
              <div className="difficulty">
                <span>Beginner</span>
                <span>Expert</span>
                <div className="difficulty-label">Difficulty: {tool.difficultyLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;