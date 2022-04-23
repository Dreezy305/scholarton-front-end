import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={"/"} className="cursor-pointer">
        <img src={Logo} className="" alt="" />
      </Link>
    </div>
  );
};

export default Topbar;
