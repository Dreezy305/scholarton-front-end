import React from "react";

type summary = {
  icon?: any;
  title?: string;
  summary?: string;
};

const Summary = ({ icon, title, summary }: summary) => {
  return (
    <div className="flex flex-row space-x-8 items-center">
      <div className="bg-red-900 rounded-full items-center px-6 py-6">
        <img src={icon} alt="graduate" className="" />
      </div>
      <div className="flex flex-col space-y-3">
        <h6 className="font-MontserratRegular font-semibold text-lg leading-6">
          {title}
        </h6>
        <p className="font-MontserratRegular font-normal text-base leading-5">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default Summary;
