import React from "react";
import Colleagues from "../../assets/images/colleagues.png";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="mt-10 pt-8 flex flex-col space-y-8">
      <div className="container mx-auto flex flex-col md:flex-col lg:flex-row items-start justify-between space-x-20 md:mx-auto">
        <img src={Colleagues} alt="colleagues" className="middle" />

        <div className="flex flex-col about middle">
          <h6 className="text-center font-MontserratBold font-semibold text-4xl leading-10 my-8">
            About
          </h6>
          <p className="text-justify w-full mb-5 font-medium font-MontserratRegular text-lg leading-10 pad">
            Scholarton is an education-based platform that incorporates
            project-based learning methodology into education, It is a learning
            method which uses complex real world problems as the vehicle to
            promote student learning of concepts and principles wrapped up in
            the interdisciplinary student-centered activities with a clearly
            defined project outcome as opposed to direct present of fact and
            concept.
          </p>
          <button
            className="text-center rounded-full text-white px-5 py-3 bg-bgRed cursor-pointer self-end"
            type="button"
          >
            <span className="px-6">Read more</span>
          </button>
        </div>
      </div>

      {/* <div className="container mx-auto flex flex-col md:flex-row lg:flex-row items-start justify-between space-x-20"></div> */}
    </section>
  );
};

export default About;
