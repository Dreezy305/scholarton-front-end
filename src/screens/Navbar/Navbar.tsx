import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-bgNavbar">
      <nav className="container relative  mx-auto p-3">
        <div className="flex items-center justify-between py-2">
          {/* LOGO */}
          <div className="">
            <Link to="/">
              <img
                src={Logo}
                alt="scholarton_logo"
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* hamburger */}
          <div className="md:hidden">
            <GiHamburgerMenu fontSize={48} className="cursor-pointer" />
          </div>
          {/* MENU  */}
          <div className="md:flex space-x-6 text-regularWhite font-medium font-MontserratMedium text-base leading-5 hidden items-center ">
            <Link to="/about" className="hover:text-sky text-size">
              About
            </Link>

            <Link to="/categories" className="hover:text-sky text-size">
              Categories
            </Link>
            <Link to="/projects" className="hover:text-sky text-size">
              Projects
            </Link>
            <Link to="/blog" className="hover:text-sky text-size">
              Blog
            </Link>

            <Link
              to="/sign-up"
              className="rounded-full p-3 pt-3 text-white px-6 text-center bg-bgRed border border-bgRed baseline hover:bg-rose-600 hover:text-sky font-MontserratMedium font-medium text-base leading-5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
