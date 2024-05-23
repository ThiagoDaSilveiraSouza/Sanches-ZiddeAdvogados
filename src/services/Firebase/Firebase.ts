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
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  getFirestore,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";

import { ICompanyData, ITextHomeData } from "src/interfaces";
import { IPost } from "../../interfaces/IPost";

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
<<<<<<< HEAD
  const dataBase = getFirestore(app);
  const postCollectionRef = collection(dataBase, "post");
  const companyDataCollectionRef = collection(dataBase, "companyData");
=======
  const dataBase = getFirestore(app)
  const postCollectionRef = collection(dataBase, "post")
  const companyDataCollectionRef = collection(dataBase, "companyData")
  const homePageDataCollectionRef = collection(dataBase, "homePageData")
>>>>>>> dc12fb01208e3aaf8880d2e0c67fbafb3eb3d740

  const updateResponseToList = <T>(dataResponse: QuerySnapshot<T>) => {
    return dataResponse?.docs?.map((doc) => {
      const updatedResponseToList = { ...doc.data(), id: doc.id };
      return updatedResponseToList;
    });
  };

  const getCompanyData = async () => {
    try {
      const companyData = await getDocs(companyDataCollectionRef);
      const updatedCompanyData = updateResponseToList(
        companyData
      )[0] as ICompanyData;

      return updatedCompanyData;
    } catch (err) {
      console.warn("getCompanyData err", err);
    }
  };

  const updateSingleCompanyData = async (newCompanyData: ICompanyData) => {
    try {
      const updateCompanyResponse = await updateDoc(
        doc(dataBase, "companyData", "81ZbKUcXXwupicaUWVfY"),
        { ...newCompanyData }
      );
      console.log("updateCompanyResponse", updateCompanyResponse);

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const getPosts = async () => {
    try {
      const posts = await getDocs(postCollectionRef);
      const updatedPostList = updateResponseToList(posts).sort((a, b) => {
        const aSeconds = a.date.seconds;
        const bSeconds = b.date.seconds;

        return bSeconds - aSeconds;
      });
      return updatedPostList;
    } catch (err) {
      console.log("getDocs error:", err);
    }
  };

  const createPost = async (post: IPost) => {
    try {
      const createPostResponse = await addDoc(postCollectionRef, post);
      console.log("createPostResponse", createPostResponse);

      return createPostResponse;
    } catch (err) {
      console.warn("createPost error", err);
    }
  };

  const updatePostById = async (id: string, newPost: IPost) => {
    try {
      const updatePostResponse = await updateDoc(doc(dataBase, "post", id), {
        ...newPost,
      });
      console.log("updatePostResponse", updatePostResponse);

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const deletePostById = async (id: string) => {
    try {
      const deletePostByIdResponse = await deleteDoc(doc(dataBase, "post", id));
      console.log("deletePostByIdResponse", deletePostByIdResponse);

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
<<<<<<< HEAD
  };
=======
  }

  const getHomePageData = async () => {
    try {
      const homePageData = await getDocs(homePageDataCollectionRef)
      const updatedHomePageData = updateResponseToList(homePageData)[0]

      return updatedHomePageData
    } catch (err) {
      console.warn("getHomePageData err", err)
    }
  }

  const updateHomePageData = async (newCompanyData: ITextHomeData) => {
    try {
      const updatedHomePageData = await updateDoc(doc(dataBase, "homePageData", "k2lvZvXSMP2XwYUNf8z0"), { ...newCompanyData })

      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

>>>>>>> dc12fb01208e3aaf8880d2e0c67fbafb3eb3d740

  return {
    getCompanyData,
    updateSingleCompanyData,
    getPosts,
    createPost,
    updatePostById,
    deletePostById,
<<<<<<< HEAD
  };
};
=======
    getHomePageData,
    updateHomePageData
  }
}
>>>>>>> dc12fb01208e3aaf8880d2e0c67fbafb3eb3d740
