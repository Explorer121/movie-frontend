import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'

import {
     GoogleAuthProvider,
     onAuthStateChanged,
     signInWithPopup,
     signOut
   } from "firebase/auth";


const AuthContext = createContext({  
     currentUser: null, 
}); 

export const useAuth = () => useContext(AuthContext); 


export const AuthContextProvider = ({ children }) => {
     const [user, setUser] = useState({});

     const googleSignIn = () => {
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
          .then((result) => {
               const credential = GoogleAuthProvider.credentialFromResult(result);
               const token = credential?.accessToken;
               const user = result.user;
               console.log({ credential, token, user });
           })
           .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               const email = error.email;
               const credential = GoogleAuthProvider.credentialFromError(error);
               console.log({ errorCode, errorMessage, email, credential });
           });
     }


     const logOut = () => {
          signOut(auth)
          .then(() => {
          }).catch((error) => {
             console.log(error.message)
          });
     }

     // Handle auth
     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
          })

          return () => {
               unsubscribe()
          }
     }, [])

     return <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
          {children}
     </AuthContext.Provider>
} // This


