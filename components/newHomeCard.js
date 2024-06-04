import React from "react";
import FoodImage from "@public/assets/images/fullBoard.png";
import Image from "next/image";

const HomeCard = ({
  title,
  imageUrl = FoodImage,
  content,
  active,
  onClick,
  className,
  knowMore = false,
}) => {
  return (
    <div
      className={`flex flex-col max-w-[200px] md:max-w-[400px] gap-5 p-3 md:p-4 ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center">
        <Image src={imageUrl} alt={title} className="rounded-3xl" />
      </div>

      <span className="text-center text-sm md:text-xl my-2 md:my-3">
        <span className="font-hossRound "> {title} </span> -
        <span className="text-slate-500"> {content}</span>
      </span>
    </div>
  );
};

export default HomeCard;
