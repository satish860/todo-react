// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNfJFPdJGCQ42PDaZxSa_JjWrm8mU8KYc",
  authDomain: "todo-c20cd.firebaseapp.com",
  projectId: "todo-c20cd",
  storageBucket: "todo-c20cd.appspot.com",
  messagingSenderId: "241432927606",
  appId: "1:241432927606:web:76d330d8f8291adee86e57",
  measurementId: "G-SGYQMFEMMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;