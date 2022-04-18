import React from "react";
import "./card.css";

type smallCardProps = {
  icon?: React.ReactNode;
  text?: string;
  type?: string;
};

type categoryCardProps = {
  image?: React.ReactNode;
  title?: string;
};

const Card = ({ icon, text, type }: smallCardProps) =>
  // { image, title }: categoryCardProps
  {
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

        {type === "CATEGORY" && (
          <div className="bg-white rounded-[30px] flex flex-col px-4 space-y-4 items-center text-center h-80 card-shadow relative">
            {icon}
            <p className="absolute bottom-20">{text}</p>
            <button
              className="rounded-[10px] text-center px-3 py-2 items-center whitespace-nowrap absolute bottom-4 mb-4"
              style={{ background: "rgba(215, 38, 61, 0.6)" }}
            >
              Tell me more
            </button>
          </div>
        )}
      </>
    );
  };
export default Card;
