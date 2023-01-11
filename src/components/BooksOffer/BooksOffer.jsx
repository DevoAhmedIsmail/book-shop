import React from "react";
import { Link } from "react-router-dom";

const BooksOffer = () => {
  return (
    <>
      <div className="book-offer w-full md:w-1/3 lg:w-1/6 p-5">
        <Link to="/books/1">
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/51Y-6s1kcpL._SY346_.jpg"
              alt="book"
              className="w-full object-contain"
            />
            <div className="absolute top-0 left-0 bg-yellow-500 py-1 px-3 font-semibold text-slate-600">
              30% OFF
            </div>
          </div>
          <div className="pt-2">
            <div className="text-xl font-semibold">
              <span>The Crown</span>
              <p className="text-slate-500 text-sm">Kiera Cass</p>
              <p>
                <span className="text-slate-500 line-through	mr-5 text-sm">
                  $33.90
                </span>
                <span className="text-cyan-600">$22.22</span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="book-offer w-full md:w-1/3 lg:w-1/6 p-5">
        <Link to="/books/8">
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/412UEe3hvcL.jpg"
              alt="book"
              className="w-full object-contain"
            />
            <div className="absolute top-0 left-0 bg-yellow-500 py-1 px-3 font-semibold text-slate-600">
              25% OFF
            </div>
          </div>
          <div className="pt-2">
            <div className="text-xl font-semibold">
              Spare
              <p className="text-slate-500 text-sm">
                Prince Harry The Duke of Sussex
              </p>
              <p>
                <span className="text-slate-500 line-through	mr-5 text-sm">
                  $50.80
                </span>
                <span className="text-cyan-600">$38.10</span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="book-offer w-full md:w-1/3 lg:w-1/6 p-5">
        <Link to="/books/10">
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/51VC+Vru96L.jpg"
              alt="book"
              className="w-full object-contain"
            />
            <div className="absolute top-0 left-0 bg-yellow-500 py-1 px-3 font-semibold text-slate-600">
              20% OFF
            </div>
          </div>
          <div className="pt-2">
            <div className="text-xl font-semibold">
              It Starts with Us
              <p className="text-slate-500 text-sm">Colleen Hoover</p>
              <p>
                <span className="text-slate-500 line-through	mr-5 text-sm">
                  $19.99
                </span>
                <span className="text-cyan-600">$13.99</span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="book-offer w-full md:w-1/3 lg:w-1/6 p-5">
        <Link to="/books/6">
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/51otrCcMNmL.jpg"
              alt="book"
              className="w-full object-contain max-h-72"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 bg-yellow-500 py-1 px-3 font-semibold text-slate-600">
              20% OFF
            </div>
          </div>
          <div className="pt-2">
            <div className="text-xl font-semibold">
              Eternal Dominion
              <p className="text-slate-500 text-sm">Bern Dean</p>
              <p>
                <span className="text-slate-500 line-through	mr-5 text-sm">
                  $19.99
                </span>
                <span className="text-cyan-600">$13.99</span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="book-offer w-full md:w-1/3 lg:w-1/6 p-5">
        <Link to="/books/4">
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/51809zkrFiL.jpg"
              alt="book"
              className="w-full object-contain"
            />
            <div className="absolute top-0 left-0 bg-yellow-500 py-1 px-3 font-semibold text-slate-600">
              30% OFF
            </div>
          </div>
          <div className="pt-2">
            <div className="text-xl font-semibold">
              Long Shadows
              <p className="text-slate-500 text-sm">David Baldacci</p>
              <p>
                <span className="text-slate-500 line-through	mr-5 text-sm">
                  $18
                </span>
                <span className="text-cyan-600">$9.00</span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="book-offer w-full md:w-1/3 lg:w-1/6 p-5">
        <Link to="/books/2">
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/51lRERUVB2L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
              alt="book"
              className="w-full object-contain"
            />
            <div className="absolute top-0 left-0 bg-yellow-500 py-1 px-3 font-semibold text-slate-600">
              40% OFF
            </div>
          </div>
          <div className="pt-2">
            <div className="text-xl font-semibold">
              Beautiful Country
              <p className="text-slate-500 text-sm">Kiera Cass</p>
              <p>
                <span className="text-slate-500 line-through	mr-5 text-sm">
                  $22.99
                </span>
                <span className="text-cyan-600">$16.89</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BooksOffer;
