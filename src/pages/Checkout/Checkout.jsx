import React from "react";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import { BsCreditCardFill, BsPaypal } from "react-icons/bs";
import { TbExchange } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {updateCart} from '../../State/cartSlice'

const Checkout = () => {

const navigate = useNavigate()
const dispatch = useDispatch()

const checkoutHandler = ()=>{
    dispatch(updateCart([]))
    navigate('/')
}
    
  return (
    <main className="checkout">
      <HeaderContent text="billing information" />

      {/* Container */}
      <div className="container mx-auto">
        <div className="flex flex-col justify-between lg:flex-row py-10 px-16">
          {/* Left Side */}
          <div className="py-5 w-full lg:w-5/12">
            <div className="checkout-header flex items-center border-b border-gray-600 pb-4">
              <p className="text-gray-700 font-semibold uppercase text-lg tracking-wider">
                Buyer info
              </p>
              <p className="text-sm text-gray-500 ml-5">
                Returning User? <span className="underline">Log in here</span>
              </p>
            </div>
            {/* Forms */}
            <div className="flex flex-col gap-7 mt-8">
              <div className="flex flex-col">
                <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                  Full name
                </label>
                <input className="border-2 border-gray-300 py-2 rounded" />
              </div>
              <div className="flex flex-col">
                <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                  Address 1
                </label>
                <input className="border-2 border-gray-300 py-2 rounded" />
              </div>
              <div className="flex flex-col">
                <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                  Address 2
                </label>
                <input className="border-2 border-gray-300 py-2 rounded" />
              </div>
              <div className="flex flex-col">
                <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                  city
                </label>
                <input className="border-2 border-gray-300 py-2 rounded" />
              </div>
              <div className="flex flex-row gap-16">
                <div className="flex flex-col w-1/2">
                  <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                    State
                  </label>
                  <select className="border-2 border-gray-300 py-2 px-3 rounded">
                    <option>Select State</option>
                    <option>Alexandria</option>
                    <option>Aswan</option>
                    <option>Cairo</option>
                    <option>Luxor</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2">
                  <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                    Zip code
                  </label>
                  <input className="border-2 border-gray-300 py-2  rounded" />
                </div>
              </div>
            </div>
          </div>
          {/* ./Left Side */}
          {/* Right Side */}
          <div className="py-5 w-full lg:w-5/12">
            <div className="checkout-header flex items-center border-b border-gray-600 pb-4">
              <p className="text-gray-700 font-semibold uppercase text-lg tracking-wider">
                Payment method
              </p>
            </div>
            <div>
              <div className="flex flex-row gap-5 mt-5">
                <div className="bg-cyan-600 text-white rounded flex flex-col justify-center items-center w-28 h-28 cursor-pointer">
                  <BsCreditCardFill
                    className="inline-block"
                    style={{ fontSize: "40px" }}
                  />
                  <p className="text-sm text-center">
                    Credit <br />
                    Card
                  </p>
                </div>
                <div className="bg-gray-200 text-gray-500 rounded flex flex-col justify-center items-center w-28 h-28 cursor-pointer">
                  <TbExchange
                    className="inline-block"
                    style={{ fontSize: "40px" }}
                  />
                  <p className="text-sm text-center">
                    Bank <br />
                    Transfer
                  </p>
                </div>
                <div className="bg-gray-200 text-gray-500 rounded flex flex-col justify-center items-center w-28 h-28 cursor-pointer">
                  <BsPaypal
                    className="inline-block"
                    style={{ fontSize: "40px" }}
                  />
                  <p className="text-sm">PayPal</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <div className="flex flex-col">
                <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                  Name on card
                </label>
                <input className="border-2 border-gray-300 py-2 rounded" />
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col w-3/4">
                  <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                    card number
                  </label>
                  <input
                    className="border-2 border-gray-300 py-2 rounded px-5 placeholder:text-gray-300 placeholder:tracking-widest"
                    placeholder="0000-0000-0000-0000"
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                    ccv
                  </label>
                  <input className="border-2 border-gray-300 py-2 rounded" />
                </div>
              </div>
              <div className="flex flex-row gap-16">
                  <div className="flex flex-col w-1/2">
                    <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                      Month
                    </label>
                    <select className="border-2 border-gray-300 py-2 px-3 rounded">
                      <option>Select Month</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label className=" uppercase font-semibold text-gray-500 text-sm mb-3">
                      Year
                    </label>
                    <select className="border-2 border-gray-300 py-2 px-3 rounded">
                      <option>Select Year</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                    </select>
                  </div>
                </div>
                <button className="uppercase text-gray-100 bg-cyan-600 shadow-lg shadow-cyan-600 rounded-full py-3 px-16 self-end font-semibold tracking-wider" onClick={checkoutHandler}>Place order</button>
            </div>
          </div>
          {/* ./Right Side */}
        </div>
      </div>
      {/* ./Container */}
    </main>
  );
};

export default Checkout;
