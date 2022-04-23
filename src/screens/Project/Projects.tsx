import React from "react";
import Card from "../../components/Card/Card";
import Creativity from "../../assets/images/creativity.png";
import Stem from "../../assets/images/stem.png";
import Efcc from "../../assets/images/efcc.png";

const Projects = () => {
  return (
    <section id="our-projects" className="mt-12 pb-8 mb-12">
      <div className="container mx-auto">
        <h4 className="text-title font-MontserratMedium font-semibold lg:text-3xl md:text-2xl text-xl leading-10 text-center pt-5">
          Our Popular Projects
        </h4>
        <p className="text-title text-center font-MontserratRegular pt-3 font-medium lg:text-lg md:text-lg text-base pb-8">
          learn, build and become a leader with our project based learning
          curriculum
        </p>

        <div className="grid grid-cols-1 gap-8 px-8 pb-8 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2">
          <Card
            type="PROJECT"
            icon={
              <img
                src={Creativity}
                alt="creativity"
                className="absolute bottom-36"
              />
            }
            text="Create an artist work to express your mood"
            baseText="CREATIVITY"
          />

          <Card
            type="PROJECT"
            icon={
              <img src={Stem} alt="creativity" className="absolute bottom-36" />
            }
            text="Build a robotic toy car"
            baseText="STEM"
          />

          <Card
            type="PROJECT"
            icon={
              <img src={Efcc} alt="creativity" className="absolute bottom-36" />
            }
            text="Develop a policy to curb cyber fraudster"
            baseText="CIVIL"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
