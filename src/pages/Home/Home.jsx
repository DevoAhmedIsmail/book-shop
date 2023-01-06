import React from "react";
import Header from "./Header/Header";
import "./Home.css";
import { useSelector } from "react-redux";

import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaShippingFast, FaMoneyCheckAlt } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { HiOutlineUsers } from "react-icons/hi";
import { BsFillPinMapFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";


import BookSlider from "../../components/BooksSlider/BookSlider";
import BookDetailSlider from "../../components/BookDetailSlider/BookDetailSlider";
import LimitedTime from "../../components/LimitedTime/LimitedTime";
import BooksOffer from "../../components/BooksOffer/BooksOffer";

// Images
import latestNewsImg1 from "../../assets/images/latest-news-1.jpg";
import latestNewsImg2 from "../../assets/images/latest-news-2.jpg";
import latestNewsImg3 from "../../assets/images/latest-news-3.jpg";
import HappyCustomer from "../../components/HappyCustomer/HappyCustomer";

const Home = () => {
  const { books } = useSelector((state) => {
    return state.books;
  });

  return (
    <main className="home overflow-hidden">
      {/* Header */}
      <Header />
      {/* ./Header */}
      {/* SubHeader */}
      <section className="header-features bg-gray-100 shadow-xl px-5">
        <div className="container mx-auto">
          <div className="flex flex-col flex-wrap items-center divide-y-2 md:flex-row md:items-start md:divide-x-2 ">
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-row items-center space-x-5 text-cyan-600 py-10 pl-2">
              <FaShippingFast className="text-5xl" />
              <div className="flex flex-col">
                <p className="text-xl font-bold">Quick Delivery</p>
                <span className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
                  nihil.
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-row items-center space-x-5 text-cyan-600 py-10 pl-2">
              <FaMoneyCheckAlt className="text-5xl" />
              <div className="flex flex-col">
                <p className="text-xl font-bold">Pay With Easy</p>
                <span className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
                  delectus!
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-row items-center space-x-5 text-cyan-600 py-10 pl-2">
              <ImPriceTag className="text-5xl" />
              <div className="flex flex-col">
                <p className="text-xl font-bold">Best Deal</p>
                <span className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, illum!
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-row items-center space-x-5 text-cyan-600 py-10 pl-2">
              <AiOutlineSafetyCertificate className="text-5xl" />
              <div className="flex flex-col">
                <p className="text-xl font-bold">Secured Payment</p>
                <span className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, eum!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./SubHeader */}

      {/* Best Sellers */}
      <section className="container mx-auto py-10 px-3">
        <h3 className="slider-title text-2xl pb-2 font-bold tracking-wider mb-7 relative">
          Current BestSellers
        </h3>
        <BookSlider books={books} />
      </section>
      {/* ./Best Sellers */}

      {/* Top Rated */}
      <section className="container mx-auto pb-10 px-3">
        <h3 className="slider-title text-2xl pb-2 font-bold tracking-wider mb-7 relative">
          Top Rated Books
        </h3>
        <BookSlider books={books} />
      </section>
      {/* ./Top Rated */}

      {/* Book Slider */}
      <section className="container mx-auto">
        <BookDetailSlider />
      </section>
      {/* ./Book Slider */}

      {/* Limited Offer */}
      <section className="limited-offer py-10">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center text-slate-700 font-semibold uppercase">
            Limited Time Offer
          </h1>
          <LimitedTime endDay="10" />
        </div>
        {/* Books Offers */}
        <div className="books-offers flex flex-col md:flex-row flex-wrap mt-5">
          <BooksOffer />
        </div>

        {/* ./Books Offers */}
      </section>
      {/* ./Limited Offer */}

      {/* Latest news */}
      <section className="latest-news bg-gray-200 py-10">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold uppercase text-slate-600 mb-10">
            Our Latest News
          </h2>
          <div className="wrapper flex flex-col md:flex-row gap-5 mx-5 md:mx-0">
            {/* Card */}
            <div className="card w-full md:w-1/3 bg-slate-50 shadow-lg rounded-md">
              <div className="h-48 w-full overflow-hidden rounded-t-md">
                <img
                  src={latestNewsImg1}
                  alt="woman"
                  className="h-full w-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-slate-500 text-sm">August 8, 2022</span>
                <p className="text-xl font-semibold">
                  Benefits of Reading: Getting Smart, Thin, Healthy, Happy
                </p>
                <p className="text-slate-500 text-sm py-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  ipsum deleniti quisquam porro totam necessitatibus!
                </p>
                <p className="text-cyan-500 uppercase font-semibold cursor-pointer">
                  Continue Reading
                </p>
              </div>
            </div>
            {/* ./Card */}

            {/* Card */}
            <div className="card w-full md:w-1/3 bg-slate-50 shadow-lg rounded-md">
              <div className="h-48 w-full overflow-hidden rounded-t-md">
                <img
                  src={latestNewsImg3}
                  alt="people"
                  className="h-full w-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-slate-500 text-sm">October 6, 2022</span>
                <p className="text-xl font-semibold">
                  8 Science-Backed Reasons to Read a (Real) Book
                </p>
                <p className="text-slate-500 text-sm py-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor minus atque rerum architecto maxime quibusdam!
                </p>
                <p className="text-cyan-500 uppercase font-semibold cursor-pointer">
                  Continue Reading
                </p>
              </div>
            </div>
            {/* ./Card */}

            {/* Card */}
            <div className="card w-full md:w-1/3 bg-slate-50 shadow-lg rounded-md">
              <div className="h-48 w-full overflow-hidden rounded-t-md">
                <img
                  src={latestNewsImg2}
                  alt="children"
                  className="h-full w-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-slate-500 text-sm">August 8, 2022</span>
                <p className="text-xl font-semibold">
                  Why Reading is Important for Our Children
                </p>
                <p className="text-slate-500 text-sm py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, eius veritatis aut laboriosam consectetur aspernatur.
                </p>
                <p className="text-cyan-500 uppercase font-semibold cursor-pointer">
                  Continue Reading
                </p>
              </div>
            </div>
            {/* ./Card */}
          </div>
          <div className="w-full  mt-10 px-5 md:px-0">
            <button className="w-full border border-cyan-500 text-cyan-500 uppercase py-5 font-semibold hover:bg-cyan-500 hover:text-slate-50 transition duration-300">
              View All News
            </button>
          </div>
        </div>
      </section>
      {/* ./Latest news */}

      {/* Happy Customer */}
      <section className="happy-customer py-10">
        <h1 className="text-center text-2xl font-semibold text-slate-600 uppercase">
          Our Happy Customers
        </h1>
        <HappyCustomer />
      </section>
      {/* ./Happy Customer */}

      {/* Explore Video */}
      <section className="explore-video relative h-96 w-full bg-red-400 flex justify-center items-center overflow-hidden">
        <div className="uppercase z-50 text-slate-50 text-4xl font-semibold text-center">
          Explore Our New Library
        </div>

        <div className="absolute top-0 left-0 bottom-0 right-0 min-w-full min-h-full ">
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            className="min-w-full min-h-full"
          >
            <source
              src="https://media.istockphoto.com/id/1207745492/video/stedicam-shot-camera-moves-forward-along-shelves-filled-with-paper-books-the-huge-round.mp4?s=mp4-640x640-is&k=20&c=-7kpTeGC4T7LphcRat1Vo7ktnLWI_DNdt-1lo1FnXVk="
              type="video/mp4"
                className="min-w-full min-h-full"
            />
          </video>
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-blue-400 opacity-75"></div>
      </section>
      {/* ./Explore Video */}

    {/* numbers */}
      <section className="numbers py-10 px-5 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
          {/* card */}
            <div className="card w-full md:w-1/3 border border-gray-300 bg-gray-200 text-cyan-500 flex flex-col justify-center items-center py-16 px-24 space-y-2">
              <HiOutlineUsers className="text-4xl" />
              <p className="text-3xl font-bold">138,098</p>
              <p className="text-lg">Happy Customers</p>
            </div>

            {/* card */}
            <div className="card w-full md:w-1/3 border border-gray-300 bg-gray-200 text-cyan-500 flex flex-col justify-center items-center py-16 px-24 space-y-2">
              <GiBookshelf className="text-4xl" />
              <p className="text-3xl font-bold">30,000K</p>
              <p className="text-lg">Book Collections</p>
            </div>

            {/* card */}
            <div className="card w-full md:w-1/3 border border-gray-300 bg-gray-200 text-cyan-500 flex flex-col justify-center items-center py-16 px-24 space-y-2">
              <BsFillPinMapFill className="text-4xl  text-cyan-500 " />
              <p className="text-3xl font-bold">1,269</p>
              <p className="text-lg text-center">Our Store Around the World</p>
            </div>
          </div>
        </div>
      </section>
    {/* ./numbers */}

    {/* Subscribe */}
    <section className="subscribe py-10">
      <div className="container mx-auto">
        <div className="text-center border border-cyan-300 py-10 bg-slate-200 rounded-lg mx-5  md:mx-0">
          <p className="uppercase text-slate-800 font-bold text-xl mb-5">get special offer in your inbox</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-5">
            <input type='text' className=" w-80 md:w-96 px-3 py-2 border rounded-full" placeholder="enter your E-mail address here" />
            <button className="bg-cyan-500 border-cyan-500 shadow-lg shadow-cyan-600  font-semibold rounded-full py-2 px-10 text-slate-50 mt-5 md:mt-0">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </section>
    {/* ./Subscribe */}

    </main>
  );
};

export default Home;
