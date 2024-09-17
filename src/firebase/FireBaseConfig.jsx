// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrR0bLcrDsONgwFSo7sj8BKTqz_Hl2sUc",
  authDomain: "ecom-project-8328b.firebaseapp.com",
  projectId: "ecom-project-8328b",
  storageBucket: "ecom-project-8328b.appspot.com",
  messagingSenderId: "1064555905584",
  appId: "1:1064555905584:web:990955bf497ad3cf2ee3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }