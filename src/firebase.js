// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCJ4cKm38OGPKOO544Tp1qT4kPgUapflco",
  authDomain: "next-chat-c3684.firebaseapp.com",
  projectId: "next-chat-c3684",
  storageBucket: "next-chat-c3684.appspot.com",
  messagingSenderId: "170687277021",
  appId: "1:170687277021:web:ddda1f58cf1769cdefb834",
  measurementId: "G-KW7WY3DEGT"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth();