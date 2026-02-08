// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-29a65.firebaseapp.com",
  projectId: "mern-estate-29a65",
  storageBucket: "mern-estate-29a65.firebasestorage.app",
  messagingSenderId: "113033837873",
  appId: "1:113033837873:web:4a6a9ff1ecd9147c248410"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);