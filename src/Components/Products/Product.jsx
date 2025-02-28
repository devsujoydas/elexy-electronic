/* eslint-disable react/prop-types */



const Product = ({ product }) => {
    const { img, title, price } = product;
    // const { img, title, price, discountPrice, review, instockQuantity, color, descriptions } = product;
    return (
        <div className="rounded-2xl shadow shadow-white hover:-translate-y-1 transition-all duration-500 overflow-hidden ">
            <button className="cursor-pointer grid gap-2 text-left">
                <div className="overflow-hidden">
                    <img className="hover:scale-110 duration-500 transition-all " src={img[0]} alt="" />
                </div>
                <div className="p-4 font-inter">
                    <h1 className="text-xl font-semibold font-open-sans">{title}</h1>
                    <h1 className="font-inter ">From TK {price}.00</h1>
                </div>
            </button>

            <div className="pb-4 px-4 font-open-sans text-center">
                <button className="text-lg bg-[#B4976C] hover:text-black active:scale-95 transition-all cursor-pointer active:text-white px-5 py-2 w-full font-semibold rounded-xl">Add To Cart</button>
            </div>
        </div>
    )
}

export default Product