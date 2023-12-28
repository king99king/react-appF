// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF8i7_xxpEIVYv4PX__BUizjObzp6SPCM",
  authDomain: "reactjsprojauth.firebaseapp.com",
  databaseURL: "https://reactjsprojauth-default-rtdb.firebaseio.com",
  projectId: "reactjsprojauth",
  storageBucket: "reactjsprojauth.appspot.com",
  messagingSenderId: "572455421818",
  appId: "1:572455421818:web:811fea43e420ea25ea38c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
export const auth = getAuth(app);
const storage = getStorage(app);
export { storage, ref, uploadBytesResumable, getDownloadURL };
export const googleProvider = new GoogleAuthProvider();
