// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6fLBcCbFoebeKrgEOCxE0_xc3wbEPJsE",
  authDomain: "clone-1d35a.firebaseapp.com",
  projectId: "clone-1d35a",
  storageBucket: "clone-1d35a.appspot.com",
  messagingSenderId: "768129770904",
  appId: "1:768129770904:web:61a76a4a0c0a1b448b77ed",
  measurementId: "G-2QEC3VY2DS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
