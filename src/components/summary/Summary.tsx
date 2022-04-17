import React from "react";

type summary = {
  icon?: any;
  title?: string;
  summary?: string;
  bgColor?: string;
  width?: string;
  height?: string;
};

const Summary = ({ icon, title, summary, bgColor, width, height }: summary) => {
  return (
    <div className="flex flex-row space-x-8 items-center pb-4">
      <div
        className="flex items-center justify-center px-6 py-6"
        style={{
          background: bgColor,
          borderRadius: "100%",
        }}
      >
        <img
          src={icon}
          alt="graduate"
          className=""
          //   style={{ width: width, height: height }}
        />
      </div>
      <div className="flex flex-col space-y-3 w-4/5">
        <h6 className="font-MontserratRegular font-semibold text-lg leading-6">
          {title}
        </h6>
        <p className="font-MontserratRegular font-normal text-base leading-5 w-11/12">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default Summary;
