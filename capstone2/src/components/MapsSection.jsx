// MapsSection.jsx
import React from 'react';

const MapsSection = () => {
  return (
    <main className="maps-section">
      <h2>My Mind Maps</h2>
      <div className="map-card">
        <div className="map-placeholder">
          <div className="icon-box">＋</div>
          <h3>No mind maps yet</h3>
          <p>Create your first mind map to start organizing your ideas and visualizing your thoughts.</p>
          <button className="btn create-btn">＋ Create New Map</button>
        </div>
      </div>
    </main>
  );
};

export default MapsSection;
