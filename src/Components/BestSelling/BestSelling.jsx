import { Link } from "react-router-dom"

const BestSelling = () => {
    return (
        <div className="bg-[#333333] font-open-sans">
            <div className="md:w-7xl grid gap-10 mx-5 md:mx-auto py-20">
                <div className="flex md:mx-0 mx-5 md:flex-row flex-col justify-between items-end font-open-sans">
                    <div className="grid gap-3">
                        <h1 className="md:text-4xl text-2xl font-bold ">Best Selling Products</h1>
                        <p className="">Electronics products continue to drive innovation and shape the <br />
                            way we live, work, and interact with our environment.

                        </p>
                    </div>
                    <Link to={'/'} className='px-7 py-3 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all'>Shop Now</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5
                ">

                    <div className="relative">
                        <div className='overflow-hidden rounded-2xl cursor-pointer'>
                            <img className='rounded-2xl h-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-image-7.png?v=1710397157&width=550" alt="" />
                        </div>
                        <div className="text-center absolute top-25 left-10">
                            <h1 className="text-[#e9c38a]">SECURITY CAMERA</h1>
                            <h1 className="font-bold text-2xl">New Camera <br /> Collections</h1>
                            <button className="font-inter font-semibold underline">Buy Now</button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className='overflow-hidden rounded-2xl cursor-pointer'>
                            <img className='rounded-2xl h-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-image-8.png?v=1710397157&width=550" alt="" />
                        </div>
                        <div className="text-center absolute top-25 left-10">
                            <h1 className="text-[#e9c38a]">START FROM $899</h1>
                            <h1 className="font-bold text-2xl">New Camera <br /> Collections</h1>
                            <button className="font-inter font-semibold underline">Buy Now</button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className='overflow-hidden rounded-2xl cursor-pointer'>
                            <img className='rounded-2xl h-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-image-9.png?v=1710397157&width=550" alt="" />
                        </div>
                        <div className="text-center absolute top-25 left-10">
                            <h1 className="text-[#e9c38a]">START FROM $899</h1>
                            <h1 className="font-bold text-2xl">New Camera <br /> Collections</h1>
                            <button className="font-inter font-semibold underline">Buy Now</button>
                        </div>
                    </div>





                    <div className="relative">
                        <div className='overflow-hidden rounded-2xl cursor-pointer'>
                            <img className='rounded-2xl h-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/instagram-1.png?v=1710752282" alt="" />
                        </div>
                        <div className="text-center absolute top-25 left-10">
                            <h1 className="text-[#e9c38a]">START FROM $899</h1>
                            <h1 className="font-bold text-2xl">New Camera <br /> Collections</h1>
                            <button className="font-inter font-semibold underline">Buy Now</button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className='overflow-hidden rounded-2xl cursor-pointer'>
                            <img className='rounded-2xl h-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/instagram-2.png?v=1710752841" alt="" />
                        </div>
                        <div className="text-center absolute top-25 left-10">
                            <h1 className="text-[#e9c38a]">START FROM $899</h1>
                            <h1 className="font-bold text-2xl">New Camera <br /> Collections</h1>
                            <button className="font-inter font-semibold underline">Buy Now</button>
                        </div>
                    </div>


                    <div className="relative">
                        <div className='overflow-hidden rounded-2xl cursor-pointer'>
                            <img className='rounded-2xl h-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/instagram-4.png?v=1710752841" alt="" />
                        </div>
                        <div className="text-center absolute top-25 left-10">
                            <h1 className="text-[#e9c38a]">START FROM $899</h1>
                            <h1 className="font-bold text-2xl">New Camera <br /> Collections</h1>
                            <button className="font-inter font-semibold underline">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSelling