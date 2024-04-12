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
      className={`flex flex-col max-w-[200px] md:max-w-[300px] rounded-2xl md:rounded-3xl bg-white shadow-bottom-right gap-2 md:gap-6 p-3 md:p-4 ${className}`}
      //   style={{ width: "fit-content" }}
      onClick={onClick}
    >
      <div className="flex justify-center">
        <Image src={imageUrl} alt={title} />
      </div>
      <div className="flex-col">
        <div className="flex font-hossRound font-bold text-sm md:text-[28px] my-2 md:my-3">
          {title}
        </div>
        <p className="flex text-[#797979] text-xs md:text-xl font-bioSans">
          {content}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
