// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqDZnfom9egMsaJ4KzDhXl5zJR43GlHyI",
  authDomain: "react-cursos-5b11c.firebaseapp.com",
  projectId: "react-cursos-5b11c",
  storageBucket: "react-cursos-5b11c.appspot.com",
  messagingSenderId: "213271749698",
  appId: "1:213271749698:web:1bce2685e619ba01a7b9db",
  measurementId: "G-8WLRP5FQP6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

//Para tomar la parte de la autenticacion 
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
