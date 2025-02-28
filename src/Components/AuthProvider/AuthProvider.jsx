import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/public/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

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