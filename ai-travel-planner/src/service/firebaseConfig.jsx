// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKfYO7pVksoaZPBk8uQC1NLf2htg6aVuI",
  authDomain: "ai-travel-planner-941dc.firebaseapp.com",
  projectId: "ai-travel-planner-941dc",
  storageBucket: "ai-travel-planner-941dc.firebasestorage.app",
  messagingSenderId: "172446087575",
  appId: "1:172446087575:web:cb3515351967a29b97acd2",
  measurementId: "G-P2K2672TFY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
