import { createContext, useEffect, useState } from "react"
import {  GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/public/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        // setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current User', currentUser);
            setUser(currentUser)
            // setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])






    const dataContext = {
        user,
        products,
        signInWithGoogle,
        signOutUser
    }






    return (
        <AuthContext.Provider value={dataContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider