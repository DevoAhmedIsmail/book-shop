import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiTwotoneStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { getBookById, getRelatedBooks } from "../../State/booksSlice";

import "./BookDetails.css";

// Images
import adsImage from "../../assets/images/ads.jpg";
import person1 from "../../assets/images/profile-pic-1.jpg";
import person2 from "../../assets/images/profile-pic-2.jpg";

const BookDetails = () => {
  const [BOOK, setBOOK] = useState({});
  const [relatedBOOK, setRelatedBOOK] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  const [count, setCount] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const viewMoreHandler = () => {
    setViewMore(!viewMore);
  };

  const increaseCountHandler = () => {
    setCount((count) => count + 1);
  };

  const decreaseCountHandler = () => {
    if (count !== 1) {
      setCount((count) => count - 1);
    }
  };

  useEffect(() => {
    // Default Values When render
    setCount(1);
    setViewMore(false);

    // to scroll up when open
    window.scrollTo(0, 0)

    dispatch(() => getBookById(params.bookID));
    const book = books.find((book) => book.id === Number(params.bookID));
    setBOOK(book);
    // console.log(BOOK);
    /************************* */
    let booksArr = [];
    for (let i = books.length - 1; i > books.length - 6; i--) {
      booksArr.push(books[i]);
    }
    // console.log(...booksArr);
    setRelatedBOOK(booksArr);
    console.log(relatedBOOK);

    /* ******************************/
  }, [dispatch, params.bookID, books, BOOK]);

  return (
    <main className="book-details">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex flex-col lg:flex-row py-10">
          {/* Left Side in Lg Screen */}
          <div className="w-full lg:w-3/4 pr-5">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-120">
                <img
                  src={BOOK.image}
                  alt={BOOK.title}
                  className="w-full h-full object-conatin shadow-lg shadow-slate-400 rounded"
                />
              </div>
              <div className="w-full md:w-2/3 px-5 mt-5 md:mt-0">
                <h1 className="text-xl font-semibold">{BOOK.title}</h1>
                <p className="text-slate-500 my-2">Author : {BOOK.author}</p>
                {/* Reviews */}
                <div className="flex flex-row items-center">
                  <p className="flex flex-row">
                    <AiTwotoneStar className="text-yellow-500 text-lg" />
                    <AiTwotoneStar className="text-yellow-500 text-lg" />
                    <AiTwotoneStar className="text-yellow-500 text-lg" />
                    <AiTwotoneStar className="text-yellow-500 text-lg" />
                    <AiTwotoneStar className="text-yellow-500 text-lg" />
                  </p>
                  <p className="text-slate-500 ml-3">354 reviews</p>
                </div>
                {/* Price */}
                <div className="flex flex-row items-center text-xl mt-5">
                  <p className="font-bold line-through text-slate-500">
                    $52.45
                  </p>
                  <p className="border-2 border-cyan-500 text-cyan-500 rounded-lg ml-3 py-1 px-5 font-bold">
                    ${BOOK.price}
                  </p>
                </div>
                {/* comments */}
                <div className="mt-8 ">
                  <div
                    className={` ${!viewMore && "h-40 overflow-hidden"}  mb-5`}
                  >
                    <p className="text-slate-500">{BOOK.description}</p>
                  </div>
                  <span
                    className="text-cyan-500 cursor-pointer"
                    onClick={viewMoreHandler}
                  >
                    {viewMore ? "View Less" : "View More"}
                  </span>
                </div>
                {/* Add to Cart */}
                <div className="flex flex-col md:flex-row justify-end items-center mt-5 md:mt-0">
                  <div className="flex flex-row mr-0 md:mr-5">
                    <span
                      onClick={decreaseCountHandler}
                      className="text-sm font-bold border-2 border-slate-400 rounded-full flex flex-row justify-center items-center w-10 h-10 cursor-pointer hover:bg-slate-400 hover:text-slate-50 transition"
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className="text-lg font-bold border-2 border-slate-400 rounded-full flex flex-row justify-center items-center w-16 h-10 mx-3">
                      {count}
                    </span>
                    <span
                      onClick={increaseCountHandler}
                      className="text-sm font-bold border-2 border-slate-400 rounded-full flex flex-row justify-center items-center w-10 h-10 cursor-pointer hover:bg-slate-400 hover:text-slate-50 transition"
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button className="bg-cyan-500 text-slate-50 shadow-lg shadow-cyan-700 py-3 px-8 rounded-full tracking-wider font-semibold mt-3 md:mt-0">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="mt-16">
              {/* Header */}
              <div className="flex flex-row items-center border-b-2 pb-8">
                <p className="text-slate-600 font-semibold text-xl mr-5">
                  Community Reviews
                </p>
                <p className="flex flex-row">
                  <AiTwotoneStar className="text-yellow-400 text-lg" />
                  <AiTwotoneStar className="text-yellow-400 text-lg" />
                  <AiTwotoneStar className="text-yellow-400 text-lg" />
                  <AiTwotoneStar className="text-yellow-400 text-lg" />
                  <AiTwotoneStar className="text-yellow-400 text-lg" />
                </p>
                <p className="ml-2 text-slate-400">368 reviews</p>
              </div>

              {/* comment 1 */}
              <div className="comments-container mt-8">
                {/* comment card */}
                <div className="comment-card flex flex-col md:flex-row">
                  {/* Comment Left side */}
                  <div className="w-full md:w-2/12 flex justify-center">
                    <img
                      src={person2}
                      alt="person"
                      className="rounded-full w-24 h-24 object-cover"
                    />
                  </div>
                  {/* Comment Right side */}
                  <div className="w-full md:w-10/12">
                    {/* title */}
                    <div className="comment-title flex flex-col items-center justify-center md:justify-start md:items-start ">
                      <div className="flex flex-col justify-center items-center md:flex-row">
                        <p className="text-xl font-semibold text-slate-600 mr-5">
                          Eugene Barnett
                        </p>
                        <div className="flex flex-row mt-2 md:mt-0">
                          <p className="text-sm text-slate-400 mr-3">Rated it</p>
                        <p className="flex flex-row">
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                        </p>
                        </div>
                      </div>
                      <span className="text-sm text-slate-400 block mt-2">
                        Jul 27, 2022
                      </span>
                    </div>
                    <div className="mt-5">
                      <p className="text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci ex aperiam mollitia ut qui! Eius veritatis
                        suscipit dolores quod exercitationem porro, voluptate
                        natus voluptatem sequi et recusandae laborum quas. In ex
                        quis nobis, quibusdam consectetur officia recusandae,
                        harum assumenda unde voluptatem maxime omnis molestias
                        dicta, alias ducimus ipsa accusamus eligendi. Aut
                        consequatur inventore voluptatem asperiores! Tenetur
                        voluptatibus commodi beatae voluptatum, quidem
                        repudiandae. Ea quam id blanditiis, natus aut,
                        accusantium, provident et aliquid quisquam dolor tenetur
                        alias sapiente fugiat explicabo exercitationem.
                      </p>
                      <p className="text-slate-500 mt-5 mb-3">
                        Amet consectetur adipisicing elit. Aliquid ea molestias
                        voluptatum, eligendi ipsum provident repellat fugiat
                        accusantium maxime pariatur, incidunt quibusdam, facere
                        illum expedita aliquam accusamus et. Eius, hic!
                      </p>
                    </div>
                    <span className="text-cyan-400 hover:text-cyan-600 cursor-pointer">
                      Reply
                    </span>
                  </div>
                </div>
              </div>
              {/* ./Comment 1 */}

              {/* comment 1 */}
              <div className="comments-container mt-8">
                {/* comment card */}
                <div className="comment-card flex flex-col md:flex-row">
                  {/* Comment Left side */}
                  <div className="w-full md:w-2/12 flex justify-center">
                    <img
                      src={person1}
                      alt="person"
                      className="rounded-full w-24 h-24 object-cover"
                    />
                  </div>
                  {/* Comment Right side */}
                  <div className="w-full md:w-10/12">
                    {/* title */}
                    <div className="comment-title flex flex-col items-center justify-center md:justify-start md:items-start ">
                      <div className="flex flex-col justify-center items-center md:flex-row">
                        <p className="text-xl font-semibold text-slate-600 mr-5">
                          Beverly Schneider
                        </p>
                        <div className="flex flex-row mt-2 md:mt-0">
                          <p className="text-sm text-slate-400 mr-3">Rated it</p>
                        <p className="flex flex-row">
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                          <AiTwotoneStar className="text-yellow-400 text-lg" />
                        </p>
                        </div>
                      </div>
                      <span className="text-sm text-slate-400 block mt-2">
                        Jan 05, 2023
                      </span>
                    </div>
                    <div className="mt-5">
                      <p className="text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci ex aperiam mollitia ut qui! Eius veritatis
                        suscipit dolores quod exercitationem porro, voluptate
                        natus voluptatem sequi et recusandae laborum quas. In ex
                        quis nobis, quibusdam consectetur officia recusandae,
                        harum assumenda unde voluptatem maxime omnis molestias
                        dicta, alias ducimus ipsa accusamus eligendi. Aut
                        consequatur inventore voluptatem asperiores! Tenetur
                        voluptatibus commodi beatae voluptatum, quidem
                        repudiandae. Ea quam id blanditiis, natus aut,
                        accusantium, provident et aliquid quisquam dolor tenetur
                        alias sapiente fugiat explicabo exercitationem.
                      </p>
                    </div>
                    <span className="text-cyan-400 hover:text-cyan-600 cursor-pointer">
                      Reply
                    </span>
                  </div>
                </div>
              </div>
              {/* ./Comment 1 */}
            </div>
            {/* ./Comments */}
            <div className="text-center block border-2 py-3 text-slate-400 font-semibold mt-8 cursor-pointer hover:bg-slate-400 hover:text-slate-100 transition">
              View All Reviews
            </div>
          </div>
          {/* ./Left Side in Lg Screen */}

          {/* Right Side in Lg Screen */}
          <div className="w-full lg:w-1/4">
            <p className="text-xl font-semibold text-slate-500 mt-10 md:mt-0 text-center md:text-left">
              Related Books
            </p>
            {/* Related box Container */}
            <div className="flex flex-col md:flex-row lg:flex-col justify-start items-center flex-wrap space-y-3 mt-5">
              {relatedBOOK.map((RBOOK) => (
                //  Card
                <Link
                  to={`/books/${RBOOK.id}`}
                  key={RBOOK.id}
                  className="w-full md:w-1/3 lg:w-full"
                >
                  <div className="card flex flex-row">
                    <div className="card-image  w-20 h-32">
                      <img
                        src={RBOOK.image}
                        alt={RBOOK.title}
                        className="w-full h-full object-contain md:object-cover lg:object-contain rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-lg text-slate-600">{RBOOK.title}</p>
                      <p className="text-sm text-slate-400">{RBOOK.author}</p>
                      <p className="text-cyan-500 font-semibold mt-2">
                        ${RBOOK.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* sponsors */}
            <div className="sponsors mt-10">
              <p className="text-xl text-slate-600 font-semibold  tracking-wide">
                Sponsors
              </p>
              <div className="w-64 h-64">
                <img
                  src={adsImage}
                  alt="ads"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* ./Right Side in Lg Screen */}
        </div>
      </div>
    </main>
  );
};

export default BookDetails;
