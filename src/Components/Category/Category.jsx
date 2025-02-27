
const Category = () => {
    return (
        <div className=" bg-[#333333]">
            <div className="w-7xl mx-auto text-center py-30 grid gap-5">
                <h1 className="text-4xl font-open-sans font-bold">Choose your Category</h1>

                <p className="text-xl text-gray-300 ">Smartwatches provide quick access to notifications, calls, messages, and
                    <br /> apps right on your wrist, reducing the constantly check your phone.</p>

                <div className="grid grid-cols-5 mt-10 gap-5 font-open-sans">
                    <div className="grid gap-2 cursor-pointer">
                        <div className="rounded-full overflow-hidden">
                            <img className=" hover:scale-110 duration-500 transition-all" src="/public/assets/Rectangle_395.png" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold">Home Appliances</h1>
                        <p>1 Items</p>
                    </div>
                    <div className="grid gap-2 cursor-pointer">
                        <div className="rounded-full overflow-hidden">
                            <img className=" hover:scale-110 duration-500 transition-all" src="/public/assets/Rectangle_398.png" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold">PC & Laptop</h1>
                        <p>6 Items</p>
                    </div>
                    <div className="grid gap-2 cursor-pointer">
                        <div className="rounded-full overflow-hidden">
                            <img className=" hover:scale-110 duration-500 transition-all" src="/public/assets/Rectangle_399.png" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold">Kitchen Appliances</h1>
                        <p>10 Items</p>
                    </div>
                    <div className="grid gap-2 cursor-pointer">
                        <div className="rounded-full overflow-hidden">
                            <img className=" hover:scale-110 duration-500 transition-all" src="/public/assets/Rectangle_397.png" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold">Phone & Tablet</h1>
                        <p>11 Items</p>
                    </div>
                    <div className="grid gap-2 cursor-pointer">
                        <div className="rounded-full overflow-hidden">
                            <img className=" hover:scale-110 duration-500 transition-all" src="/public/assets/Rectangle_396.png" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold">Accesories</h1>
                        <p>6 Items</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category