import React from "react";
import Logo from "../../../assets/images/logo.png";

const Topbar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-8 pt-4">
      <h3>Home Page</h3>

      <img src={Logo} className="" alt="" />
    </div>
  );
};

export default Topbar;
