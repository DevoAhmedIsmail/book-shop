import React from 'react'
import "./Header.css";

import headerImg from "../../../assets/images/main-header.svg";

const Header = () => {
  return (
    <header className="relative -mt-16">
        <div className="overlay"></div>
        <div className="flex flex-col md:flex-row z-10 relative pt-20 md:pt-32">
          <div className="w-full md:w-1/2">
            <div className="w-full h-96">
              <img src={headerImg} alt="girl" className="w-full h-full" />
            </div>
          </div>
          <div className="w-full md:w-1/2 uppercase flex flex-col justify-center items-center md:items-start">
            <p className="text-sky-500 text-xl font-medium">Back to School</p>
            <h2 className="text-4xl md:text-5xl font-extrabold my-5 text-center">
              Special <span className="text-sky-500">50% OFF</span>
            </h2>
            <p className="text-xl">For Our student community</p>
            <button className="bg-sky-500 text-slate-50 py-3 px-10 rounded-full uppercase shadow-lg shadow-sky-700 mt-10 font-semibold tracking-wide hover:bg-slate-50 hover:text-sky-500 transition duration-300">
              Get The deal
            </button>
          </div>
        </div>
      </header>
  )
}

export default Header
