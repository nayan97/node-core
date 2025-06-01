
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    
    // register user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login

    const loginWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    // logout user

    const logoutUser = () =>{
        setLoading(true);
       return signOut(auth);

    }

    useEffect( () =>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
        console.log('suer change', currentUser)

      })
      return () =>{
        unSubscribe();
      }
    }, [])

    const authInfo = {
            user,
            loading,
            loginUser,
            createUser,
            loginWithGoogle,
            logoutUser
    }
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;