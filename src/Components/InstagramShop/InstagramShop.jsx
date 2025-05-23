
const InstagramShop = () => {
    return (
        <div className="md:px-0 px-5 bg-[#333333] pb-10 md:p-0">
            <div className="">
                <h1 className="text-center md:text-4xl text-2xl font-bold   md:pb-12 pb ">Instagram Shop</h1>
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-5 ">
                    <div className="overflow-hidden ">
                        <img className="hover:scale-110 duration-700 md:rounded-none rounded-2xl cursor-pointer transition-all" src="https://elexy-demo.myshopify.com/cdn/shop/files/instagram-1.png?v=1710752282" alt="" />
                    </div>
                    <div className="overflow-hidden ">
                        <img className="hover:scale-110 duration-700 md:rounded-none rounded-2xl cursor-pointer transition-all" src="https://elexy-demo.myshopify.com/cdn/shop/files/instagram-2.png?v=1710752841" alt="" />
                    </div>
                    <div className="overflow-hidden ">
                        <img className="hover:scale-110 duration-700 md:rounded-none rounded-2xl cursor-pointer transition-all" src="https://elexy-demo.myshopify.com/cdn/shop/files/instagram-3.png?v=1710752842" alt="" />
                    </div>
                    <div className="overflow-hidden ">
                        <img className="hover:scale-110 duration-700 md:rounded-none rounded-2xl cursor-pointer transition-all" src="https://elexy-demo.myshopify.com/cdn/shop/files/instagram-4.png?v=1710752841" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstagramShop