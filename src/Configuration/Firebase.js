// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoOm0MYyOK0DHgliA6yHZveFFhdR-9eLw",
  authDomain: "first-firebase-project-6b960.firebaseapp.com",
  projectId: "first-firebase-project-6b960",
  storageBucket: "first-firebase-project-6b960.firebasestorage.app",
  messagingSenderId: "91233002415",
  appId: "1:91233002415:web:95b811d7af8a1346e5455a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);