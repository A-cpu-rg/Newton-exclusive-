// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// require('dotenv').config();
const firebaseConfig = {
    apiKey: "AIzaSyD2PwletPktjcw5IWdUf3nz1tTreB5f368",
    authDomain: "newton-flashcard-61d08.firebaseapp.com",
    projectId: "newton-flashcard-61d08",
    storageBucket: "newton-flashcard-61d08.appspot.com",
    messagingSenderId: "326847854511",
    appId: "1:326847854511:web:8af84e20590e18eca9215a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };


// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };