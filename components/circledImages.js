import React from "react";
import Image from "next/image";
import chat from "@public/assets/images/chat-round-big.png";
import { cn } from "@lib/utils";

const CircleWithImage = ({ imageUrl = chat, top, bottom, className }) => {
  return (
    <div className="relative h-7 w-7 md:h-14 md:w-14 rounded-full">
      <Image src={imageUrl} className={className} alt="Image" />
    </div>
  );
};

export default CircleWithImage;
