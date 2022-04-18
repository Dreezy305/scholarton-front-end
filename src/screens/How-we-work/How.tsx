import React from "react";
import Graduate2 from "../../assets/images/graduate2.png";

const How = () => {
  return (
    <section id="how-we-work">
      <div className="flex flex-col items-center">
        <h3 className="font-MontserratMedium font-semibold text-4xl leading-10 mb-10">
          How we work
        </h3>
        {/* STEPS */}
        <div className="flex flex-row">
          <div className="border border-skyBlue rounded-full flex items-center text-center px-6 py-6">
            <img src={Graduate2} alt="grad_2" className="" />
          </div>

          <div className="border border-skyBlue rounded-full flex items-center text-center px-6 py-6">
            <img src={Graduate2} alt="grad_2" className="" />
          </div>

          <div className="border border-skyBlue rounded-full flex items-center text-center px-6 py-6">
            <img src={Graduate2} alt="grad_2" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
