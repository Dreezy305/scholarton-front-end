import React from "react";
import Logo from "../../../assets/images/logo.png";

type TopbarProps = {
  title?: string;
};

const Topbar = ({ title }: TopbarProps) => {
  return (
    <div className="flex flex-row items-center justify-between pt-4">
      <h3 className="font-MontserratMedium font-semibold text-bgBlue text-2xl leading-6">
        {title || "Home Page"}
      </h3>

      <img src={Logo} className="" alt="" />
    </div>
  );
};

export default Topbar;
