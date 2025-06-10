// Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h3>What Our Users Say</h3>
        <p>Join the community of creative thinkers who use Mapify daily.</p>
        <div className="testimonial-grid">
          {/* Repeat this block for each testimonial */}
          <div className="testimonial">
            <p>"Mapify has transformed how I plan my projects. The intuitive interface makes it so easy to visualize complex ideas."</p>
            <span className="user">SL - Sarah L., UX Designer</span>
          </div>
          {/* Add more testimonials here */}
          <div className="testimonial">
              <p>
                  "Mapify has completely transformed how I approach literature analysis. I can visually connect themes, characters, and symbols—it's like mind mapping for deep reading!"
              </p>
              <span className="user">ZT – Zoe T., Literature Major</span>
          </div>
        <div className="testimonial">
            <p>
                "As an undergrad juggling multiple subjects, Mapify helps me keep everything organized. It's like having a bird's-eye view of my coursework."
            </p>
            <span className="user">AL – Alex L., Undergraduate Student</span>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
