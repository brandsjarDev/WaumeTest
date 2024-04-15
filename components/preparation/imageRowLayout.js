"use client";
import Image from "next/image";
import React from "react";
import solarpanel from "@public/assets/images/solarPanel.webp";
import fresh3 from "@public/assets/images/fresh3.png";
import { cn } from "@lib/utils";

const ImageRowLayout = ({
  children,
  imageUrl = solarpanel,
  reverse = false,
  className,
}) => {
  return (
    <div
      className={cn(
        `flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-center md:justify-around gap-5 px-5 py-5 md:py-10 `,
        className
      )}
    >
      <div
        className={`flex flex-col md:flex-row justify-center items-center  p-5`}
      >
        <Image
          src={imageUrl}
          className=" rounded-2xl"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-center items-center max-w-lg">
        {children}
      </div>
    </div>
  );
};
export default ImageRowLayout;
