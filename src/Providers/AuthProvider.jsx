import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase.init';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged(auth, curentUser => {
    //     if(curentUser){
    //         console.log('curentUser is logged', curentUser)
    //         setUser(curentUser)
    //     }
    //     else{
    //         console.log('curentUser is not logged');
    //         setUser(null)
    //     }
    // })


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (crentUser) => {


            console.log('curent user', crentUser)
            setUser(crentUser);
            setLoding(false);

            return () => {
                unSubscribe();
            };


        });

    }, [])


    const signOutUser = () => {
        setLoding(true);
        return signOut(auth)

    }


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }





    const authInfo = {
        name: 'Polok',
        createUser,
        signInUser,
        signOutUser,
        user,
        loading,
        signInWithGoogle


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}


        </AuthContext.Provider>
    );
};

export default AuthProvider;