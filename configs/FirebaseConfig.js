// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "expo-4ceb6.firebaseapp.com",
  projectId: "expo-4ceb6",
  storageBucket: "expo-4ceb6.appspot.com",
  messagingSenderId: "1050362336521",
  appId: "1:1050362336521:web:bbd0b2eceb12aa4a242fd8",
  measurementId: "G-5XSX08MEVP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
