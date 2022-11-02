// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbst7m8WnCR1Q7DWsoYplJowJN_7VnT-o",
  authDomain: "sanchesezidde-5b090.firebaseapp.com",
  projectId: "sanchesezidde-5b090",
  storageBucket: "sanchesezidde-5b090.appspot.com",
  messagingSenderId: "947515926265",
  appId: "1:947515926265:web:d806797286d107da806428",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app);
const auth = getAuth(app);

export const firebaseAuthWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    return signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

export const firebaseLoggout = async () => {
  try {
    return await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export const isLoggedOnFirebase = (setIsLogged: Function) => {
  onAuthStateChanged(auth, (user) => {
    setIsLogged(!!user);
  });
};
