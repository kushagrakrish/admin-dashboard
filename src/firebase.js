// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDolwXfBWIOPJIlTFhcr5KXZdVGUSie1ss",
  authDomain: "admin-dashboard-ec0b2.firebaseapp.com",
  projectId: "admin-dashboard-ec0b2",
  storageBucket: "admin-dashboard-ec0b2.appspot.com",
  messagingSenderId: "665424683602",
  appId: "1:665424683602:web:c17ea9faafd4eb0d98b58b",
  measurementId: "G-LENJKR1CP3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
