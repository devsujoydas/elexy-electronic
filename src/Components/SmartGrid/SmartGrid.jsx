
const SmartGrid = () => {
    return (
        <div className='bg-white'>
            <div className='md:w-7xl  md:mx-auto mx-5 py-20 grid md:grid-cols-3 grid-cols-1  md:gap-5'>

                <div className=' overflow-hidden  mb-5 md:mb-0 md:col-span-1 rounded-2xl cursor-pointer relative'>
                    <img className=' hover:scale-110   duration-500 h-full  transition-all rounded-2xl' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-1-image.png?v=1713851588&width=550" alt="" />
                    <div className="text-center absolute top-10 left-25">
                        <h1 className="font-bold text-2xl">Smart Sound With <br /> Smart System</h1>
                        <button className="font-inter font-semibold underline">Buy Now</button>
                    </div>
                </div>

                <div className='col-span-2 flex flex-col gap-5'>

                    <div className='  w-fit  flex gap-5 md:flex-row flex-col'>

                        <div className="relative ">
                            <div className='overflow-hidden  h-[100%] rounded-2xl cursor-pointer'>
                                <img className='rounded-2xl h-full  hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-2-image.png?v=1713852106&width=550" alt="" />
                            </div>
                            <div className="text-center absolute top-10 right-10">
                                <p className="text-[#e9c38a]">SALE UPTO 60% OFF</p>
                                <h1 className="font-bold text-2xl">Virtual Reality <br /> Experience</h1>
                                <button className="font-inter font-semibold underline">Buy Now</button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className='overflow-hidden  rounded-2xl cursor-pointer'>
                                <img className='rounded-2xl w-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-3-image.png?v=1713852382&width=550" alt="" />
                            </div>
                            <div className="text-center absolute top-10 left-20">
                                <h1 className="text-[#e9c38a]">NEW ARRIVALS</h1>
                                <h1 className="font-bold text-2xl">CC Camera</h1>
                                <button className="font-inter font-semibold underline">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='  md:w-fit  overflow-hidden rounded-2xl flex gap-5 md:flex-row flex-col'>
                        <div className="relative">
                            <div className='overflow-hidden rounded-2xl cursor-pointer'>
                                <img className='rounded-2xl w-full hover:scale-110 duration-500 transition-all' src="https://elexy-demo.myshopify.com/cdn/shop/files/banner-h2-m-4-image.png?v=1713852499&width=550" alt="" />
                            </div>
                            <div className="text-center absolute top-10 left-20">
                                <h1 className="text-[#e9c38a]">NEW ARRIVALS</h1>
                                <h1 className="font-bold text-2xl">Smartphones</h1>
                                <button className="font-inter font-semibold underline">Buy Now</button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className='overflow-hidden h-[100%] rounded-2xl cursor-pointer'>
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