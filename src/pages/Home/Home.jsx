import React from "react";
import Header from "./Header/Header";
import "./Home.css";
import { useSelector } from "react-redux";

import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaShippingFast, FaMoneyCheckAlt } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";

import BookSlider from "../../components/BooksSlider/BookSlider";
import BookDetailSlider from "../../components/BookDetailSlider/BookDetailSlider";
import LimitedTime from "../../components/LimitedTime/LimitedTime";
import BooksOffer from "../../components/BooksOffer/BooksOffer";

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
          <LimitedTime endDay="3" />
        </div>
        {/* Books Offers */}
        <div className="books-offers flex flex-col md:flex-row flex-wrap mt-5">
          <BooksOffer />
        </div>

        {/* ./Books Offers */}
      </section>
      {/* ./Limited Offer */}
    </main>
  );
};

export default Home;
