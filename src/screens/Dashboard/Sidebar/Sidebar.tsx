import React from "react";
import Avatar from "../../../assets/images/Avatar.png";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineAppstore, AiOutlineSetting } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex-[0.5] items-center bg-bgNavbar lg:h-screen lg:overflow-hidden">
      <div className="lg:flex lg:flex-col lg:items-start lg:px-9 lg:pt-5 lg:space-y-3">
        <img src={Avatar} alt="avatar" className="h-164 w-16 pt-4 ml-5" />

        <p className="text-white text-left font-MontserratMedium font-medium">
          Ifeoluwa Olagbemi
        </p>
      </div>

      <div className="mx-auto lg:text-left lg:px-14 lg:flex-col lg:items-center lg:py-7 lg:space-y-8">
        <ul className="lg:py-7 lg:flex-col lg:space-y-8 lg:items-start">
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white flex flex-row space-x-5 items-center">
            <BiHomeAlt fontSize={23} />
            <span>Home Page</span>
          </li>
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white flex flex-row space-x-5 items-center">
            <AiOutlineAppstore fontSize={23} />
            <span>Project</span>
          </li>
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white flex flex-row space-x-5 items-center">
            <BsBook fontSize={23} />
            <span>Articles</span>
          </li>
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white flex flex-row space-x-5 items-center">
            <RiUser3Line fontSize={23} />
            <span>Educator</span>
          </li>
        </ul>

        <ul className="lg:py-7 lg:flex-col lg:space-y-8">
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white flex flex-row space-x-5 items-center">
            <AiOutlineSetting fontSize={23} />
            <span>Settings</span>
          </li>
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white flex flex-row space-x-5 items-center">
            <MdLogout fontSize={23} />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
