import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";

import "./Books.css";

// Icons
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";

const Books = () => {
  const [BOOKS, setBOOKS] = useState([]);
  const [rangePrice, setRangePrice] = useState(100);
  const [priceQuery, setPriceQuery] = useState(null);
  const [categoryQuery, setCategoryQuery] = useState("all");
  const [formatQuery, setFormatQuery] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState("grid");

  const { books } = useSelector((state) => state.books);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const navigate = useNavigate();

  const rangeHandler = () => {
    navigate(
      `/books?category=${categoryQuery}&format=${formatQuery}&price=${rangePrice}`
    );
  };

  // let URL = `/books?category=${categoryQuery}&format=${formatQuery}&price=${rangePrice}`;
  // console.log(URL);

  // console.log(sortBy);
  // console.log(view);

  useEffect(() => {
    setBOOKS(books);
    setPriceQuery(searchQuery.get("priceRange"));
    setCategoryQuery(searchQuery.get("category") || "all");
    setFormatQuery(searchQuery.get("format") || "all");
  }, [books, formatQuery, categoryQuery, priceQuery, searchQuery]);

  return (
    <main className="books-store">
      <div className="container mx-auto">
        <div className="flex flex-row">
          {/* Side Menu */}
          <div className="hidden md:block md:w-1/4 side-menu">
            {/* Category */}
            <p className="text-xl text-slate-600 font-semibold">
              Shop by Category
            </p>
            <div className="flex flex-col gap-3 mt-5 px-5">
              <Link
                to={`?category=all&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold active"
              >
                All Genre
              </Link>
              <Link
                to={`?category=Art-Photography&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Art & Photography
              </Link>
              <Link
                to={`?category=Biographies-Memoirs&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Biographies & Memoirs
              </Link>
              <Link
                to={`?category=ChildrensBooks&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Children's Books
              </Link>
              <Link
                to={`?category=Cookbook-Food&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Cookbook & Food
              </Link>
              <Link
                to={`?category=History&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                History
              </Link>
              <Link
                to={`?category=Literature-Fiction&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Literature & Fiction
              </Link>
              <Link
                to={`?category=Mystery-Suspense&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Mystery & Suspense
              </Link>
              <Link
                to={`?category=Romance&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Romance
              </Link>
              <Link
                to={`?category=Sci-Fi-Fantasy&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Sci-Fi & Fantasy
              </Link>
              <Link
                to={`?category=Teen&YoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className="text-slate-500 font-semibold"
              >
                Teen & Young Adult
              </Link>
            </div>
            {/* ./Category */}

            {/* Book Format */}
            <div className="book-format mt-10">
              <p className="text-xl text-slate-600 font-semibold">
                Book Format
              </p>
              <div className="flex flex-col gap-3 mt-5 px-5">
                <Link
                  to={`?category=${categoryQuery}&format=all&price=${rangePrice}`}
                  className="text-slate-500 font-semibold active"
                >
                  All Format
                </Link>
                <Link
                  to={`?category=${categoryQuery}&format=Hardcover&price=${rangePrice}`}
                  className="text-slate-500 font-semibold"
                >
                  Hardcover
                </Link>
                <Link
                  to={`?category=${categoryQuery}&format=Paperback&price=${rangePrice}`}
                  className="text-slate-500 font-semibold"
                >
                  Paperback
                </Link>
                <Link
                  to={`?category=${categoryQuery}&format=ElectronicBook&price=${rangePrice}`}
                  className="text-slate-500 font-semibold"
                >
                  Electronic Book
                </Link>
                <Link
                  to={`?category=${categoryQuery}&format=LargePrint&price=${rangePrice}`}
                  className="text-slate-500 font-semibold"
                >
                  Large Print
                </Link>
              </div>
            </div>
            {/* ./Book Format */}

            {/* Price Range */}
            <div className="book-price mt-10">
              <p className="text-xl text-slate-600 font-semibold">
                Price Range
              </p>
              <div className="flex">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={rangePrice}
                  onChange={(e) => setRangePrice(e.target.value)}
                  onMouseUp={(e) => rangeHandler(e)}
                />
                <p className="text-sm ml-3 text-slate-400 font-bold">
                  {rangePrice}$
                </p>
              </div>
            </div>
            {/* ./Price Range */}
          </div>
          {/* ./Side Menu */}
          <div className="w-full md:w-3/4">
            {/* Sort */}
            <div className="sort-container flex flex-row justify-between items-center mt-5">
              <div className="flex flex-row gap-3 text-xl ">
                <p className="font-semibold">Sort by</p>
                <select
                  className="text-slate-400 border-0 outline-0 cursor-pointer"
                  onChange={(e) => setSortBy(e.target.value)}
                  defaultValue={sortBy}
                >
                  <option value="newest">Newest items</option>
                  <option value="oldest">oldest items</option>
                  <option value="highest">high price</option>
                  <option value="lowest">low price</option>
                </select>
              </div>
              <div className="flex gap-5 text-2xl ">
                <TfiLayoutGrid3
                  className={`cursor-pointer ${
                    view === "grid" ? "text-slate-700" : " text-slate-400"
                  }`}
                  onClick={() => setView("grid")}
                />
                <FaListUl
                  className={`cursor-pointer ${
                    view === "list" ? "text-slate-700" : " text-slate-400"
                  }`}
                  onClick={() => setView("list")}
                />
              </div>
            </div>
            {/* ./Sort */}

            {/* Books */}
            <div className={`book-container flex flex-col flex-wrap ${view === 'list' ? 'flex-col' : ' md:flex-row '} py-5 `}>
              {BOOKS.map((BOOK) => (
                <Link to={`/books/${BOOK.id}`} key={BOOK.id} className={`book-card w-full  px-3 mt-5  hover:border ${view === 'list' ? 'w-full' :'md:w-1/3 group'}`}>
                <div className={`${view === 'list' && 'flex flex-row'}`}>
                  <div className={`image-container ${view ==='list' ? 'h-64 w-2/12' : 'h-100 w-full' }`}>
                    <img src={BOOK.image} alt={BOOK.title} className="w-full h-full" />
                  </div>
                  <div className={`card-body py-2 ${view === 'list' && 'w-10/12'} `}>
                    <h2 className="text-xl font-semibold text-slate-700 group-hover:text-center">{BOOK.title}</h2>
                    <p className="text-sm text-slate-500 group-hover:hidden">{BOOK.author}</p>
                    <p className="font-semibold text-lg mt-2 group-hover:hidden">${BOOK.price}</p>
                    <div className={`flex flex-row mt-2 md:mt-0 gap-3 group-hover:hidden ${view === 'list'}`}>
                      <p className="flex flex-row items-center">
                        <AiTwotoneStar className="text-yellow-400 text-lg" />
                        <AiTwotoneStar className="text-yellow-400 text-lg" />
                        <AiTwotoneStar className="text-yellow-400 text-lg" />
                        <AiTwotoneStar className="text-yellow-400 text-lg" />
                        <AiTwotoneStar className="text-yellow-400 text-lg" />
                      </p>
                      <p className=" text-slate-400">368 reviews</p>
                    </div>
                    <div className={`${view !== "list" && 'hidden'}  h-16 overflow-hidden text-sm text-slate-500`}>
                      <p>{BOOK.description}</p>
                    </div>
                    <button className={`${view === 'list' ? '' : 'hidden group-hover:block'}  bg-cyan-500 text-slate-50 rounded-full py-2 px-5 mt-3 mx-auto uppercase font-semibold tracking-wider z-50`}>Add To Cart</button>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Books;
