// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBwNQAxUwC5RLsWnkfgesEZybESBBZAFJ0",
  authDomain: "next-chat-aeb5b.firebaseapp.com",
  projectId: "next-chat-aeb5b",
  storageBucket: "next-chat-aeb5b.appspot.com",
  messagingSenderId: "224001724652",
  appId: "1:224001724652:web:bc850fd15ce66dd0a815c9",
  measurementId: "G-S4QYF3RJ6B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();