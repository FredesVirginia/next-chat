// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyA8HE1-ATzUeM3cIj_Z4GHnPM7vZ8iI1J8",

  authDomain: "neext-chat.firebaseapp.com",

  projectId: "neext-chat",

  storageBucket: "neext-chat.appspot.com",

  messagingSenderId: "1052529757678",

  appId: "1:1052529757678:web:f7838cc5fea5d15a2392ff",

  measurementId: "G-QP49L4KVYS"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();