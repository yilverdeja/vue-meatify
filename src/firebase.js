import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQ86-bEZ1RUu2sQ6LC5T7I1xSdhVnnkms",
    authDomain: "meatify-f611b.firebaseapp.com",
    databaseURL: "https://meatify-f611b-default-rtdb.firebaseio.com",
    projectId: "meatify-f611b",
    storageBucket: "meatify-f611b.appspot.com",
    messagingSenderId: "215868710360",
    appId: "1:215868710360:web:df98ece197339b533b66ad",
    measurementId: "G-RLHBGDCTD6"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();

// export the database for components to use
export { db, auth };