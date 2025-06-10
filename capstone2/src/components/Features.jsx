// Features.jsx
import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h3>Powerful Features, Simple Interface</h3>
        <p>Everything you need to create beautiful, meaningful mind maps without the complexity.</p>
        <div className="features-grid">
          <div className="card">
            <h4>Create & Connect</h4>
            <p>Easily create nodes and connect them to visualize relationships between ideas, tasks, or concepts.</p>
          </div>
          <div className="card">
            <h4>Customize & Style</h4>
            <p>Personalize your mind maps with colors, styles, and formatting to make your ideas stand out.</p>
          </div>
          <div className="card">
            <h4>Save & Export</h4>
            <p>Save your mind maps to access later or export as images and PDFs to share with others.</p>
          </div>
        </div>
      </div>
    </section>
    // finally
  );
};

export default Features;
