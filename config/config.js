// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYvGjFAuLWlj14ZT0qQliahb2AkHG7nLo",
  authDomain: "organizion-89ac8.firebaseapp.com",
  databaseURL: "https://organizion-89ac8-default-rtdb.firebaseio.com",
  projectId: "organizion-89ac8",
  storageBucket: "organizion-89ac8.appspot.com",
  messagingSenderId: "189067670931",
  appId: "1:189067670931:web:f3143d07b22d0f0f526466",
  measurementId: "G-QCV0S4MKGX"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;