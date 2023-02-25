// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v2-c02b8.firebaseapp.com",
  projectId: "twitter-v2-c02b8",
  storageBucket: "twitter-v2-c02b8.appspot.com",
  messagingSenderId: "237327246682",
  appId: "1:237327246682:web:35a8d300647ba89c5dbf63"
};

// Initialize Firebase
const app = !getApp().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };