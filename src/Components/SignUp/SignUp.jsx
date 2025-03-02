import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const Signup = () => {
    const { user, createUser, loginGoogle } = useContext(AuthContext)
    console.log("User from signup", user);
    const navigate = useNavigate()
    const [showHidePass, setShowHidePass] = useState(false)
    const [success, setSuccess] = useState('')
    const [registerError, setRegisterError] = useState('')

    const hangleSubmit = (e) => {
        e.preventDefault()
        setSuccess("")
        setRegisterError("")
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("name email pass", name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully')
                e.target.reset()
                updateProfile(user, {
                    displayName: name,
                })
                    .then(() => {
                        console.log('updated');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });

                navigate("/")
            })
            .catch(error => {
                console.log(error.message);
                setRegisterError(error.message)
            })
    }

    const signupGoogleHandler = (e) => {
        setSuccess("")
        setRegisterError("")
        loginGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/")
                setSuccess('User Created Successfully')
                e.target.reset()
            })
            .catch(error => {
                console.log(error.message);
                setRegisterError(error.message)
            })
    }




    return (
        <div className="bg-[#333333] font-baloo-2 ">

            <div className="max-w-screen-2xl lg:mx-auto min-h-[80vh] flex justify-center items-center">

                <div className="bg-white text-black p-8 rounded-2xl min-w-96 shadow-2xl">
                    <form onSubmit={hangleSubmit}>
                        <h1 className="text-4xl font-bold mb-5">Create Account</h1>

                        <div className="flex flex-col gap-1 text-gray-500 text-lg">
                            <label htmlFor="" className="text-xl font-medium">Name and Surname</label>
                            <input type="text" name="name" placeholder="Enter your name and surname" className="px-4 py-2 rounded-md border-2" required />
                            <label htmlFor="" className="text-xl font-medium">Email Adress</label>
                            <input type="email" name="email" placeholder="Enter your email adress" className="px-4 py-2 rounded-md border-2" required />
                            {registerError && <p className="text-xs text-red-500">{registerError}</p>}
                            {success && <p className="text-xs text-emerald-500">{success}</p>}
                            <div className="grid gap-1 relative">
                                <label htmlFor="" className="text-xl font-medium">Password</label>
                                <input type={showHidePass ? "text" : "password"} name="password" placeholder="Enter your Password" className="px-4 py-2 rounded-md border-2" />
                                <p onClick={() => { setShowHidePass(!showHidePass) }} className="text-black absolute bottom-3 right-3 text-2xl cursor-pointer active:scale-95 transition-all">
                                    {showHidePass ? <FaRegEye /> : <FaEyeSlash />}
                                </p>
                            </div>
                            <div className="flex mt-2 justify-start items-center gap-1">
                                <input id="checkbox" type="checkbox" required />
                                <label htmlFor="checkbox">I agree with <a href="" className="text-orange-400">Terms</a>  and <a href="" className="text-orange-400">Privacy</a></label>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" value={"Sign Up"} className="border-2 w-full rounded-full cursor-pointer text-white bg-orange-500 py-2 text-xl mt-3 active:scale-95 hover:bg-transparent hover:text-orange-500 transition-all" />
                        </div>
                    </form>

                    <div className="text-center">
                        <h1 className="text-gray-400">or</h1>

                        <button onClick={signupGoogleHandler} className="border-2 w-full flex justify-center items-center rounded-full text-gray-500 text-lg  active:scale-95 cursor-pointer transition-all">
                            <img className="w-12 rounded-full" src="https://i.ibb.co.com/b2Dx62N/google-icon.jpg" alt="" />
                            Sign Up with Google
                        </button>

                        <h1 className="mt-2">Already have an account? <Link to={"/login"} className="text-orange-400 font-medium">Log in</Link></h1>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup