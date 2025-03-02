import { Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [search, setSearch] = useState(false);
    const [account, setAccount] = useState(false);
    const [navSm, setNavSm] = useState(true);
    const [taka, setTaka] = useState("BDT");
    const [lang, setLang] = useState("En");
    return (
        <div className="relative">
            {/* header  */}
            <div className=" bg-[#121212] text-gray-300 py-4  font-inter">
                <div className="flex flex-col lg:flex-row md:justify-between  max-w-7xl mx-auto">
                    <p className="text-center">Free Delivery on orders over $260</p>
                    <div className="flex gap-3  ">
                        <button className="flex gap-2 justify-center items-center cursor-pointer">
                            <FaLocationCrosshairs />
                            <p>Track your Order</p>
                        </button>
                        <button className="flex gap-2 justify-center items-center cursor-pointer">
                            <GoLocation />
                            <p>Find a Store</p>
                        </button>
                        <div>
                            <select value={taka} onChange={(e) => setTaka(e.target.value)} name="" id="" className="hover:border-b cursor-pointer">
                                <option value="AED">AED</option>
                                <option value="AUD">AUD</option>
                                <option value="BDT">BDT</option>
                                <option value="BTC">BTC</option>
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <div>
                            <select value={lang} onChange={(e) => setLang(e.target.value)} name="" id="" className="hover:border-b cursor-pointer">
                                <option value="En">En</option>
                                <option value="Bn">Bn</option>
                                <option value="Fr">Fr</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar  */}
            <nav className="max-w-7xl md:mx-auto mx-5 gap-2 flex flex-col lg:flex-row md:justify-between md:items-center pt-8 pb-5 ">

                <div className="flex justify-between items-center">
                    <Link to={''} className="active:scale-95 transition-all">
                        <img src="https://elexy-demo.myshopify.com/cdn/shop/files/lgo.png?v=1709012574&width=250" alt="" />
                    </Link>

                    <button onClick={() => { setNavSm(!navSm) }} className="text-5xl block md:hidden active:scale-95 transition-all duration-500">
                        {navSm
                            ?
                            <IoMdMenu />
                            :
                            <IoCloseSharp />
                        }
                    </button>
                </div>

                <div className="hidden md:flex md:gap-10 items-center justify-center gap-5">
                    <div className="font-inter flex md:flex-row flex-col  gap-2 md:gap-8">
                        <div className="flex justify-center items-end gap-2">
                            <Link to={'/'} className="hover:text-[#B4976C] active:scale-95 transition-all">Home</Link>
                        </div>
                        <div className="flex justify-center items-end gap-2">
                            <Link className="hover:text-[#B4976C] active:scale-95 transition-all">Shop</Link>
                            <IoIosArrowDown />
                        </div>
                        <div className="flex justify-center items-end gap-2">
                            <Link to={"/products"} className="hover:text-[#B4976C] active:scale-95 transition-all">Products</Link>
                            <IoIosArrowDown />
                        </div>
                        <div className="flex justify-center items-end gap-2">
                            <Link className="hover:text-[#B4976C] active:scale-95 transition-all">Pages</Link>
                            <IoIosArrowDown />
                        </div>
                        <div className="flex justify-center items-end gap-2">
                            <Link to={"#contact"} className="hover:text-[#B4976C] active:scale-95 transition-all">Contact</Link>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 ">
                        <button onClick={() => { setSearch(!search) }} className="hover:text-[#B4976C] active:scale-95 cursor-pointer transition-all text-2xl">
                            <FiSearch />
                        </button>
                        <button className="hover:text-[#B4976C] active:scale-95 cursor-pointer transition-all text-2xl">
                            <FaRegHeart />
                        </button>
                        <button className="hover:text-[#B4976C] active:scale-95 cursor-pointer transition-all text-2xl">
                            <BsCart3 />
                        </button>

                        <span className="border border-gray-400 mx-2"></span>

                        {user
                            ?
                            <div className="relative">
                                <button onClick={() => { setAccount(!account) }} className="cursor-pointer active:scale-95 transition-all flex justify-center items-center gap-1">
                                    <img className="bg-gray-300 rounded-full h-10 w-10" src={user?.photoURL} alt="" />
                                    <div className="font-open-sans">
                                        <p className="text-xs text-gray-300">Hi, {user?.displayName}</p>
                                        <p className="text-[15px]">My Account</p>
                                    </div>
                                </button>
                                {account &&
                                    <div onClick={() => { setAccount(!account) }} className="flex flex-col gap-1 font-medium text-[15px] absolute mt-3 p-5  z-20 bg-[#1A1C1E] border  font-open-sans rounded-lg">
                                        <Link className="hover:text-[#B4976C] transition-all">Profile</Link>
                                        <Link className="hover:text-[#B4976C] transition-all">My orders</Link>
                                        <Link className="hover:text-[#B4976C] transition-all">Settings</Link>
                                        <p onClick={() => { logoutUser() }} className="hover:text-[#B4976C] transition-all cursor-pointer">Logout</p>
                                    </div>
                                }
                            </div>
                            :
                            <Link to={"/login"} className="hover:text-[#B4976C] active:scale-95 transition-all">LogIn</Link>
                        }
                    </div>
                </div>

                {/* nav for sm  */}
                {navSm ||
                    <div className="flex md:hidden flex-col md:gap-10 items-center justify-center gap-5">
                        <div onClick={() => { setNavSm(!navSm) }} className="font-inter flex md:flex-row flex-col  gap-2 md:gap-8">
                            <div className="flex justify-center items-end gap-2">
                                <Link to={'/'} className="hover:text-[#B4976C] active:scale-95 transition-all">Home</Link>
                            </div>
                            <div className="flex justify-center items-end gap-2">
                                <Link className="hover:text-[#B4976C] active:scale-95 transition-all">Shop</Link>
                                <IoIosArrowDown />
                            </div>
                            <div className="flex justify-center items-end gap-2">
                                <Link to={"/products"} className="hover:text-[#B4976C] active:scale-95 transition-all">Products</Link>
                                <IoIosArrowDown />
                            </div>
                            <div className="flex justify-center items-end gap-2">
                                <Link className="hover:text-[#B4976C] active:scale-95 transition-all">Pages</Link>
                                <IoIosArrowDown />
                            </div>
                            <div className="flex justify-center items-end gap-2">
                                <Link to={"#contact"} className="hover:text-[#B4976C] active:scale-95 transition-all">Contact</Link>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 ">
                            <button onClick={() => { setSearch(!search) }} className="hover:text-[#B4976C] active:scale-95 cursor-pointer transition-all text-2xl">
                                <FiSearch />
                            </button>
                            <button className="hover:text-[#B4976C] active:scale-95 cursor-pointer transition-all text-2xl">
                                <FaRegHeart />
                            </button>
                            <button className="hover:text-[#B4976C] active:scale-95 cursor-pointer transition-all text-2xl">
                                <BsCart3 />
                            </button>

                            <span className="border border-gray-400 mx-2"></span>

                            {user
                                ?
                                <div className="relative">
                                    <button onClick={() => { setAccount(!account) }} className="cursor-pointer active:scale-95 transition-all flex justify-center items-center gap-1">
                                        <img className="bg-gray-300 rounded-full h-10 w-10" src={user?.photoURL} alt="" />
                                        <div className="font-open-sans">
                                            <p className="text-xs text-gray-300">Hi, {user?.displayName}</p>
                                            <p className="text-[15px]">My Account</p>
                                        </div>
                                    </button>
                                    {account &&
                                        <div onClick={() => { setAccount(!account) }} className="flex flex-col gap-1 font-medium text-[15px] absolute mt-3 p-5  z-20 bg-[#1A1C1E] border  font-open-sans rounded-lg">
                                            <Link className="hover:text-[#B4976C] transition-all">Profile</Link>
                                            <Link className="hover:text-[#B4976C] transition-all">My orders</Link>
                                            <Link className="hover:text-[#B4976C] transition-all">Settings</Link>
                                            <p onClick={() => { logoutUser() }} className="hover:text-[#B4976C] transition-all cursor-pointer">Logout</p>
                                        </div>
                                    }
                                </div>
                                :
                                <Link to={"/login"} className="hover:text-[#B4976C] active:scale-95 transition-all">LogIn</Link>
                            }
                        </div>
                    </div>}
            </nav>


            {search && <div className="h-screen fixed z-10 w-full top-0">
                <div className="bg-gray-700 min-h-56 flex justify-center items-center ">
                    <div className="relative ">
                        <input type="text" className="border rounded-full px-10 md:w-xl py-4 " placeholder="Search Product Here" />
                        <button className="bg-[#B4976C] flex justify-center items-center gap-2 absolute cursor-pointer active:scale-95 transition-all font-medium hover:bg-gray-500 top-2 right-2 rounded-full py-2 px-5"><FiSearch />Search</button>
                    </div>
                    <button onClick={() => { setSearch(!search) }}>
                        <IoMdClose className="text-3xl rounded-full ml-3 border p-1 cursor-pointer" />
                    </button>
                </div>
            </div>
            }
        </div>
    )
}

export default Header