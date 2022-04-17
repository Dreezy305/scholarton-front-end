import React from "react";
import Colleagues from "../../assets/images/colleagues.png";
import GirlsPhone from "../../assets/images/girls-phone.png";
import Graduate from "../../assets/images/graduate.png";
import Runner from "../../assets/images/runner.png";
import Share from "../../assets/images/share.png";
import Summary from "../../components/summary/Summary";
import "./about.css";

interface benefits {
  id: number;
  icon?: any;
  title: string;
  summary: string;
}

const About = () => {
  const benefitsDetails: benefits[] = [
    {
      id: 1,
      icon: Graduate,
      title: "Student Centered",
      summary: "It promotes student centered learning",
    },
    {
      id: 2,
      icon: Runner,
      title: "21st Century Skills",
      summary:
        "Scholarton has an array of projects that helps to develop 21st-century skills that are needed in solving the 21st century problems like communication, creativity and many more.",
    },
    {
      id: 3,
      icon: Share,
      title: "Archive Projects",
      summary:
        "Students  can archive their projects artifact on thier dashboard to review and revisit at any time from anywhere in the world. ",
    },
  ];

  return (
    <section id="about" className="mt-10 pt-8 mb-8">
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

      <div className="container mx-auto flex flex-col-reverse md:flex-row lg:flex-row items-start justify-between space-x-20">
        <div className="flex flex-col space-y-8 mt-5">
          <h4 className="font-MontserratMedium font-medium text-3xl leading-snug flex flex-col mt-12">
            Benefits of Scholarton Project Based Learning
          </h4>
          {benefitsDetails.map((item, i) => (
            <Summary
              icon={item.icon}
              title={item.title}
              summary={item.summary}
            />
          ))}
        </div>
        <div className="">
          <img src={GirlsPhone} alt="girls-phone" className="mt-12" />
        </div>
      </div>
    </section>
  );
};

export default About;
