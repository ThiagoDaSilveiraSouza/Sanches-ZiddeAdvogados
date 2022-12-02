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
import { addDoc, collection, DocumentData, getDoc, getDocs, getFirestore, QuerySnapshot } from "firebase/firestore"
import { ICompanyData } from "src/interfaces";
import { IPost } from "src/interfaces/IPost";

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

export const useFirebase = () => {
  const dataBase = getFirestore(app)
  const postCollectionRef = collection(dataBase, "post")
  const companyDataCollectionRef = collection(dataBase, "companyData")

  const updateResponseToList = (dataResponse: QuerySnapshot<DocumentData>) => {
    return dataResponse?.docs?.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
  }

  const getPosts = async () => {
    try {
      const posts = await getDocs(postCollectionRef)
      return updateResponseToList(posts) as IPost[]
    } catch (err) {
      console.log("getDocs error:", err)
    }
  }

  const createPost = async (post: IPost) => {
    try {
      const createResponse = await addDoc(postCollectionRef, post)

      return createResponse

    } catch (err) {
      console.warn("createPost error", err)
    }
  }

  const getCompanyData = async () => {
    try {
      const companyData = await getDocs(companyDataCollectionRef)
      return updateResponseToList(companyData)[0] as ICompanyData
    } catch (err) {
      console.warn("getCompanyData err", err)
    }
  }

  return {
    getPosts,
    createPost,
    getCompanyData
  }
}