// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqTJRUpvoZ7-L_aJCKbB-sgYJAnhMQLRU",
    authDomain: "netflixgpt-a2b58.firebaseapp.com",
    projectId: "netflixgpt-a2b58",
    storageBucket: "netflixgpt-a2b58.appspot.com",
    messagingSenderId: "642597120570",
    appId: "1:642597120570:web:5aab27633b5f9506a6e303",
    measurementId: "G-7LV935B28K",
    

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth();
