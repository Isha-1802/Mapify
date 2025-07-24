
import React from 'react';

const testimonials = [
  {
    quote:
      "Mapify has transformed how I plan my projects. The intuitive interface makes it so easy to visualize complex ideas.",
    user: "SL – Sarah L., UX Designer",
  },
  {
    quote:
      "Mapify has completely transformed how I approach literature analysis. I can visually connect themes, characters, and symbols—it's like mind mapping for deep reading!",
    user: "ZT – Zoe T., Literature Major",
  },
  {
    quote:
      "As an undergrad juggling multiple subjects, Mapify helps me keep everything organized. It's like having a bird's-eye view of my coursework.",
    user: "AL – Alex L., Undergraduate Student",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" aria-labelledby="testimonial-heading">
      <div className="container">
        <h3 id="testimonial-heading">What Our Users Say</h3>
        <p>Join the community of creative thinkers who use Mapify daily.</p>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial" key={index}>
              <p>"{item.quote}"</p>
              <span className="user">{item.user}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
