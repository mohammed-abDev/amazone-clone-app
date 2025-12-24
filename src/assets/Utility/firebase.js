// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//auth
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLpt8namhKovfxC5E_c2p9OIDTg4sPE2Q",
  authDomain: "clone-d6205.firebaseapp.com",
  projectId: "clone-d6205",
  storageBucket: "clone-d6205.firebasestorage.app",
  messagingSenderId: "724191972192",
  appId: "1:724191972192:web:81945dc092d6fc8b99ac05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);