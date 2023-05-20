import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../firebase/firebase.config'
import Swal from 'sweetalert2';

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //Google registration or sign in code here
    const loginUserWithGoogle = (auth, provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    //Google registration or sign in code here

    //created user with email and password
    const creatingUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //created user with email and password

    //signin user code
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 
    //signin user code 

    //update user info
    const userInfoUpdate = (cuser, name, photo)=>{
        return updateProfile(cuser,name, photo)
    }
    //update user info
    //user logout
    const logout = ()=>{
        setLoading(true)
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Logout successfull.',
            showConfirmButton: false,
            timer: 2000
          })
        return signOut(auth)
    }
    //user logout
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, logUser =>{
            setUser(logUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe()
        } 
    },[])
    const authInformation = {
        loginUserWithGoogle,
        logout,
        creatingUser,
        userInfoUpdate,
        signInUser,
        loading,
        user,
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;