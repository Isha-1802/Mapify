

import React from 'react';

const HomeUI = ({ userName, setUserName, userDesc, setUserDesc, onBackClick }) => {
  return (
    <div className="home-ui-container light-theme">
      <button className="home-ui-back-btn" onClick={onBackClick}>← Back</button>

      <section className="home-ui-panel home-ui-left-panel">
        <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="User Avatar" />
        <input
          type="text"
          className="home-ui-user-name-input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          aria-label="Enter your name"
        />
        <textarea
          className="home-ui-user-desc-input"
          value={userDesc}
          onChange={(e) => setUserDesc(e.target.value)}
          placeholder="Enter your description"
          rows={3}
          aria-label="Enter your description"
        />
        {['Home', 'Explore', 'Favorites', 'Settings', 'Logout'].map((btn) => (
          <button key={btn} disabled={btn === 'Home'} className={btn === 'Home' ? 'active' : ''}>
            {btn}
          </button>
        ))}
      </section>

      <section className="home-ui-panel home-ui-main-panel">
        <h2 className="home-ui-main-title">Welcome to Mapify!</h2>
        <p>Create and explore your mind maps with ease.</p>
        <div className="no-maps-box">No mind maps yet</div>
        <button className="btn create-btn home-ui-create-btn">＋ Create New Map</button>
      </section>

      <section className="home-ui-panel home-ui-right-panel">
        <h3 className="home-ui-right-title">Upcoming Events</h3>
        <ul>
          <li>Exam on React - May 20</li>
          <li>Project submission - May 25</li>
          <li>Group meeting - May 27</li>
        </ul>
      </section>
    </div>
  );
};

export default HomeUI;

// import React from 'react';

// const HomeUI = ({
//   userName,
//   setUserName,
//   userDesc,
//   setUserDesc,
//   onBackClick,
//   onExploreClick, // ✅ Added new prop
// }) => {
//   return (
//     <div className="home-ui-container light-theme">
//       <button className="home-ui-back-btn" onClick={onBackClick}>← Back</button>

//       <section className="home-ui-panel home-ui-left-panel">
//         <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="User Avatar" />
//         <input
//           type="text"
//           className="home-ui-user-name-input"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           placeholder="Enter your name"
//           aria-label="Enter your name"
//         />
//         <textarea
//           className="home-ui-user-desc-input"
//           value={userDesc}
//           onChange={(e) => setUserDesc(e.target.value)}
//           placeholder="Enter your description"
//           rows={3}
//           aria-label="Enter your description"
//         />
//         {['Home', 'Explore', 'Favorites', 'Settings', 'Logout'].map((btn) => (
//           <button
//             key={btn}
//             disabled={btn === 'Home'}
//             className={btn === 'Home' ? 'active' : ''}
//             onClick={btn === 'Explore' ? onExploreClick : undefined} // ✅ Trigger Explore click
//           >
//             {btn}
//           </button>
//         ))}
//       </section>

//       <section className="home-ui-panel home-ui-main-panel">
//         <h2 className="home-ui-main-title">Welcome to Mapify!</h2>
//         <p>Create and explore your mind maps with ease.</p>
//         <div className="no-maps-box">No mind maps yet</div>
//         <button className="btn create-btn home-ui-create-btn">＋ Create New Map</button>
//       </section>

//       <section className="home-ui-panel home-ui-right-panel">
//         <h3 className="home-ui-right-title">Upcoming Events</h3>
//         <ul>
//           <li>Exam on React - May 20</li>
//           <li>Project submission - May 25</li>
//           <li>Group meeting - May 27</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default HomeUI;
