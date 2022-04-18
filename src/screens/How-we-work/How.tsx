import React from "react";
import Graduate2 from "../../assets/images/graduate2.png";
import Register from "../../assets/images/register.png";
import Share2 from "../../assets/images/share2.png";
import Chord1 from "../../assets/images/chord1.png";
import Chord2 from "../../assets/images/chord2.png";

import "./how.css";

const How = () => {
  return (
    <section id="how-we-work" className="overflow-hidden">
      <div className="flex flex-col container mx-auto overflow-hidden mb-7 pb-7">
        <h3 className="font-MontserratMedium font-semibold lg:text-4xl md:text-3xl text-2xl leading-10 mb-10 text-center">
          How we work
        </h3>
        {/* STEPS */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center md:justify-between lg:justify-between pb-5 mb-5 bg-Img space-y-8 md:items-center lg:items-center md:px-10">
          <div className="flex flex-col text-center items-center  space-y-7 ">
            <div
              className="border border-skyBlue rounded-full flex items-center text-center justify-center px-6 py-6 h-28 w-28"
              style={{ borderRadius: "100%" }}
            >
              <img src={Register} alt="grad_2" className="" />
            </div>

            <span className="font-MontserratMedium font-medium text-xl leading-6 text-center">
              Register
            </span>
          </div>

          {/* <img src={Chord1} alt="grad_2" className="" /> */}

          <div className="flex flex-col text-center items-center space-y-7">
            <div
              className="border border-skyBlue rounded-full flex items-center text-center  justify-center px-6 py-6 h-28 w-28"
              style={{ borderRadius: "100%" }}
            >
              <img src={Graduate2} alt="grad_2" className="" />
            </div>

            <span className="font-MontserratMedium font-medium text-xl leading-6 text-center">
              Choose a category
            </span>
          </div>

          {/* <img src={Chord2} alt="grad_2" className="" /> */}

          <div className="flex flex-col text-center items-center space-y-7">
            <div
              className="border border-skyBlue rounded-full flex items-center justify-center text-center px-6 py-6 h-28 w-28"
              style={{ borderRadius: "100%" }}
            >
              <img src={Share2} alt="grad_2" className="" />
            </div>

            <span className="font-MontserratMedium font-medium text-xl leading-6 text-center">
              Archive Project
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
