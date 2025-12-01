// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtXKiso95J2qZXWDd_CKf-FK72aZZJXxs",
  authDomain: "react-email-pass-auth-2e2df.firebaseapp.com",
  projectId: "react-email-pass-auth-2e2df",
  storageBucket: "react-email-pass-auth-2e2df.firebasestorage.app",
  messagingSenderId: "66120395586",
  appId: "1:66120395586:web:5ec8e248142c8375cef6db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth define for authentication ref
export const auth = getAuth(app)