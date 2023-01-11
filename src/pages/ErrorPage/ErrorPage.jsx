import React from "react";
import "./ErrorPage.css";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="error-main">
      <div className="semi-nav flex justify-center items-center py-3 shadow">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="content h-screen ">
        <div className="flex flex-col flex-center items-center gap-3 text-cyan-600 font-bold text-center pt-8">
          <p className="text-5xl">404</p>
          <p>Page cannot be found</p>
          <Link to="/" className="uppercase py-3 px-8 rounded-full bg-cyan-500 text-slate-50">Back to Homepage</Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ErrorPage;
