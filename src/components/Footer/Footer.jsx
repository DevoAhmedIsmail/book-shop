import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import {
  AiOutlineInfoCircle,
  AiOutlineShareAlt,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImCompass2 } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-gray-200 py-10 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row mx-5 md:mx-0">
          {/* List 1 */}
          <div className="w-full md:w-1/4 px-3 opacity-90 mt-8 md:mt-0">
            <p className="text-2xl text-gray-300 opacity-80 mb-3">
              <FiBook className="inline-block mr-3" />
              <span className="uppercase">BookShop</span>
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eius nam quidem ab dolor vitae libero?
            </p>
            <Link className="underline">Learn More About Us</Link>
          </div>
          {/* List 2 */}
          <div className="w-full md:w-1/4 px-3 mt-8 md:mt-0">
            <p className="text-xl flex items-center mb-3">
              <ImCompass2 className="inline-block mr-3" />
              <span className="uppercase">Our Main office</span>
            </p>

            <p>San Francisco, California, US</p>
            <p>P.O BOX: 553204</p>
            <p>Phone: (+1)998 3384</p>
            <p>Mail: admin@bookshop.com</p>
          </div>
          {/* List 3 */}
          <div className="w-full md:w-1/4 px-3 mt-8 md:mt-0">
            <p className="text-xl mb-3">
              <AiOutlineShareAlt className="inline-block mr-3" />
              <span className="uppercase">keep in touch with us</span>
            </p>
            <div className="space-y-3">
              <Link to="/" className="flex flex-row items-center">
                <BsFacebook className="inline-block text-xl mr-3" />
                <span>Facebook</span>
              </Link>
              <Link to="/" className="flex flex-row items-center">
                <AiFillTwitterCircle className="inline-block text-2xl mr-3" />
                <span>Twitter</span>
              </Link>
              <Link to="/" className="flex flex-row items-center">
                <AiFillInstagram className="inline-block text-2xl m-0 mr-3" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
          {/* List 4 */}
          <div className="w-full md:w-1/4 px-3 mt-8 md:mt-0">
            <p className="text-xl mb-3">
              <AiOutlineInfoCircle className="inline-block mr-3" />
              <span className="uppercase">Information</span>
            </p>
            <div className="flex flex-row text-sm space-x-5">
              <div className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="hover:translate-x-2 transition duration-300"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="hover:translate-x-2 transition duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/"
                  className="hover:translate-x-2 transition duration-300"
                >
                  FAQ
                </Link>
              </div>
              <div className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="hover:translate-x-2 transition duration-300"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/"
                  className="hover:translate-x-2 transition duration-300"
                >
                  My Account
                </Link>
                <Link
                  to="/"
                  className="hover:translate-x-2 transition duration-300"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          Copyright &copy; 2023. Coded By <span className="ml-1 text-green-400 font-semibold tracking-wider">Ahmed Ismail</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
