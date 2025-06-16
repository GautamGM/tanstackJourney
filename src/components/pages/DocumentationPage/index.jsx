import React from 'react';

const DocumentationPage = () => {
  const docsCategories = [
    {
      title: "Getting Started",
      items: [
        "Introduction to TanStack",
        "Installation Guide",
        "Basic Configuration",
        "Your First Query"
      ]
    },
    {
      title: "Core Concepts",
      items: [
        "Query Fundamentals",
        "Mutation Basics",
        "Caching Strategies",
        "Error Handling"
      ]
    },
    {
      title: "Advanced Topics",
      items: [
        "Infinite Queries",
        "Prefetching Data",
        "Optimistic Updates",
        "Custom Hooks"
      ]
    },
    {
      title: "API Reference",
      items: [
        "useQuery",
        "useMutation",
        "useInfiniteQuery",
        "QueryClient"
      ]
    }
  ];

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="section-title">Documentation</h1>
        <p className="section-subtitle">
          Comprehensive guides and API references for all TanStack tools
        </p>

        <div className="docs-container">
          <div className="docs-search card fade-in">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search documentation..."
                className="search-input"
              />
              <button className="btn btn-primary">Search</button>
            </div>
            <div className="search-tags">
              <span>Popular: </span>
              <button className="tag">useQuery</button>
              <button className="tag">Pagination</button>
              <button className="tag">SSR</button>
              <button className="tag">TypeScript</button>
            </div>
          </div>

          <div className="docs-grid">
            {docsCategories.map((category, index) => (
              <div key={index} className="docs-category card fade-in">
                <h2>{category.title}</h2>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="docs-link">
                        {item}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="version-card card fade-in">
            <div className="version-header">
              <h3>Version 4.28.0</h3>
              <span className="badge">Latest</span>
            </div>
            <p>Released on June 15, 2023</p>
            <div className="version-actions">
              <button className="btn btn-outline">Release Notes</button>
              <button className="btn btn-primary">Upgrade Guide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;