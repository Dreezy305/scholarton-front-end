import React, { useState } from "react";

const Contact = () => {
  const [sub, setSub] = useState("");

  return (
    <section id="contact" className="mt-12 mb-12 pb-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="bg-white rounded-[80px] px-4 py-4 flex flex-col items-center border w-3/4 relative h-64">
          <h4 className="text-title font-MontserratMedium font-semibold lg:text-3xl md:text-2xl text-xl leading-10 text-center pt-5">
            Get in Touch
          </h4>

          <p className="text-title text-center font-MontserratRegular pt-3 font-medium lg:text-lg md:text-lg text-base pb-8">
            Subcribe to our inspiring newsletter
          </p>

          <form className="w-4/5 relative items-center">
            <div className=" w-4/5 items-center">
              <input
                type={"text"}
                value={sub}
                className="px-3 py-6 border-2 border-skyBlue rounded-[20px] outline-none shadow-none absolute top-0 left-0 w-full bg-lightBg"
                placeholder="Send Your email address"
                id="subscribe"
                name="subscribe"
                onChange={(e) => setSub(e.target.value)}
              />

              <button
                className="text-white text-center px-6 py-4 bg-skyBlue rounded-[12px]  cursor-pointer absolute right-2 top-[9px] z-20"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
