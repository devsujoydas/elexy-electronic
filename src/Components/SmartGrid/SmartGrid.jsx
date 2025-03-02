
const SmartGrid = () => {
    return (
        <div className='bg-white'>
            <div className='md:w-7xl md:mx-auto mx-5 py-20 grid lg:grid-cols-3 grid-cols-1 gap-7'>

                <div className='md:col-span-1 overflow-hidden rounded-2xl cursor-pointer relative'>
                    <img className=' hover:scale-110 duration-500 transition-all rounded-2xl' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-1-image.png?v=1713851588&width=550" alt="" />
                    <div className="text-center absolute top-10 left-25">
                        <h1 className="font-bold text-2xl">Smart Sound With <br /> Smart System</h1>
                        <button className="font-inter font-semibold underline">Buy Now</button>
                    </div>
                </div>

                <div className='md:col-span-2 flex flex-col gap-7'>

                    <div className='flex gap-7 flex-col md:flex-row'>
                        <div className="relative w-fit">
                            <div className='overflow-hidden rounded-2xl cursor-pointer'>
                                <img className='rounded-2xl h-[100%] hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-2-image.png?v=1713852106&width=550" alt="" />
                            </div>
                            <div className="text-center absolute top-10 right-10">
                                <p className="text-[#e9c38a]">SALE UPTO 60% OFF</p>
                                <h1 className="font-bold text-2xl">Virtual Reality <br /> Experience</h1>
                                <button className="font-inter font-semibold underline">Buy Now</button>
                            </div>
                        </div>

                        <div className="relative w-fit">
                            <div className='overflow-hidden rounded-2xl cursor-pointer'>
                                <img className='rounded-2xl hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-3-image.png?v=1713852382&width=550" alt="" />
                            </div>
                            <div className="text-center absolute top-10 left-20">
                                <h1 className="text-[#e9c38a]">NEW ARRIVALS</h1>
                                <h1 className="font-bold text-2xl">CC Camera</h1>
                                <button className="font-inter font-semibold underline">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-7 flex-col md:flex-row '>

                        <div className="relative">
                            <div className='overflow-hidden rounded-2xl cursor-pointer'>
                                <img className='rounded-2xl hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-4-image.png?v=1713852499&width=550" alt="" />
                            </div>
                            <div className="text-center absolute top-10 left-20">
                                <h1 className="text-[#e9c38a]">NEW ARRIVALS</h1>
                                <h1 className="font-bold text-2xl">Smartphones</h1>
                                <button className="font-inter font-semibold underline">Buy Now</button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className='overflow-hidden rounded-2xl cursor-pointer'>
                                <img className='rounded-2xl h-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-5-image.png?v=1713852757&width=550" alt="" />
                            </div>
                            <div className="text-center absolute top-10 left-10">
                                <h1 className="text-[#e9c38a]">START FROM $899</h1>
                                <h1 className="font-bold text-2xl">New Camera <br /> Collections</h1>
                                <button className="font-inter font-semibold underline">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SmartGrid