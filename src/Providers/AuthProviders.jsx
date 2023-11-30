import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
  
    const singInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('currebt user', currentUser);

            if(currentUser){
                    //do something
                    const userInfo = {email : currentUser.email}
                    axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if(res.data?.token){
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            } else{
                //do
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        });
        return () => {
            return unSubscribe()
        }
    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        singInWithGoogle
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;