// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGRouG_7r4LvYHWSQLbNEfTTbDmXvsDZ4",
  authDomain: "react-blog-hook-3dba2.firebaseapp.com",
  projectId: "react-blog-hook-3dba2",
  storageBucket: "react-blog-hook-3dba2.appspot.com",
  messagingSenderId: "1013721822574",
  appId: "1:1013721822574:web:799664248f6764868f7d7f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
