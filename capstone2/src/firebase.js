// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCLVrWX_v1DoWROHhHovPLq8JXi43d_lws",
  authDomain: "mindmap-app14.firebaseapp.com",
  projectId: "mindmap-app14",
  storageBucket: "mindmap-app14.appspot.com",
  messagingSenderId: "832109279040",
  appId: "1:832109279040:web:7fec67b8193f0340092ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth & providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
