import { useContext } from "react"
import Product from "./Product"
import { AuthContext } from "../AuthProvider/AuthProvider"

const Products = () => {
    const {products} = useContext(AuthContext)
    return (
        <div className="w-7xl mx-auto py-10 md:px-0 px-10">
            <div className="  grid grid-cols-1 lg:grid-cols-4 gap-5">
                {Array.isArray(products) && products.map((product, idx)=><Product product={product} key={idx}/>)}
            </div>
        </div>
    )
}

export default Products