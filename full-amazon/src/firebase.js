import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1qtkh_6iKqAAA3KpHR63NUly-yq3tOjs",
  authDomain: "challenge-844c3.firebaseapp.com",
  projectId: "challenge-844c3",
  storageBucket: "challenge-844c3.appspot.com",
  messagingSenderId: "1010901008354",
  appId: "1:1010901008354:web:87e6df4a1af803e73583bb",
  measurementId: "G-2GKVMC26MG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
