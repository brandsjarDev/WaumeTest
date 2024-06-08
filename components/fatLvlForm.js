import React, { useState } from "react";
import Card from "@components/themeCard";
import wellpadded from "@public/assets/images/wellpadded.webp";
import normal from "@public/assets/images/normal.webp";
import skinny from "@public/assets/images/skinny.webp";

const fatLvls = [
  {
    title: "A bit narrow",
    name: "low",
    content: "The waist is narrow and you can clearly see the ribs.",
    imageUrl: skinny,
  },
  {
    title: "Precisely",
    name: "normal",
    content:
      "The waist is clearly visible with some fat padding, the ribs are easy to feel.",
    imageUrl: normal,
  },
  {
    title: "Well Padded",
    name: "high",
    content: "The waist is not visible and the ribs are difficult to feel.",
    imageUrl: wellpadded,
  },
];

const FatLvlForm = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex flex-col  justify-center">
        <h1 className="text-2xl md:text-4xl font-hossRound mb-5 md:mb-10">
          How would you describe your {formData.dogName}?
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {fatLvls.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
              active={formData.fatLevel == item.name}
              onClick={() => setFormData({ ...formData, fatLevel: item.name })}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default FatLvlForm;
