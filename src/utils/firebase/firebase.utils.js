import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWXLPnyGGmqiFYiTBBsF2EUOXumjYkxZU",
  authDomain: "clothing-app-4b68b.firebaseapp.com",
  projectId: "clothing-app-4b68b",
  storageBucket: "clothing-app-4b68b.appspot.com",
  messagingSenderId: "1035235662929",
  appId: "1:1035235662929:web:375158ef8961a89e46ac70",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth =async (userAuth,additionalInformation={}) =>{
  if(!userAuth) return;

  const userDocRef = doc(db,'user',userAuth.uid )
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    }catch(error){
      console.log(error.message);
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};