import React from "react";
import Avatar from "../../../assets/images/Avatar.png";

const Sidebar = () => {
  return (
    <div className="flex-[0.5] items-center bg-bgNavbar lg:h-screen lg:overflow-hidden">
      <div className="lg:flex lg:flex-col lg:items-start lg:px-9 lg:pt-5 lg:space-y-3">
        <img src={Avatar} alt="avatar" className="h-164 w-16 pt-4 ml-5" />

        <p className="text-white text-left font-MontserratMedium font-medium">
          Ifeoluwa Olagbemi
        </p>
      </div>

      <div className="mx-auto lg:text-left lg:px-10 lg:flex-col lg:items-center lg:py-7 lg:space-y-8">
        <ul className="lg:py-7 lg:flex-col lg:space-y-8 lg:items-start">
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white ">
            Home Page
          </li>
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white">
            Project
          </li>
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white">
            Articles
          </li>
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white">
            Educator
          </li>
        </ul>

        <ul className="lg:py-7 lg:flex-col lg:space-y-8">
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white">
            Settings
          </li>
          <li className="cursor-pointer hover:bg-bgBlue hover:text-white font-MontserratMedium font-medium text-base leading-5 text-white">
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
