import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MapsSection from './components/MapsSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CreateMap from './components/CreateMap';
import LoginModal from './components/LoginModal'; // ⬅️ NEW IMPORT


const App = () => {
  // Page state controllers
  const [showHomeUI, setShowHomeUI] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);
  const [showCreateMapPage, setShowCreateMapPage] = useState(false);
  const [showMyMapsPage, setShowMyMapsPage] = useState(false); // NEW
  const [showLoginModal, setShowLoginModal] = useState(false); // NEW

  // User data state
  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');

  // Placeholder for mind map data
  const [mapsData, setMapsData] = useState([]);

  // Search input state
  const [searchQuery, setSearchQuery] = useState('');

  // ------------------ NAVIGATION HANDLERS ----------------------

  const handleHomeClick = () => {
    setShowHomeUI(false);
    setShowContactPage(false);
    setShowCreateMapPage(false);
    setShowMyMapsPage(false); // NEW
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleContactClick = () => {
    setShowContactPage(true);
    setShowHomeUI(false);
    setShowCreateMapPage(false);
    setShowMyMapsPage(false); // NEW
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleCreateMapClick = () => {
    setShowCreateMapPage(true);
    setShowContactPage(false);
    setShowHomeUI(false);
    setShowMyMapsPage(false); // NEW
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleMyMapsClick = () => {
    setShowMyMapsPage(true);
    setShowCreateMapPage(false);
    setShowContactPage(false);
    setShowHomeUI(false); // NEW
    window.scrollTo(0, 0); // Scroll to top
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

  // Filter logic for searching maps by title
  const filteredMaps = mapsData.filter(map =>
    map.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar 
        onHomeClick={handleHomeClick} 
        onContactClick={handleContactClick}
        onCreateMapClick={handleCreateMapClick}
        onMyMapsClick={handleMyMapsClick} // NEW
        onGetStartedClick={() => setShowLoginModal(true)} // NEW
      />

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}

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

          {/* Search Bar */}
          <div className="search-bar" style={{ textAlign: 'center', margin: '1rem 0' }}>
            <input
              type="text"
              placeholder="Let’s find your thought trails 🗺️"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              style={{
                width: '60%',
                padding: '10px 15px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                outline: 'none',
                backgroundColor: '#fff'
              }}
            />
          </div>

          {filteredMaps.length > 0 ? (
            <div className="map-list">
              {filteredMaps.map((map, index) => (
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
              <p><strong>No matching maps found</strong></p>
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
      <Footer 
        onHomeClick={handleHomeClick}
        onCreateMapClick={handleCreateMapClick}
        onMyMapsClick={handleMyMapsClick}
        onContactClick={handleContactClick}
      />
    </>
  );
};

export default App;
