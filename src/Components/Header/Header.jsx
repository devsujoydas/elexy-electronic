import { Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {

    const [search, setSearch] = useState(false);

    return (
        <div className="relative">
            {/* header  */}
            <div className=" bg-[#121212] text-gray-300 py-4 font-inter">
                <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto">
                    <p>Free Delivery on orders over $260</p>
                    <div className="flex gap-3">
                        <button className="flex gap-2 justify-center items-center cursor-pointer">
                            <FaLocationCrosshairs />
                            <p>Track your Order</p>
                        </button>
                        <button className="flex gap-2 justify-center items-center cursor-pointer">
                            <GoLocation />
                            <p>Find a Store</p>
                        </button>
                        <div>
                            <select name="" id="" className="hover:border-b cursor-pointer">
                                <option value="AED">AED</option>
                                <option value="AUD">AUD</option>
                                <option value="BDT" selected>BDT</option>
                                <option value="BTC">BTC</option>
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <div>
                            <select name="" id="" className="hover:border-b cursor-pointer">
                                <option value="En">En</option>
                                <option value="Bn">Bn</option>
                                <option value="Fr">Fr</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar  */}
            <nav className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center pt-8 pb-5 ">
                <Link to={''} className="active:scale-95 transition-all">
                    <img src="/public/assets/lgo.png" alt="" />
                </Link>
                <div className="font-inter flex flex-col lg:flex-row gap-8">
                    <Link to={'/'} className="hover:text-gray-300 active:scale-95 transition-all">Home</Link>
                    <div className="flex justify-center items-end gap-2">
                        <Link className="hover:text-gray-300 active:scale-95 transition-all">Shop</Link>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex justify-center items-end gap-2">
                        <Link className="hover:text-gray-300 active:scale-95 transition-all">Products</Link>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex justify-center items-end gap-2">
                        <Link className="hover:text-gray-300 active:scale-95 transition-all">Pages</Link>
                        <IoIosArrowDown />
                    </div>
                    <Link className="hover:text-gray-300 active:scale-95 transition-all">Contact</Link>
                </div>
                <div className="text-2xl flex gap-4">
                    <button onClick={() => { setSearch(!search) }} className="hover:text-gray-300 active:scale-95 cursor-pointer transition-all">
                        <FiSearch />
                    </button>
                    <button className="hover:text-gray-300 active:scale-95 cursor-pointer transition-all">
                        <FaRegHeart />
                    </button>
                    <button className="hover:text-gray-300 active:scale-95 cursor-pointer transition-all">
                        <BsCart3 />
                    </button>

                    <span className="border border-gray-400 mx-2"></span>

                    <button className="cursor-pointer active:scale-95 transition-all flex justify-center items-center gap-1">
                        <img className="bg-gray-300 rounded-full h-10 w-10" src="" alt="" />
                        <div className="font-open-sans">
                            <p className="text-xs text-gray-300">Hi, Sujoy Das</p>
                            <p className="text-[15px]">My Account</p>
                        </div>
                    </button>
                </div>
            </nav>
            {search && <div className="h-screen fixed z-10 w-full top-0">
                <div className="bg-gray-700 min-h-56 flex justify-center items-center ">
                    <div className="relative ">
                        <input type="text" className="border rounded-full px-10 w-xl py-4 " placeholder="Search Product Here" />
                        <button className="bg-[#B4976C] flex justify-center items-center gap-2 absolute cursor-pointer active:scale-95 transition-all font-medium hover:bg-gray-500 top-2 right-2 rounded-full py-2 px-5"><FiSearch />Search</button>
                    </div>
                    <button onClick={()=>{setSearch(!search)}}>
                        <IoMdClose className="text-3xl rounded-full ml-3 border p-1 cursor-pointer"/>
                    </button>
                </div>
            </div>
            }
        </div>
    )
}

export default Header