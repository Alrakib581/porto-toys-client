import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../firebase/firebase.config'

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    //Google registration or sign in code here
    const loginUserWithGoogle = (auth, provider)=>{
        return signInWithPopup(auth, provider)
    }
    //Google registration or sign in code here

    //created user with email and password
    const creatingUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //created user with email and password

    //update user info
    const userInfoUpdate = (cuser, name, photo)=>{
        return updateProfile(cuser,name, photo)
    }
    //update user info
    //user logout
    const logout = ()=>{
        return signOut(auth)
    }
    //user logout
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, logUser =>{
            setUser(logUser)
        })
        return unsubscribe();
    },[])
    const authInformation = {
        loginUserWithGoogle,
        logout,
        creatingUser,
        userInfoUpdate,
        user,
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;