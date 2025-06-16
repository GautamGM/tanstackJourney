import React, { useState } from 'react';

const ExamplesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All Examples' },
    { id: 'react-query', name: 'React Query' },
    { id: 'router', name: 'Router' },
    { id: 'table', name: 'Table' },
    { id: 'virtual', name: 'Virtual' }
  ];

  const examples = [
    {
      id: 1,
      title: "Infinite Scrolling List",
      description: "Implement an infinitely loading list with React Query",
      tags: ['react-query', 'pagination'],
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: "Authentication Flow",
      description: "Complete auth flow with protected routes using TanStack Router",
      tags: ['router', 'authentication'],
      difficulty: 'Advanced'
    },
    {
      id: 3,
      title: "Data Table with Filters",
      description: "Full-featured data table with sorting, filtering and pagination",
      tags: ['table', 'data'],
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: "Virtualized List",
      description: "Optimize large lists with TanStack Virtual",
      tags: ['virtual', 'performance'],
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: "Real-time Dashboard",
      description: "Live updating dashboard with websockets and React Query",
      tags: ['react-query', 'realtime'],
      difficulty: 'Advanced'
    },
    {
      id: 6,
      title: "Nested Routing",
      description: "Complex nested routing patterns with TanStack Router",
      tags: ['router', 'layout'],
      difficulty: 'Intermediate'
    }
  ];

  const filteredExamples = activeFilter === 'all' 
    ? examples 
    : examples.filter(ex => ex.tags.includes(activeFilter));

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="section-title">Examples</h1>
        <p className="section-subtitle">
          Real-world implementations and code samples to learn from
        </p>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="examples-grid">
          {filteredExamples.map(example => (
            <div key={example.id} className="example-card card fade-in">
              <div className="example-header">
                <h3>{example.title}</h3>
                <span className={`difficulty-badge ${example.difficulty.toLowerCase()}`}>
                  {example.difficulty}
                </span>
              </div>
              <p>{example.description}</p>
              <div className="example-footer">
                <div className="tags">
                  {example.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="btn btn-outline">
                  View Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="contribute-card card fade-in">
          <div className="contribute-content">
            <div>
              <h3>Share Your Example</h3>
              <p>Have an interesting implementation? Contribute to our examples gallery!</p>
            </div>
            <button className="btn btn-primary">Contribute</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;