

const Product = () => {
    return (
        <div className="rounded-2xl shadow shadow-white hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <button className="cursor-pointer grid gap-2 text-left">
                <div className="overflow-hidden">
                    <img className="hover:scale-110 duration-500 transition-all" src="https://elexy-demo.myshopify.com/cdn/shop/files/001_360x.png?v=1715841941" alt="" />
                </div>
                <div className="p-4 font-inter">
                    <h1 className="text-xl font-semibold font-open-sans">Smart Phone 12</h1>
                    <h1 className="font-inter">From TK 4000.00</h1>
                </div>
            </button>

            <div className="pb-4 px-4 font-open-sans">
                <button className="text-lg  bg-[#B4976C] hover:text-black active:scale-95 transition-all cursor-pointer active:text-white w-full py-2 text-center font-semibold rounded-xl">Add To Cart</button>
            </div>
        </div>
    )
}

export default Product