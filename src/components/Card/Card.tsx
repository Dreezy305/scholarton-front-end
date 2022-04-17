import React from "react";
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
        <div className="bg-white rounded-[20px] card-shado flex flex-col items-center h-32 w-32 card ">
          {icon}
          <p className="pt-3 font-MontserratMedium font-medium text-lg leading-7">
            {text}
          </p>
        </div>
      )}
    </>
  );
};
export default Card;
