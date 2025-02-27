import { Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    return (
        <div className="">
            {/* header  */}
            <div className=" bg-[#121212] text-gray-300 py-4 font-inter">
                <div className="flex justify-between max-w-7xl mx-auto">
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
            <nav className="max-w-7xl mx-auto flex justify-between items-center pt-8 pb-5 ">
                <div className="">
                    <img src="/public/assets/lgo.png" alt="" />
                </div>
                <div className="font-inter flex gap-8">
                    <Link to={'/'} className="hover:text-gray-300 transition-all">Home</Link>
                    <div className="flex justify-center items-end gap-2">
                        <Link className="hover:text-gray-300 transition-all">Shop</Link>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex justify-center items-end gap-2">
                        <Link className="hover:text-gray-300 transition-all">Products</Link>
                        <IoIosArrowDown />
                    </div>
                    <div className="flex justify-center items-end gap-2">
                        <Link className="hover:text-gray-300 transition-all">Pages</Link>
                        <IoIosArrowDown />
                    </div>
                    <Link className="hover:text-gray-300 transition-all">Contact</Link>

                </div>
                <div className="text-2xl flex gap-2">
                    <button className="hover:text-gray-300 transition-all">
                        <button><FiSearch /></button>
                    </button>
                    <button className="hover:text-gray-300 transition-all">
                        <button><FaRegHeart /></button>
                    </button>
                    <button className="hover:text-gray-300 transition-all">
                        <button><BsCart3 /></button>
                    </button>
                    <span className="border border-gray-400 mx-2"></span>
                    <div className="cursor-pointer flex justify-center items-center gap-1">
                        <img className="bg-gray-300 rounded-full h-10 w-10" src="" alt="" />
                        <div className="font-open-sans">
                            <p className="text-xs text-gray-300">Hi, Sujoy Das</p>
                            <p className="text-[15px]">My Account</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header