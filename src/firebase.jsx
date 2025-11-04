import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0ACZltveWTxYdot2TvsSi8HxSVaFsX7c",
  authDomain: "ecommerce-react-app-3751e.firebaseapp.com",
  projectId: "ecommerce-react-app-3751e",
  storageBucket: "ecommerce-react-app-3751e.firebasestorage.app",
  messagingSenderId: "1041989434759",
  appId: "1:1041989434759:web:96d44d6aab0373f99d2722"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
