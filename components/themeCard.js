import React from "react";
import FoodImage from "@public/assets/images/fullBoard.png";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  imageUrl,
  content,
  active,
  onClick,
  className,
  translate = "yes",
  mainIngredient,
  price,
  href = "/",
  knowMore = false,
  disabled = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-w-[200px] max-w-[290px] p-4 rounded-3xl ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${active && !disabled ? "border-8 border-primary" : "border-2"}`}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="flex justify-center">
        {imageUrl && (
          <Image
            src={imageUrl ? imageUrl : FoodImage}
            alt={title}
            width={200} // Set a fixed width
            height={200}
          />
        )}
      </div>
      <div className="flex-col justify-center gap-5">
        <div
          translate={translate}
          className={`flex justify-center font-hossRound text-base md:text-xl ${
            imageUrl && "mt-5"
          }`}
        >
          {title}
        </div>
        {mainIngredient && (
          <p className="text-center text-gray-700 text-xs md:text-sm my-2">
            {mainIngredient}
          </p>
        )}
        <p className="text-center text-gray-700 text-xs md:text-base">
          {content}
        </p>

        {knowMore && (
          <a
            href={href}
            className="flex justify-center text-primary text-xs md:text-base mt-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            MEHR INFOS
          </a>
        )}
        {price && (
          <p className="flex justify-center text-gray-700 text-base mt-2">
            {price}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
