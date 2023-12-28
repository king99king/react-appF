import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase configuration details
  apiKey: "AIzaSyDF8i7_xxpEIVYv4PX__BUizjObzp6SPCM",
  authDomain: "reactjsprojauth.firebaseapp.com",
  databaseURL: "https://reactjsprojauth-default-rtdb.firebaseio.com",
  projectId: "reactjsprojauth",
  storageBucket: "reactjsprojauth.appspot.com",
  messagingSenderId: "572455421818",
  appId: "1:572455421818:web:811fea43e420ea25ea38c3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
