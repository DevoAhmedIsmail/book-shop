import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import "./Books.css";

// Icons
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FaListUl, FaFilter } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";

const Books = () => {
  const [BOOKS, setBOOKS] = useState([]);
  const [rangePrice, setRangePrice] = useState(100);
  const [priceQuery, setPriceQuery] = useState(null);
  const [categoryQuery, setCategoryQuery] = useState("all");
  const [formatQuery, setFormatQuery] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState("grid");
  const [showSidebar, setShowSidebar] = useState(false);

  const { books } = useSelector((state) => state.books);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const boxRef = useRef(null);
  const navigate = useNavigate();

  const rangeHandler = () => {
    navigate(
      `/books?category=${categoryQuery}&format=${formatQuery}&price=${rangePrice}`
    );
  };

  const openSideBar = () => {
    document.body.style.overflow = "hidden";
    setShowSidebar(true);
  };

  const closeSideBar = () => {
    document.body.style.overflow = "auto";
    setShowSidebar(false);
  };

  const globalFilter = () => {
    let bookScobe = [];

    // Sort
    if (categoryQuery !== "all") {
      let prevBooks = [...books];
      let booksARR = prevBooks.filter(
        (item) => item.category === categoryQuery
      );
      bookScobe = booksARR;
    } else {
      bookScobe = books;
    }

    // Price
    let booksARR = bookScobe.filter((item) => item.price < rangePrice);
    bookScobe = booksARR;

    // Filter
    switch (sortBy) {
      case "newest":
        let bookARR1 = [...bookScobe];
        function compare1(a, b) {
          let comparison = 0;
          if (a.title > b.title) {
            comparison = 1;
          } else if (a.title < b.title) {
            comparison = -1;
          }
          return comparison;
        }

        return setBOOKS(bookARR1.sort(compare1));

      case "oldest":
        let bookARR2 = [...bookScobe];
        function compare2(a, b) {
          let comparison = 0;
          if (a.title > b.title) {
            comparison = 1;
          } else if (a.title < b.title) {
            comparison = -1;
          }
          return comparison * -1;
        }

        return setBOOKS(bookARR2.sort(compare2));

      case "highest":
        let bookARR3 = [...bookScobe];
        function compare3(a, b) {
          let comparison = 0;
          if (a.price > b.price) {
            comparison = 1;
          } else if (a.price < b.price) {
            comparison = -1;
          }
          return comparison * -1;
        }

        return setBOOKS(bookARR3.sort(compare3));

      case "lowest":
        let bookARR4 = [...bookScobe];
        function compare4(a, b) {
          let comparison = 0;
          if (a.price > b.price) {
            comparison = 1;
          } else if (a.price < b.price) {
            comparison = -1;
          }
          return comparison;
        }

        return setBOOKS(bookARR4.sort(compare4));
      default:
        setBOOKS(BOOKS);
        break;
    }
  };

  
  useEffect(() => {
  // to scroll up when open
  window.scrollTo(0, 0);
  
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        closeSideBar();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    setBOOKS(books);
    setPriceQuery(searchQuery.get("priceRange"));
    setCategoryQuery(searchQuery.get("category") || "all");
    setFormatQuery(searchQuery.get("format") || "all");

    globalFilter();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [books, formatQuery, categoryQuery, priceQuery, searchQuery, sortBy]);

  return (
    <main className="books-store relative">
      <div className="container mx-auto">
        <div className="flex flex-row">
          {/* Side Menu */}
          <div
            className={`side-menu relative bg-white w-64 lg:block lg:w-1/4 px-3 py-10 lg:py-5 lg:px-0 ${
              showSidebar && "show"
            }`}
            ref={boxRef}
          >
            <div className="absolute top-3 right-3 block lg:hidden">
              <button
                className="text-red-500 cursor-pointer text-xl font-bold"
                onClick={closeSideBar}
              >
                X
              </button>
            </div>
            {/* Category */}
            <p className="text-xl text-slate-600 font-semibold">
              Shop by Category
            </p>
            <div className="flex flex-col gap-3 mt-5 px-5">
              <Link
                to={`?category=all&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'all' && 'active'}`}
              >
                All Genre
              </Link>
              <Link
                to={`?category=Art-Photography&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'Art-Photography' && 'active'}`}
              >
                Art & Photography
              </Link>
              <Link
                to={`?category=Biographies-Memoirs&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'Biographies-Memoirs' && 'active'}`}
              >
                Biographies & Memoirs
              </Link>
              <Link
                to={`?category=ChildrensBooks&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'ChildrensBooks' && 'active'}`}
              >
                Children's Books
              </Link>
              <Link
                to={`?category=Cookbook-Food&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'Cookbook-Food' && 'active'}`}
              >
                Cookbook & Food
              </Link>
              <Link
                to={`?category=History&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'History' && 'active'}`}
              >
                History
              </Link>
              <Link
                to={`?category=Literature-Fiction&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'Literature-Fiction' && 'active'}`}
              >
                Literature & Fiction
              </Link>
              <Link
                to={`?category=Mystery-Suspense&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'Mystery-Suspense' && 'active'}`}
              >
                Mystery & Suspense
              </Link>
              <Link
                to={`?category=Romance&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'Romance' && 'active'}`}
              >
                Romance
              </Link>
              <Link
                to={`?category=Sci-Fi-Fantasy&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'Sci-Fi-Fantasy' && 'active'}`}
              >
                Sci-Fi & Fantasy
              </Link>
              <Link
                to={`?category=TeenYoungAdult&format=${formatQuery}&price=${rangePrice}`}
                className={`text-slate-500 font-semibold ${categoryQuery === 'TeenYoungAdult' && 'active'}`}
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

          <div className="w-full lg:w-3/4">
            {/* Sort */}
            <div className="sort-container flex flex-row justify-between items-center mt-5 px-5 md:px-0">
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

            <div
              className="lg:hidden flex flex-row justify-end items-center text-cyan-600 mt-5 px-5"
              onClick={openSideBar}
            >
              Filter <FaFilter />
            </div>

            {/* Books */}
            <div
              className={`book-container flex flex-col flex-wrap ${
                view === "list" ? "flex-col" : " md:flex-row px-5"
              } py-5 `}
            >
              {Object.values(BOOKS).length ? (
                BOOKS.map((BOOK) => (
                  <Link
                    to={`/books/${BOOK.id}`}
                    key={BOOK.id}
                    className={`book-card w-full pl-0 md:pl-3 mt-5  hover:border ${
                      view === "list"
                        ? "w-full"
                        : "md:w-1/3 group py-3 md:py-0 "
                    }`}
                  >
                    <div className={`${view === "list" && "flex flex-row"}`}>
                      <div
                        className={`image-container ${
                          view === "list"
                            ? "h-64 w-5/12 md:w-2/12"
                            : "h-100 w-full"
                        }`}
                      >
                        <img
                          src={BOOK.image}
                          alt={BOOK.title}
                          className={`w-full h-full ${
                            view === "list"
                              ? "object-contain"
                              : "object-contain md:object-cover"
                          } `}
                        />
                      </div>
                      <div
                        className={`card-body py-2 ${
                          view === "list"
                            ? "w-7/12 md:w-10/12 px-5"
                            : "w-full flex flex-col justify-center items-center md:block"
                        } `}
                      >
                        <h2 className="text-xl font-semibold text-slate-700 group-hover:text-center">
                          {BOOK.title}
                        </h2>
                        <p className="text-sm text-slate-500 group-hover:hidden">
                          {BOOK.author}
                        </p>
                        <p className="font-semibold text-lg mt-2 group-hover:hidden">
                          ${BOOK.price}
                        </p>
                        <div
                          className={`flex flex-row mt-2 md:mt-0 gap-3 group-hover:hidden ${
                            view === "list" && ""
                          }`}
                        >
                          <p className="flex flex-row items-center">
                            <AiTwotoneStar className="text-yellow-400 text-lg" />
                            <AiTwotoneStar className="text-yellow-400 text-lg" />
                            <AiTwotoneStar className="text-yellow-400 text-lg" />
                            <AiTwotoneStar className="text-yellow-400 text-lg" />
                            <AiTwotoneStar className="text-yellow-400 text-lg" />
                          </p>
                          <p className=" text-slate-400 text-sm">368 reviews</p>
                        </div>
                        <div
                          className={`${
                            view !== "list" && "hidden"
                          }  h-16 overflow-hidden text-sm text-slate-500`}
                        >
                          <p>{BOOK.description}</p>
                        </div>
                        <button
                          className={`${
                            view === "list" ? "" : "hidden group-hover:block"
                          }  bg-cyan-500 text-slate-50 rounded-full py-2 px-5 mt-3 mx-auto uppercase font-semibold tracking-wider z-50`}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div>
                  <p>Sorry, There is no books found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Books;
