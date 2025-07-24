// src/components/LoginModal.jsx
import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const LoginModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      let userCredential;
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful:", userCredential);
        alert("Logged in successfully");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signup successful:", userCredential);
        alert("Account created successfully");
      }
      onClose(); // Close modal after success
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          {errorMsg && <p className="error">{errorMsg}</p>}
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default LoginModal;







