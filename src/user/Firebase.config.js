// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKJgkebqqlluIl_uCxQoxWbYKjeF5yDns",
  authDomain: "b10-a11-cb71f.firebaseapp.com",
  projectId: "b10-a11-cb71f",
  storageBucket: "b10-a11-cb71f.firebasestorage.app",
  messagingSenderId: "371188420579",
  appId: "1:371188420579:web:043ab68889542a94495ad6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
