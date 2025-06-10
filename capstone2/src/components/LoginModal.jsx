import React, { useState } from 'react';

const LoginModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(isSignup ? "Signup successful ✅" : "Login successful ✅");

    setTimeout(() => {
      setSuccessMessage('');
      onClose();
    }, 2000); // Auto-close after showing success
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal slide-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isSignup ? 'Sign Up for Mapify' : 'Sign in to Mapify'}</h2>
        <p>{isSignup ? 'Create your account below' : 'Welcome back! Please log in.'}</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Your Email" required />
          <input
            type="password"
            placeholder={isSignup ? "Create Password" : "Your Password"}
            required
          />
          <button type="submit" className="submit-btn">
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <div className="switch-auth">
          {isSignup ? (
            <p>Already have an account? <span onClick={() => setIsSignup(false)} className="auth-toggle">Log in</span></p>
          ) : (
            <p>Don’t have an account? <span onClick={() => setIsSignup(true)} className="auth-toggle">Sign up</span></p>
          )}
        </div>

        <div className="auth-buttons">
          <button className="google-btn">🌐 Continue with Google</button>
          <button className="facebook-btn">📘 Continue with Facebook</button>
        </div>

        <p className="terms">By continuing, you agree to our Terms of Service & Privacy Policy.</p>
      </div>
    </div>
  );
};

export default LoginModal;
