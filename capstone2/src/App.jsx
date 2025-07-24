import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MapsSection from './components/MapsSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CreateMap from './components/CreateMap';
import LoginModal from './components/LoginModal'; 


const App = () => {
  const [showHomeUI, setShowHomeUI] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);
  const [showCreateMapPage, setShowCreateMapPage] = useState(false);
  const [showMyMapsPage, setShowMyMapsPage] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [mapsData, setMapsData] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  // ------------------ NAVIGATION HANDLERS ----------------------
  const handleHomeClick = () => {
    setShowHomeUI(false);
    setShowContactPage(false);
    setShowCreateMapPage(false);
    setShowMyMapsPage(false);
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    setShowContactPage(true);
    setShowHomeUI(false);
    setShowCreateMapPage(false);
    setShowMyMapsPage(false);
    window.scrollTo(0, 0);
  };

  const handleCreateMapClick = () => {
    setShowCreateMapPage(true);
    setShowContactPage(false);
    setShowHomeUI(false);
    setShowMyMapsPage(false);
    window.scrollTo(0, 0);
  };

  const handleMyMapsClick = () => {
    setShowMyMapsPage(true);
    setShowCreateMapPage(false);
    setShowContactPage(false);
    setShowHomeUI(false);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setShowHomeUI(false);
  };

  useEffect(() => {
    const savedMaps = []; 
    setMapsData(savedMaps);
  }, [userName, userDesc]);

  const filteredMaps = mapsData.filter(map =>
    map.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar 
        onHomeClick={handleHomeClick} 
        onContactClick={handleContactClick}
        onCreateMapClick={handleCreateMapClick}
        onMyMapsClick={handleMyMapsClick}
        onGetStartedClick={() => setShowLoginModal(true)}
      />

      
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}

      {/* Route logic based on state */} 
      {showContactPage ? (
        <Contact />
      ) : showCreateMapPage ? (
        <CreateMap />
      ) : showHomeUI ? (
        <HomeUI 
          userName={userName} 
          setUserName={setUserName}
          userDesc={userDesc} 
          setUserDesc={setUserDesc}
          onBackClick={handleBackClick} 
        />
      ) : showMyMapsPage ? (
        <div className="my-maps-page">
          <h2 className="section-title">My Mind Maps</h2>

          {/* Search bar */}
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

          {/* Show filtered maps or fallback */}
          {filteredMaps.length > 0 ? (
            <div className="map-list">
              {filteredMaps.map((map, index) => (
                <div key={index} className="map-card">
                  <h3>{map.title}</h3>
                  <p>{map.description}</p>
                </div>
              ))}
              <button className="btn create-map-btn" onClick={handleCreateMapClick}>
                + Create New Map
              </button>
            </div>
          ) : (
            <div className="empty-map-box">
              <div className="icon">📁</div>
              <p><strong>No matching maps found</strong></p>
              <p>Create your first mind map to start organizing your ideas and visualizing your thoughts.</p>
              <button className="btn create-map-btn" onClick={handleCreateMapClick}>
                + Create New Map
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <MapsSection onCreateMapClick={handleCreateMapClick} /> {/* Pass prop */}
          <Features />
          <Testimonials />
        </>
      )}

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
