import React from "react";
import Image from "next/image";
import chat from "@public/assets/images/chat-round-big.png";

const CircleWithImage = ({ imageUrl = chat, className }) => {
  return (
    <div className="relative w-14 h-14 bg-blue-50 rounded-full">
      <Image
        src={imageUrl}
        className={`absolute top-5 left-5 w-10 h-10 ${className}`}
        alt="Image"
      />
    </div>
  );
};

export default CircleWithImage;
