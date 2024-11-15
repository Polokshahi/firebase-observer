// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWxU8rrG2Qv3lmIImiR6TMLIMO6dWtnxE",
  authDomain: "react-auth-integrations-73c8b.firebaseapp.com",
  projectId: "react-auth-integrations-73c8b",
  storageBucket: "react-auth-integrations-73c8b.firebasestorage.app",
  messagingSenderId: "89082782088",
  appId: "1:89082782088:web:a64ced38a91c8ea7d25a3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
