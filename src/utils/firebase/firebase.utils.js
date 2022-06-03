import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth =async (userAuth) =>{
  const userDocRef = doc(db,'user',userAuth.uid )
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,email,createAt
      });
    }catch(error){
      console.log(error.message);
    }
  }

  return userDocRef
}
