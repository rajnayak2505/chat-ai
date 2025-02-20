// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYKqdNDSVlW7qe7j-UY1dx-1cDuv93G6I",
  authDomain: "chat-ai-online.firebaseapp.com",
  projectId: "chat-ai-online",
  storageBucket: "chat-ai-online.firebasestorage.app",
  messagingSenderId: "276804030064",
  appId: "1:276804030064:web:85631cc382d20e8450aeb5",
  measurementId: "G-PMBSGFCRP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// const logout = signOut(app);
const provider = new GoogleAuthProvider();
export {auth, provider};