import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Developers Say</h2>
        <p className="section-subtitle">
          Join thousands of developers who have mastered TanStack and transformed their workflow.
        </p>
        
        <div className="testimonial-cards">
          <div className="testimonial card fade-in">
            <div className="avatar">
              <div className="avatar-initial">JD</div>
            </div>
            <div className="quote">
              "TanStack Query completely transformed how I manage data in React. 
              No more complicated useEffect chains! The caching and invalidation 
              strategies are game-changers."
            </div>
            <div className="author">James D. • Senior Frontend Engineer</div>
          </div>
          
          <div className="testimonial card fade-in">
            <div className="avatar">
              <div className="avatar-initial">SC</div>
            </div>
            <div className="quote">
              "Learning TanStack Router was a revelation for our application. 
              The nested routing patterns and type safety eliminated countless bugs 
              and made our codebase much more maintainable."
            </div>
            <div className="author">Sarah C. • Full Stack Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;