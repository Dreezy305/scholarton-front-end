import React from "react";
import Topbar from "../Topbar/Topbar";

type RightsideProps = {
  children?: React.ReactNode;
  title?: string;
};

const Rightside = ({ children, title }: RightsideProps) => {
  return (
    <div className="lg:flex-[2] lg:px-8 lg:py-2">
      <Topbar title={title} />
      {children}
    </div>
  );
};

export default Rightside;
