import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";
// Icons
import { BsCart3, BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// Images
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  const boxRef = useRef(null);
  const cartRef = useRef(null);

  const openSideBar = () => {
    document.body.style.overflow = "hidden";
    setShowSidebar(true);
  };

  const closeSideBar = () => {
    document.body.style.overflow = "auto";
    setShowSidebar(false);
  };

  const openCartMenu = ()=>{
    document.querySelector("main").classList.add("opacity-25");
    document.body.style.overflow = "hidden";
  }
  const closeCartMenu = ()=>{
    document.querySelector("main").classList.remove("opacity-25");
    document.body.style.overflow = "auto";
    setShowCart(false)
  }


  const submitForm = (e) => {
    e.preventDefault();
    navigate(`/books?q=${searchTitle}`);
  };

  useEffect(() => {
    

    
    function handleClickOutsideCART(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCartMenu();
      }
    }
    if (showCart) {
      openCartMenu()
      document.addEventListener("mousedown", handleClickOutsideCART);
    } else {
      closeCartMenu()
    }

    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        closeSideBar();
      }
    }

    if(showSidebar){
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutsideCART);
    };

  }, [boxRef, showCart]);

  return (
    <div className="z-50 relative">
      <nav className="bg-slate-50 py-4 px-5">
        <div className="container  mx-auto">
          <div className="flex justify-between items-center">
            {/* left */}
            <div className="logo-container pr-0 md:pr-48 lg:pr-96 ">
              <Link to="/">
                <img src={Logo} alt="book shop" className="" />
              </Link>
            </div>
            {/* center */}
            <div className="flex-1 hidden md:block">
              <form onSubmit={submitForm} className="relative">
                <BsSearch
                  className="absolute top-4 left-4 font-bold text-slate-300 cursor-pointer hover:text-cyan-500"
                  onClick={submitForm}
                />
                <input
                  className="border rounded-full md:w-72 lg:w-96 h-12 pl-10 mr-auto placeholder:text-slate-300 focus:outline-cyan-500"
                  placeholder="Search Over million book titles"
                  onChange={(e) => setSearchTitle(e.target.value)}
                  value={searchTitle}
                />
              </form>
            </div>

            {/* right */}
            <div className="flex flex-1 space-x-5 ml-8 relative">
              <BsCart3
                className="text-2xl text-slate-400 cursor-pointer hover:text-cyan-500"
                onClick={() => setShowCart(!showCart)}
              />

              {cart.length ? (
                <div className="badge absolute top-5">
                  <span className="bg-cyan-500 text-slate-50 text-sm rounded-full w-4 h-4 flex text-center justify-center items-center">
                    {cart.length}
                  </span>
                </div>
              ) : (
                ""
              )}

              <div
              ref={cartRef}
                className={`cart-dropdown bg-white ${
                  showCart && "active"
                } px-4 py-5 shadow w-80 lg:w-auto -left-32`}
              >
                <p className="text-slate-500 self-start font-semibold">
                  You have {cart.length} Items in your cart{" "}
                </p>
                <div className="flex flex-col divide-y-2">
                  {cart.length ? (
                    <div className="flex flex-col">
                      {cart.map((item) => (
                        <div key={item.id}>
                          <div className="flex flex-row py-5">
                            <div className="w-1/3 h-auto lg:h-40">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="flex flex-col w-2/3 px-5 gap-7">
                              <div className="">
                                <p className=" text-slate-500 font-semibold">
                                  {item.title}
                                </p>
                                <p className="text-sm text-slate-500">
                                  {item.author}
                                </p>
                              </div>
                              <div className="text-sm text-slate-500">
                                <p>Qty: {item.quantity}</p>
                                <p>
                                  Price: ({item.quantity}X){" "}
                                  <span className="font-semibold">
                                    ${(item.quantity * item.price).toFixed(2)}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="flex flex-col gap-4">
                        <Link to="/cart" className="text-center uppercase py-3 px-10 border border-cyan-500  text-cyan-500 rounded-full font-semibold" onClick={closeCartMenu}>
                          Update Cart
                        </Link>
                        <Link to="/cart/checkout" className="text-center uppercase py-3 px-10 border bg-cyan-500 text-white rounded-full  font-semibold" onClick={closeCartMenu}>
                          process checkout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p>Your Cart is Empty</p>
                    </div>
                  )}
                </div>
              </div>
              <AiOutlineUser className="text-2xl text-slate-400 cursor-pointer hover:text-cyan-500" />
            </div>
            {/* Menu Btn show in small screen only */}
            <div className="block md:hidden" onClick={openSideBar}>
              <AiOutlineMenu className="text-3xl cursor-pointer hover:text-cyan-500 transition" />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for md & over */}
      <div className="sidebar hidden md:flex md:flex-row md:justify-center space-x-5 bg-slate-100 mt-3 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/magazines">Magazines</NavLink>
        <NavLink to="/textBooks">TextBooks</NavLink>
        <NavLink to="/audiobooks">Audiobooks</NavLink>
        <NavLink to="/recomended">Recomended</NavLink>
        <NavLink to="/sale">Sale</NavLink>
      </div>

      {/* Sidebar for sm */}
      <div
        ref={boxRef}
        className={`sidebar-sm relative bg-slate-50 pt-16 pl-4 flex flex-col h-screen w-64 md:hidden ${
          showSidebar && "show"
        }`}
      >
        <AiOutlineClose
          className="absolute top-3 right-3 text-red-600 text-xl cursor-pointer"
          onClick={closeSideBar}
        />
        <NavLink to="/" onClick={closeSideBar}>
          Home
        </NavLink>
        <NavLink to="/books" onClick={closeSideBar}>
          Books
        </NavLink>
        <NavLink to="/magazines" onClick={closeSideBar}>
          Magazines
        </NavLink>
        <NavLink to="/textBooks" onClick={closeSideBar}>
          TextBooks
        </NavLink>
        <NavLink to="/audiobooks" onClick={closeSideBar}>
          Audiobooks
        </NavLink>
        <NavLink to="/recomended" onClick={closeSideBar}>
          Recomended
        </NavLink>
        <NavLink to="/sale" onClick={closeSideBar}>
          Sale
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
