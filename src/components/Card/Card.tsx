import React from "react";
import Learn from "../../assets/svg/learn.svg";
import "./card.css";

type smallCardProps = {
  icon?: React.ReactNode;
  text?: string;
  type?: string;
};

const Card = ({ icon, text, type }: smallCardProps) => {
  return (
    <>
      {type === "FLASH" && (
        <div className="bg-white rounded-[20px] card-shadow flex flex-col items-center space-y-3 h-12 w-auto">
          {icon}
          <p>{text}</p>
        </div>
      )}
    </>
  );
};
export default Card;
