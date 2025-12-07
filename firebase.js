// Import Firebase Functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqGmGCqT4SgV1k4dBV7J8kbsCvrjIlkvE",
  authDomain: "login-project-35070.firebaseapp.com",
  projectId: "login-project-35070",
  storageBucket: "login-project-35070.firebasestorage.app",
  messagingSenderId: "219193468120",
  appId: "1:219193468120:web:2ec1075e7956683aaa63ad",
  measurementId: "G-ZLHH9L0TM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);