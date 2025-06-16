import React from 'react';

const CommunityPage = () => {
  const events = [
    {
      id: 1,
      title: "TanStack Virtual Workshop",
      date: "June 28, 2023",
      time: "2:00 PM EST",
      type: "online"
    },
    {
      id: 2,
      title: "React Query Meetup",
      date: "July 12, 2023",
      time: "6:30 PM PST",
      type: "in-person"
    },
    {
      id: 3,
      title: "TypeScript + TanStack Q&A",
      date: "July 25, 2023",
      time: "1:00 PM GMT",
      type: "online"
    }
  ];

  const forumPosts = [
    {
      id: 1,
      title: "How to optimize large queries?",
      author: "Alex Johnson",
      replies: 12,
      tags: ['performance', 'react-query']
    },
    {
      id: 2,
      title: "Nested routes not working as expected",
      author: "Sam Chen",
      replies: 5,
      tags: ['router', 'help']
    },
    {
      id: 3,
      title: "Sharing state between queries",
      author: "Maria Garcia",
      replies: 8,
      tags: ['state-management']
    },
    {
      id: 4,
      title: "Custom pagination with useInfiniteQuery",
      author: "Tom Wilson",
      replies: 3,
      tags: ['react-query', 'pagination']
    }
  ];

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="section-title">Community</h1>
        <p className="section-subtitle">
          Connect with other developers, get help, and share your knowledge
        </p>

        <div className="community-layout">
          <div className="community-column">
            <div className="resources-card card fade-in">
              <h2>Community Resources</h2>
              <div className="resources-grid">
                <a href="#" className="resource-card">
                  <div className="resource-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <h3>GitHub Repository</h3>
                    <p>Contribute to the source code</p>
                  </div>
                </a>
                
                <a href="#" className="resource-card">
                  <div className="resource-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Discord Chat</h3>
                    <p>Join live discussions</p>
                  </div>
                </a>
                
                <a href="#" className="resource-card">
                  <div className="resource-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3>Mailing List</h3>
                    <p>Stay updated with news</p>
                  </div>
                </a>
                
                <a href="#" className="resource-card">
                  <div className="resource-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div>
                    <h3>Blog</h3>
                    <p>Read tutorials and articles</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="forum-card card fade-in">
              <div className="forum-header">
                <h2>Community Forum</h2>
                <button className="btn btn-outline">Start Discussion</button>
              </div>
              
              <div className="forum-posts">
                {forumPosts.map(post => (
                  <a key={post.id} href="#" className="forum-post">
                    <div>
                      <h3>{post.title}</h3>
                      <div className="post-meta">
                        <span>By {post.author}</span>
                        <span>{post.replies} replies</span>
                      </div>
                    </div>
                    <div className="post-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="forum-footer">
                <a href="#" className="view-all">View all discussions →</a>
              </div>
            </div>
          </div>
          
          <div className="community-column">
            <div className="events-card card fade-in">
              <div className="events-header">
                <h2>Upcoming Events</h2>
                <button className="btn btn-outline">Host Event</button>
              </div>
              
              <div className="events-list">
                {events.map(event => (
                  <div key={event.id} className="event-item">
                    <div className="event-date">
                      <div className="event-day">{event.date.split(' ')[1].replace(',', '')}</div>
                      <div className="event-month">{event.date.split(' ')[0]}</div>
                    </div>
                    <div className="event-details">
                      <h3>{event.title}</h3>
                      <div className="event-meta">
                        <span>{event.time}</span>
                        <span className={`event-type ${event.type}`}>
                          {event.type === 'online' ? 'Online Event' : 'In-Person'}
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-outline">RSVP</button>
                  </div>
                ))}
              </div>
              
              <div className="events-footer">
                <a href="#" className="view-calendar">View full calendar →</a>
              </div>
            </div>
            
            <div className="contributors-card card fade-in">
              <h2>Top Contributors</h2>
              <div className="contributors-list">
                <div className="contributor">
                  <div className="avatar">MJ</div>
                  <div>
                    <h3>Michael Johnson</h3>
                    <p>42 contributions</p>
                  </div>
                </div>
                <div className="contributor">
                  <div className="avatar">SC</div>
                  <div>
                    <h3>Sarah Chen</h3>
                    <p>28 contributions</p>
                  </div>
                </div>
                <div className="contributor">
                  <div className="avatar">DP</div>
                  <div>
                    <h3>David Park</h3>
                    <p>19 contributions</p>
                  </div>
                </div>
                <div className="contributor">
                  <div className="avatar">AM</div>
                  <div>
                    <h3>Aisha Mohammed</h3>
                    <p>15 contributions</p>
                  </div>
                </div>
              </div>
              <div className="contributors-footer">
                <a href="#" className="view-all">Become a contributor →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;