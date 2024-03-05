// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDLNS9-iJTY8hPLbGUIQJzQ8NSu_1LXA1Y",

  authDomain: "prueba-chat-a6de0.firebaseapp.com",

  projectId: "prueba-chat-a6de0",

  storageBucket: "prueba-chat-a6de0.appspot.com",

  messagingSenderId: "789379801148",

  appId: "1:789379801148:web:620108a473728af4f32339",

  measurementId: "G-XND36ME7JH"

};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();