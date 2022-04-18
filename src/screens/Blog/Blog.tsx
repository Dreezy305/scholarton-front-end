import React from "react";
import Card from "../../components/Card/Card";

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
      </div>
    </section>
  );
};

export default Blog;
