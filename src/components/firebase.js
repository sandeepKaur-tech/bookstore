import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {  collection,getDocs,getDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAU0GRLQnqbhlHsAnniT5LlhNyo5CZXw8g",
    authDomain: "bookstore-8a02d.firebaseapp.com",
    projectId: "bookstore-8a02d",
    storageBucket: "bookstore-8a02d.appspot.com",
    messagingSenderId: "864156147965",
    appId: "1:864156147965:web:a512647b6f93579cc69e94",
    measurementId: "G-PFKQC89GY2"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db, collection, getDocs };