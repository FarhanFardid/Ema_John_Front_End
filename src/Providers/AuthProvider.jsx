import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
 const [user, setUser] = useState('');
    // const user ={name: "John"};

   const createUser = (email,password) =>{
   return createUserWithEmailAndPassword(auth, email, password)

   }
   const signUser = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = () => {
   return signOut(auth)
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser);

    });
    return () => {
        unsubscribe();
    }
   },[])

    const authInfo ={user,createUser,signUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;