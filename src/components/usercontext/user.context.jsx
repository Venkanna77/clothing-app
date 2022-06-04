import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedlistener, signOutuser } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
   
  useEffect(()=>{
    const unsubcribe = onAuthStateChangedlistener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        setCurrentUser(user)
    })
    return unsubcribe
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};