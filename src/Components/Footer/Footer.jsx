import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="contact" className="bg-[#121212] min-h-[60vh] px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="md:text-5xl text-xl font-semibold md:py-20 py-10 font-open-sans">Subscribe our Newsletter and get <br /> all of our update</h1>
          <div className="relative pb-10 md:pb-0">
            <input type="text" className="border rounded-full px-10 lg:w-md md:py-6 py-3" placeholder="Enter Email" />
            <button className="bg-[#B4976C] absolute top-2 right-2 active:scale-95 transition-all rounded-full md:py-4 py-1 cursor-pointer px-5">Submit Now</button>
          </div>
        </div>

        <hr />

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 md:py-20 py-10 font-inter" id="footer-manu">

          <div className="flex flex-col gap-2">
            <h1 className="text-gray-400 text-xl">Quick Links</h1>
            <Link className="hover:text-gray-400 transition-all" to={''}>Hae</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Review</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>About us</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Privacy Policy</Link>

          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-gray-400 text-xl">Quick Links</h1>
            <Link className="hover:text-gray-400 transition-all" to={''}>About us</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Blogs</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Single blog</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Register</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>FAQ&apos;s</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-gray-400 text-xl">Information</h1>
            <Link className="hover:text-gray-400 transition-all" to={''}>Terms & Conditions</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Privacy Policy</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Return Policy</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Payment</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Promotions</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Contact us</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-gray-400 text-xl">Company</h1>
            <Link className="hover:text-gray-400 transition-all" to={''}>My account</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>My Cart</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Wishlist</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Product Compare</Link>
            <Link className="hover:text-gray-400 transition-all" to={''}>Create account</Link>
          </div>

          <div  className="flex flex-col gap-2">
            <h1 className="text-gray-400 text-xl">Contact Info</h1>
            <p>70 Washington Square South, New York, NY 10012, United States</p>
            <p>+12345 678 910</p>
            <p>+12345 678 910</p>

            <div className="flex text-4xl mt-2 justify-between">
              <Link>
                <FaInstagram className="border rounded-full p-2 hover:text-gray-400 cursor-pointer hover:skew-6 duration-500 transition-all" />
              </Link>
              <Link>
                <FaFacebookF className="border rounded-full p-2 hover:text-gray-400 cursor-pointer hover:skew-6 duration-500 transition-all" />
              </Link>
              <Link>
                <FiYoutube className="border rounded-full p-2 hover:text-gray-400 cursor-pointer hover:skew-6 duration-500 transition-all" />
              </Link>
              <Link>
                <FaWhatsapp className="border rounded-full p-2 hover:text-gray-400 cursor-pointer hover:skew-6 duration-500 transition-all" />
              </Link>
              <Link>
                <FaPinterest className="border rounded-full p-2 hover:text-gray-400 cursor-pointer hover:skew-6 duration-500 transition-all" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 py-5 font-inter">
        <div className=" flex flex-col gap-2 lg:flex-row justify-between max-w-7xl mx-auto">
          <h1 className="">© 2025, Elexy Store By <a href="https://www.facebook.com/sujoydas36">Sujoy Das</a></h1>
          <div className="flex justify-between gap-2">
            <img className="cursor-pointer hover:rotate-6 transition-all" src="/assets/payment/paypal.svg" alt="" />
            <img className="cursor-pointer hover:rotate-6 transition-all" src="/assets/payment/download (11).svg" alt="" />
            <img className="cursor-pointer hover:rotate-6 transition-all" src="/assets/payment/download (12).svg" alt="" />
            <img className="cursor-pointer hover:rotate-6 transition-all" src="/assets/payment/download (14).svg" alt="" />
            <img className="cursor-pointer hover:rotate-6 transition-all" src="/assets/payment/download (15).svg" alt="" />
            <img className="cursor-pointer hover:rotate-6 transition-all" src="/assets/payment/download (16).svg" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer