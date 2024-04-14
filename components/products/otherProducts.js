import React, { useState } from "react";
import Card from "@components/themeCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";

const products = [
  {
    title: "Movement Friend",
    content: "Beef. Quinoa. Carrot.",
    imageUrl: fullBoard,
  },
  {
    title: "Belly Buddy",
    content: "Chicken. Oatmeal. Berry.",
    imageUrl: halfBoard,
  },
  {
    title: "Belly Buddy Plus",

    content: "Horse. Oatmeal. Berry.",
    imageUrl: fullBoard,
  },
  {
    title: "Veggie Amigo",

    content: "Egg. Pumpkin Seed Protein. Pumpkin.",
    imageUrl: halfBoard,
  },
];

const OtherProducts = () => {
  return (
    <>
      <div className="flex flex-col gap-10 md:gap-20 py-20 md:py-40 px-5">
        <h1 className="flex justify-center text-2xl md:text-4xl font-bold font-hossRound">
          Fresh and natural ingredients
        </h1>
        <div>
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-15">
            {products.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                content={item.content}
                imageUrl={item.imageUrl}
                className="text-center"
                knowMore
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherProducts;
