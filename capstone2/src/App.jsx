import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MapsSection from './components/MapsSection';
import HomeUI from './components/HomeUI';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CreateMap from './components/CreateMap';

const App = () => {
  // Page state controllers
  const [showHomeUI, setShowHomeUI] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);
  const [showCreateMapPage, setShowCreateMapPage] = useState(false);
  const [showMyMapsPage, setShowMyMapsPage] = useState(false); // NEW

  // User data state
  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');

  // Placeholder for mind map data
  const [mapsData, setMapsData] = useState([]);

  // ------------------ NAVIGATION HANDLERS ----------------------

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowHomeUI(false);
    setShowContactPage(false);
    setShowCreateMapPage(false);
    setShowMyMapsPage(false); // NEW
  };

  const handleContactClick = () => {
    setShowContactPage(true);
    setShowHomeUI(false);
    setShowCreateMapPage(false);
    setShowMyMapsPage(false); // NEW
  };


  const handleCreateMapClick = () => {
    setShowCreateMapPage(true);
    setShowContactPage(false);
    setShowHomeUI(false);
    setShowMyMapsPage(false); // NEW
  };

  const handleMyMapsClick = () => {
    setShowMyMapsPage(true);
    setShowCreateMapPage(false);
    setShowContactPage(false);
    setShowHomeUI(false); // NEW
  };

  const handleBackClick = () => {
    setShowHomeUI(false);
  };

  useEffect(() => {
    console.log("User Info:", { userName, userDesc });

    // Simulated map data (could be localStorage or API)
    const savedMaps = []; // Replace with JSON.parse(localStorage.getItem("maps")) || [] if needed
    setMapsData(savedMaps);
  }, [userName, userDesc]);

  return (
    <>
      <Navbar 
        onHomeClick={handleHomeClick} 
        onContactClick={handleContactClick}
        onCreateMapClick={handleCreateMapClick}
        onMyMapsClick={handleMyMapsClick} // NEW
      />

      {/* Contact Page */}
      {showContactPage ? (
        <Contact />

      // Create Map Page */}
      ) : showCreateMapPage ? (
        <CreateMap />

      // HomeUI screen */}
      ) : showHomeUI ? (
        <HomeUI 
          userName={userName} 
          setUserName={setUserName}
          userDesc={userDesc} 
          setUserDesc={setUserDesc}
          onBackClick={handleBackClick} 
        />

      // My Maps Page */}
      ) : showMyMapsPage ? (
        <div className="my-maps-page">
          <h2 className="section-title">My Mind Maps</h2>

          {mapsData.length > 0 ? (
            <div className="map-list">
              {mapsData.map((map, index) => (
                <div key={index} className="map-card">
                  <h3>{map.title}</h3>
                  <p>{map.description}</p>
                </div>
              ))}
              <button className="btn create-map-btn">+ Create New Map</button>
            </div>
          ) : (
            <div className="empty-map-box">
              <div className="icon">📁</div>
              <p><strong>No mind maps yet</strong></p>
              <p>Create your first mind map to start organizing your ideas and visualizing your thoughts.</p>
              <button className="btn create-map-btn">+ Create New Map</button>
            </div>
          )}
        </div>

      // Default Home Page (Unchanged) */}
      ) : (
        <>
          <MapsSection />
          <Features />
          <Testimonials />
        </>
      )}

      {/* Footer (Always Visible) */}
      <Footer />
    </>
  );
};

export default App;
