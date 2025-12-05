// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwKLw18GkpPBNhVHnjO6gVjcsxE8xE0Mk",
  authDomain: "netflixgpt-93dbc.firebaseapp.com",
  projectId: "netflixgpt-93dbc",
  storageBucket: "netflixgpt-93dbc.firebasestorage.app",
  messagingSenderId: "997604877014",
  appId: "1:997604877014:web:73aebb894dce172b655f77",
  measurementId: "G-GCWBBQGS4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();