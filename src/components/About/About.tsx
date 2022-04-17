import React from "react";
import GIRLBOY from "../../assets/images/girl-boy.png";
// import { ReactComponent as Learn } from "../../assets/svg/learn.svg";
import "./about.css";

type smallCardProps = {
  icon: React.ReactNode;
  text: string;
};

const smallCard = ({ icon, text }: smallCardProps) => {
  return (
    <div className="bg-white rounded-[20px] card-shadow flex flex-col items-center space-y-3 h-12 w-auto">
      {icon}
      <p>{text}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-bgBlue pb-4 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row md:flex-row  items-center justify-between space-x-20">
        <div className="flex flex-col mt-7 space-y-4">
          <h1 className="text-title font-bold font-MontserratBold text-5xl flex-col  leading-snug">
            <span className="">PROJECT BASED </span>
            <span className="">LEARNING</span>
          </h1>

          <h4 className="font-MontserratMedium font-medium text-4xl leading-7 text-title">
            More than projects...
          </h4>

          <p className="text-title font-MontserratMedium font-medium text-xl leading-6">
            Systematically building students to become life <br />
            long learners and leaders
          </p>
          {/* CTA buttons */}
          <div className="flex flex-row space-x-4 pt-4">
            <button
              className="text-center rounded-full text-white px-5 py-3 bg-bgRed cursor-pointer"
              type="button"
            >
              <span className="px-6">Get Started</span>
            </button>
            <button
              className="text-center rounded-full text-white px-5 py-3 bg-bgNavbar cursor-pointer"
              type="button"
            >
              <span className="px-8">Login</span>
            </button>
          </div>
        </div>

        <div className="mt-7 border-2 border-white rounded-tl-full rounded-tr-full flex items-center text-center">
          <img src={GIRLBOY} alt="students" className="" />
        </div>
      </div>
    </section>
  );
};

export default About;
