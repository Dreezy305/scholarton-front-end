import React from "react";
import "./categories.css";
import Card from "../../components/Card/Card";
import Maths from "../../assets/images/mathematics.png";
import Online from "../../assets/images/online.png";
import Teacher from "../../assets/images/teacher.png";

interface categoryProps {
  id: number;
  text: string;
  icon: any;
}

const Categories = () => {
  const category: categoryProps[] = [
    { id: 1, text: "Art and Creativity", icon: Maths },
    { id: 2, text: "Business ", icon: Online },
    { id: 3, text: "Civic ", icon: Teacher },
    { id: 4, text: "Health and Environment", icon: Maths },
    { id: 5, text: "Lifestyle", icon: Teacher },
    { id: 6, text: "STEM", icon: Online },
  ];

  return (
    <section id="categories" className="pb-8">
      <div className="container mx-auto bg-lightBg rounded-[100px] h-auto w-auto px-8 py-8 border">
        <h4 className="text-title font-MontserratMedium font-semibold lg:text-3xl md:text-2xl text-xl leading-10 text-center pt-5">
          Our Categories
        </h4>
        <p className="text-title text-center font-MontserratRegular pt-3 font-medium lg:text-lg md:text-lg text-base pb-8">
          Build projects in line with your passion
        </p>

        <div className="grid grid-cols-1 gap-8 px-8 pb-8 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2">
          {category.map((item, i) => (
            <Card
              type="CATEGORY"
              icon={
                <img
                  src={item.icon}
                  alt={item.text}
                  className="absolute bottom-36"
                />
              }
              text={item.text}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
