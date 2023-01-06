import React from "react";
import {Link} from 'react-router-dom'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./BookSlider.css";

const BookSlider = ({ books }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {books.map((book) => (
        <Link to={`books/${book.id}`} key={book.id}>
        <div
          className="book-card h-100 flex flex-col justify-between items-start p-2 border border-slate-300"
          
        >
          <div className="h-60 w-full overflow-hidden">
            <img
              src={book.image}
              alt="book"
              className="object-contain w-full h-full hover:scale-110 transition duration-300"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-lg font-semibold">{book.title}</p>
            <span className="text-slate-300 text-sm block">{book.author}</span>
          </div>
          <button className="price-btn text-cyan-500 rounded-lg border border-cyan-500 justify-self-end">
            ${book.price}
          </button>
        </div>
          </Link>
      ))}
    </Slider>
  );
};

export default BookSlider;
