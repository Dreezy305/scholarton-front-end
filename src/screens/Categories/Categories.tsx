import React from "react";
import "./categories.css";
import Card from "../../components/Card/Card";
import Maths from "../../assets/images/mathematics.png";

const Categories = () => {
  return (
    <section id="categories" className="pb-8">
      <div className="container mx-auto bg-lightBg rounded-[100px] h-auto w-auto px-8 py-8 border">
        <h4 className="text-title font-MontserratMedium font-semibold lg:text-3xl md:text-2xl text-xl leading-10 text-center pt-5">
          Our Categories
        </h4>
        <p className="text-title text-center font-MontserratRegular pt-3 font-medium lg:text-lg md:text-lg text-base pb-8">
          Build projects in line with your passion
        </p>

        <div className="grid grid-cols-3 gap-8 px-8 pb-8">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Card
              type="CATEGORY"
              icon={<img src={Maths} alt="Art_and_creativity" className="" />}
              text=" Art and Creativity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
