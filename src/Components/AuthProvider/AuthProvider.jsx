import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('./product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const googleProvider = new GoogleAuthProvider();
    const loginGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // for create user using email and pass 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // for email varification 
    const emailVarification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // logoutuser
    const logoutUser = () => {
        return signOut(auth)
    }

    // for delete the user 
    const deleteAccount = () => {
        return deleteUser(user)
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
        createUser,
        loginUser,
        logoutUser,
        loginGoogle,
        emailVarification,
        deleteAccount
    }






    return (
        <AuthContext.Provider value={dataContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider