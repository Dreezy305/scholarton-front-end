import React from "react";
import "./footer.css";
import Logo from "../../assets/images/logo.png";
import FaceBook from "../../assets/images/FB.png";
import InstaGram from "../../assets/images/IG.png";
import Linkedln from "../../assets/images/IN.png";
import Twitter from "../../assets/images/Twit.png";
import YouTube from "../../assets/images/YouTube.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-bgNavbar overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <div className="lg:flex lg:flex-row py-12 lg:items-center lg:justify-between lg:overflow-hidden gird grid-cols-2 gap-4 px-4 md:flex md:flex-row">
          {/* LOGO */}
          <div className="">
            <img src={Logo} alt="scholarton_logo" className="cursor-pointer" />
          </div>

          <div className="flex flex-row items-center justify-between space">
            <ul className="flex flex-row items-center justify-between space-x-12">
              <li className="cursor-pointer">
                <img src={InstaGram} alt="" className="" />
              </li>

              <li className="cursor-pointer">
                <img src={Linkedln} alt="" className="" />
              </li>

              <li className="cursor-pointer">
                <img src={Twitter} alt="" className="" />
              </li>

              <li className="cursor-pointer">
                <img src={YouTube} alt="" className="" />
              </li>

              <li className="cursor-pointer">
                <img src={FaceBook} alt="" className="" />
              </li>
            </ul>
          </div>

          <div className="border-2 border-skyBlue px-6 py-3 items-center text-center space">
            <span className="text-center text-white font-MontserratMedium font-medium text-base leading-6 cursor-pointer">
              +2348034643978
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
