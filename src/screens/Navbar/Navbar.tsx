import React from "react";
import Logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-bgNavbar">
      <nav className="container relative  mx-auto p-3">
        <div className="flex items-center justify-between py-2">
          {/* LOGO */}
          <div className="">
            <img src={Logo} alt="scholarton_logo" className="cursor-pointer" />
          </div>

          {/* hamburger */}
          <div className="md:hidden">
            <GiHamburgerMenu fontSize={48} className="cursor-pointer" />
          </div>
          {/* MENU  */}
          <div className="md:flex space-x-6 text-regularWhite font-medium font-MontserratMedium text-base leading-5 hidden items-center ">
            <a href="#" className="hover:text-sky text-size">
              About
            </a>
            {/* <a href="#" className="hover:text-sky text-size">
              How we work
            </a> */}
            <a href="#" className="hover:text-sky text-size">
              Categories
            </a>
            <a href="#" className="hover:text-sky text-size">
              Projects
            </a>
            <a href="#" className="hover:text-sky text-size">
              Blog
            </a>

            <a
              href="#"
              className="rounded-full p-3 pt-3 text-white px-6 text-center bg-bgRed border border-bgRed baseline hover:bg-rose-600 hover:text-sky font-MontserratMedium font-medium text-base leading-5"
            >
              Get Started
            </a>
          </div>

          {/* get started */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
