import React from "react";
import FoodImage from "@public/assets/images/fullBoard.png";

import Image from "next/image";

const SimpleCard = ({ title, content = "", active, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        !active && "border-2"
      } max-w-[290px] ${active && "border-8 border-primary"} rounded-3xl`}
      onClick={onClick}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{title}</div>
        {content && <p className="text-gray-700 text-base">{content}</p>}
      </div>
    </div>
  );
};

export default SimpleCard;
