// import React, { useState } from 'react';

// const AuthPage = ({ onBackClick }) => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>{isLogin ? 'Login to Mapify' : 'Create your Mapify account'}</h2>
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         {!isLogin && <input type="text" placeholder="Full Name" />}
//         <button className="auth-btn">{isLogin ? 'Login' : 'Sign Up'}</button>
//         <p>
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//           <span onClick={() => setIsLogin(!isLogin)} className="auth-toggle">
//             {isLogin ? 'Sign Up' : 'Login'}
//           </span>
//         </p>
//         <button onClick={onBackClick} className="auth-back-btn">← Back</button>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
import React, { useState } from 'react';

const AuthPage = ({ onBackClick }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login to Mapify' : 'Create your Mapify account'}</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {!isLogin && <input type="text" placeholder="Full Name" />}
        <button className="auth-btn">{isLogin ? 'Login' : 'Sign Up'}</button>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} className="auth-toggle">
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
        <button onClick={onBackClick} className="auth-back-btn">← Back</button>
      </div>
    </div>
  );
};

export default AuthPage;
