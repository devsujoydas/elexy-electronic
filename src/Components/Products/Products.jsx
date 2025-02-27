import { useLoaderData } from "react-router-dom"
import Product from "./Product"

const Products = () => {
    const products = useLoaderData()
    console.log(products);

    return (
        <div className="w-7xl mx-auto py-10">
            <div className="  grid grid-cols-4 gap-5">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Products