import { Link } from "react-router-dom"
import Products from "../Products/Products"

const Recommended = () => {
    return (
        <div className="bg-[#333333]">
            <div className="md:w-7xl grid gap-10 md:mx-auto pb-10">
                <div className="flex md:mx-0 mx-5 md:flex-row flex-col justify-between items-end font-open-sans">
                    <div className="grid gap-3">
                        <h1 className="md:text-4xl text-2xl font-bold ">Highly Recommended</h1>
                        <p className="">Electronics products continue to drive innovation and shape the
                            <br /> way we live, work, and interact with our environment.</p>
                    </div>
                    <Link to={'/products'} className='px-7 py-3 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all'>View More</Link>
                </div>

                <div>
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default Recommended