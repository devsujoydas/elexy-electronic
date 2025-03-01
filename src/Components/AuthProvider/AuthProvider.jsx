import { createContext, useEffect, useState } from "react"
import { , GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
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










    const dataContext = {
        products,
    }






    return (
        <AuthContext.Provider value={dataContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider