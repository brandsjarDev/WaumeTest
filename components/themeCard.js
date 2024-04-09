import React from "react";
import FoodImage from "@public/assets/images/fullBoard.png";

import Image from "next/image";

const Card = ({
  title,
  imageUrl,
  content,
  active,
  onClick,
  knowMore = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        !active && "border-2"
      } max-w-[290px] ${active && "border-8 border-primary"} p-4 rounded-3xl`}
      onClick={onClick}
    >
      <div className="flex justify-center">
        <Image src={imageUrl ? imageUrl : FoodImage} alt={title} />
      </div>
      <div className="flex-col justify-center">
        <div className="flex justify-center font-hossRound font-bold text-xl my-5">
          {title}
        </div>
        <p className="flex justify-center text-gray-700 text-base">{content}</p>
        {knowMore && (
          <p className="flex justify-center text-primary text-base mt-5">
            KNOW MORE
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
