import { Link } from "react-router-dom"
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";

const Login = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-4xl mb-4 font-semibold text-center">Log In</h1>
                    <div className="flex justify-center items-center gap-1">
                        <Link className="flex justify-center items-center gap-1"><IoMdHome /> Home</Link>
                        <p>/</p>
                        <Link>Log In</Link>
                    </div>
                </div>
            </div>
            <div className="w-7xl flex justify-center items-center mx-auto py-20">
                <div className="border">
                    <h1 className="text-3xl">Log in</h1>
                    <p>or <Link>create an a account</Link></p>
                    <form>
                        <div>
                            <MdOutlineMarkEmailRead />
                            <input type="email" placeholder="Enter your name" />
                        </div>
                        <div>
                            <RiLockPasswordLine />
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <input type="submit" value={'Continue'} />
                        <p>By creating an account, I accept the <span>Terms & Conditions & Privacy Policy</span> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login