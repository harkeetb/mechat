import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAidruiFLW0JQUJgwIRZ5hLJEo9wOCM8ws",
  authDomain: "livechat-3834a.firebaseapp.com",
  projectId: "livechat-3834a",
  storageBucket: "livechat-3834a.appspot.com",
  messagingSenderId: "932878713942",
  appId: "1:932878713942:web:856046a6e964e482ca67f7",
  measurementId: "G-5SYM73ZZTW"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = app.firestore.FieldValue.serverTimestamp;

export default { projectAuth, projectFirestore, timestamp };