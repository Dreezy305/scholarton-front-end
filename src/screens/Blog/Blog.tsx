import React from "react";
import Card from "../../components/Card/Card";
import Rectangle29 from "../../assets/images/Rectangle-29.png";
import Rectangle42 from "../../assets/images/Rectangle-42.png";
import Rectangle47 from "../../assets/images/Rectangle-47.png";

const Blog = () => {
  return (
    <section id="blog" className="mt-12 mb-12 pb-8">
      <div className="container mx-auto">
        <h4 className="text-title font-MontserratMedium font-semibold lg:text-3xl md:text-2xl text-xl leading-10 text-center pt-5">
          Our Popular Blog
        </h4>
        <p className="text-title text-center font-MontserratRegular pt-3 font-medium lg:text-lg md:text-lg text-base pb-8">
          Inspiring and educative articles
        </p>

        <div className="grid grid-cols-1 gap-8 px-8 pb-8 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2">
          <Card
            type="PROJECT"
            icon={
              <img
                src={Rectangle29}
                alt="creativity"
                className="absolute bottom-36"
              />
            }
            text="Project Based Learning"
            baseText="Danjuma Femi"
          />

          <Card
            type="PROJECT"
            icon={
              <img
                src={Rectangle42}
                alt="creativity"
                className="absolute bottom-36"
              />
            }
            text="Developing 21st Cenutry Skills"
            baseText="Adeosun Bisi"
          />

          <Card
            type="PROJECT"
            icon={
              <img
                src={Rectangle47}
                alt="creativity"
                className="absolute bottom-36"
              />
            }
            text="Developing 21st Cenutry Skills"
            baseText="Adeosun Bisi"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
