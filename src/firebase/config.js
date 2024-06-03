// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAidruiFLW0JQUJgwIRZ5hLJEo9wOCM8ws",
  authDomain: "livechat-3834a.firebaseapp.com",
  projectId: "livechat-3834a",
  storageBucket: "livechat-3834a.appspot.com",
  messagingSenderId: "932878713942",
  appId: "1:932878713942:web:856046a6e964e482ca67f7",
  measurementId: "G-5SYM73ZZTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };