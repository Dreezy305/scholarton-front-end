import React from "react";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-bgNavbar">
      <nav className="container relative  mx-auto p-3">
        <div className="flex  items-center justify-between">
          {/* LOGO */}
          <div className="pt-2">
            <img src={Logo} alt="scholarton_logo" className="cursor-pointer" />
          </div>
          {/* MENU  */}
          <div className="md:flex space-x-6 text-regularWhite font-medium font-MontserratMedium text-base leading-5 hidden">
            <a href="#" className="hover:text-sky">
              About
            </a>
            <a href="#" className="hover:text-sky">
              How we work
            </a>
            <a href="#" className="hover:text-sky">
              Categories
            </a>
            <a href="#" className="hover:text-sky">
              Projects
            </a>
            <a href="#" className="hover:text-sky">
              Blog
            </a>
          </div>

          {/* get started */}
          <a
            href="#"
            className="rounded-full p-3 pt-3 text-white px-6 text-center bg-bgRed border border-bgRed baseline hover:bg-rose-600 hover:text-sky font-MontserratMedium font-medium text-base leading-5 hidden md:block"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
