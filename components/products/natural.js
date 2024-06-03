import React from "react";
import Card from "@components/themeCard";
import ThemeAccordion from "@components/themeAccordion";
import { getIngredients } from "@helpers/prodData";

const FreshIngridients = ({ prodName }) => {
  const ingredients = getIngredients(prodName);
  return (
    <>
      <div className="flex flex-col justify-center bg-secondary  gap-10 md:gap-15 pt-20 md:pt-30 px-5">
        <div className="flex flex-col justify-center items-center text-center  text-2xl md:text-4xl gap-10 md:gap-20">
          <h1 className="flex justify-center  font-hossRound">
            Fresh and natural ingredients
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center  gap-10">
            {ingredients.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                content={item.content}
                imageUrl={item.imageUrl}
                className="text-center border-[1px]"
              />
            ))}
          </div>
        </div>
      </div>{" "}
      <div className="flex bg-secondary h-24 rounded-b-[70%]"></div>
    </>
  );
};

export default FreshIngridients;
