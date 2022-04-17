import React from "react";
import GIRLBOY from "../../assets/images/girl-boy.png";
import Learn from "../../assets/svg/learn.svg";
import Build from "../../assets/svg/build.svg";
import Lead from "../../assets/svg/lead.svg";
import Card from "../../components/Card/Card";
import "./about.css";

interface flash {
  component: any;
  id: number;
  text: string;
}

const About = () => {
  const cardDetails: flash[] = [
    { id: 1, component: Learn, text: "Learn" },
    { id: 2, component: Build, text: "Build" },
    { id: 3, component: Lead, text: "Lead" },
  ];

  return (
    <section id="about" className="bg-bgBlue pb-4 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row md:flex-row items-center justify-between space-x-20 overflow-hidden pad md:justify-between">
        <div className="flex flex-col mt-12 pt-12 space-y-4 adjust">
          <h1 className="text-title font-bold font-MontserratBold lg:text-5xl md:text-3xl text-xl flex-col  leading-snug">
            <span className="">PROJECT BASED </span>
            <span className="">LEARNING</span>
          </h1>

          <h4 className="font-MontserratMedium font-medium lg:text-4xl md:text-4xl text-lg leading-7 text-title">
            More than projects...
          </h4>

          <p className="text-title font-MontserratMedium font-medium lg:text-xl md:text-xl text-base leading-6 hidden">
            Systematically building students to become life <br />
            long learners and leaders
          </p>

          {/* DISPLAYS ON MOBILE VIEWS */}
          <p className="text-title font-MontserratMedium font-medium lg:text-xl md:text-xl text-base leading-6 p">
            Systematically building students to become life long learners and
            leaders
          </p>

          {/* CTA buttons */}
          <div className="flex flex-row space-x-4 pt-4 pb-5 ">
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

          <div className="flex flex-wrap lg:flex-row md:flex-row  lg:space-x-4 md:pt-12 lg:pt-12 hero ">
            {cardDetails.map((item, i) => (
              <Card
                type="FLASH"
                icon={
                  <img src={item.component} alt={item.text} className="mt-4" />
                }
                text={item.text}
                key={item.id}
              />
            ))}
          </div>
        </div>

        <div className="mt-7 border-2 border-white rounded-tl-full rounded-tr-full flex items-center text-center hero">
          <img src={GIRLBOY} alt="students" className="" />
        </div>
      </div>
    </section>
  );
};

export default About;
