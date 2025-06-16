import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, isMobile }) => {
  const location = useLocation();

  const navdata = [
    { id: 1, name: "Home", link: "/", icon: "🏠" },
    { id: 2, name: "Learning Path", link: "/path", icon: "📚" },
    { id: 3, name: "Documentation", link: "/docs", icon: "📄" },
    { id: 4, name: "Examples", link: "/examples", icon: "💡" },
    { id: 5, name: "Community", link: "/community", icon: "👥" },
  ];

  // Close sidebar when route changes on mobile
  React.useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location, isMobile, setIsSidebarOpen]);

  return (
    <>
      {/* Topbar for mobile */}
      {isMobile && (
        <div className="topbar">
          <button 
            className="menu-toggle" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          
          <Link to="/" className="mobile-logo">
            <div className="logo-icon">TS</div>
            <span>TanStack Journey</span>
          </Link>
        </div>
      )}

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo" onClick={() => isMobile && setIsSidebarOpen(false)}>
            <div className="logo-icon">TS</div>
            <div className="logo-text">
              <div className="logo-title">TanStack Journey</div>
              <div className="logo-subtitle">Modern React Data Management</div>
            </div>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-links">
            {navdata.map((el) => {
              const isActive = location.pathname === el.link;
              return (
                <li key={el.id}>
                  <Link
                    to={el.link}
                    className={isActive ? 'active' : ''}
                    onClick={() => isMobile && setIsSidebarOpen(false)}
                  >
                    <span className="nav-icon">{el.icon}</span>
                    <span className="nav-text">{el.name}</span>
                    {isActive && <span className="active-indicator" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-btn"
          >
            <FaGithub className="github-icon" />
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobile && isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
};

export default Navbar;