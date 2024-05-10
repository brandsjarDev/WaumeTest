import React from "react";
import Image from "next/image";
import chat from "@public/assets/images/chat-round-big.png";

const CircleWithImage = ({ imageUrl = chat, top, bottom, className }) => {
  return (
    <div className="relative w-14 h-14 rounded-full">
      <Image src={imageUrl} className={className} alt="Image" />
    </div>
  );
};

export default CircleWithImage;
