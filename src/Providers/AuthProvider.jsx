import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
 const [user, setUser] = useState('');
 const[loading, setLoading] = useState(true);
    // const user ={name: "John"};

   const createUser = (email,password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)

   }
   const signUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = () => {
   return signOut(auth)
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);

    });
    return () => {
        unsubscribe();
    }
   },[])

    const authInfo ={user,createUser,signUser,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;