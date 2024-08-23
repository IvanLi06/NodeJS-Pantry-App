// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "hspantryapp-3b10a.firebaseapp.com",
  projectId: "hspantryapp-3b10a",
  storageBucket: "hspantryapp-3b10a.appspot.com",
  messagingSenderId: "707168287946",
  appId: "1:707168287946:web:4e4cf4c5e91d8654c80833"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export {app, firestore}