import { useContext } from "react"
import Product from "./Product"
import { AuthContext } from "../AuthProvider/AuthProvider"

const Products = () => {
    const {products} = useContext(AuthContext)
    return (
        <div className="md::w-7xl md:mx-auto py-10 mx-5 ">
            <div className="  grid grid-cols-1 lg:grid-cols-4 gap-5">
                {Array.isArray(products) && products.map((product, idx)=><Product product={product} key={idx}/>)}
            </div>
        </div>
    )
}

export default Products