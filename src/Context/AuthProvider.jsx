import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider()

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // new user register
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })

    }


    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubcribe()
        }
    }, [])




    const authInfo = {
        userRegister,
        userLogin,
        googleLogin,
        userLogout,
        updateUserProfile,
        user,
        setLoading,
        loading,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;