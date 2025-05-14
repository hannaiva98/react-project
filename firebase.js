// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcEsnGJGryp2saF_Yx22ZY65oU1Yr1sKY",
  authDomain: "react-project-hanna.firebaseapp.com",
  projectId: "react-project-hanna",
  storageBucket: "react-project-hanna.firebasestorage.app",
  messagingSenderId: "170708247568",
  appId: "1:170708247568:web:c6d4bc1f02d01ec4089695",
  measurementId: "G-DRGVYM2HT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const Analytics = getAnalytics(app); 