import React from "react";
import "./categories.css";
import Card from "../../components/Card/Card";

const Categories = () => {
  return (
    <section>
      <div className="container mx-auto bg-lightBg rounded-[10px] h-auto w-auto">
        <h4 className="text-title font-MontserratMedium font-semibold lg:text-3xl md:text-2xl text-xl leading-10 text-center pt-5">
          Our Categories
        </h4>
        <p className="text-title text-center font-MontserratRegular pt-3 font-medium lg:text-lg md:text-lg text-base pb-8">
          Build projects in line with your passion
        </p>

        <div className="flex flex-row">
          <Card type="CATEGORY" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
