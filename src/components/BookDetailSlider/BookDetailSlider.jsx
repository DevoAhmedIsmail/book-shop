import React from "react";
import { Link } from "react-router-dom";
import "./BookDetailSlider.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const BookDetailSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const {books} = useSelector(state=> state.books)

  return (
    <Slider {...settings}>
   {
    books.map((book) =>(
      <div className="bookDetail-item flex items-center flex-wrap justify-center bg-gradient-to-r from-slate-300 to-slate-50 py-5 px-10 " key={book.id}>
      <div className="w-full md:w-1/4 ">
        <img
          src={book.image}
          alt="book"
          className="w-3/4 object-contain mx-auto rounded-lg shadow-xl shadow-cyan-100"
        />
      </div>
      <div className="w-full md:w-auto flex flex-col items-center md:items-start mt-5 md:mt-0">
        <p className="text-2xl">{book.title}</p>
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-xl mr-5 mt-3 md:mt-0">${book.price}</p>
          <span className="flex text-xl mr-3 py-3">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiOutlineStar />
          </span>
          <p className="text-lg">1,384 reviews</p>
        </div>
        <p>Author : {book.author}</p>
        <Link
          to={`/book/${book.id}`}
          className="py-2 px-10 text-cyan-600 border border-cyan-600 hover:bg-cyan-600 hover:text-white transition duration-300 rounded-full shadow-xl mt-5"
        >
          View Details
        </Link>
      </div>
    </div>
    ))
   }
    </Slider>
  );
};

export default BookDetailSlider;
