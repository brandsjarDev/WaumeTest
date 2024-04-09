import React, { useState } from "react";
import Card from "@components/themeCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";

const descriptions = [
  {
    title: "A bit narrow",
    name: "low",
    content: "The waist is narrow and you can clearly see the ribs.",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Precisely",
    name: "normal",
    content:
      "The waist is clearly visible with some fat padding, the ribs are easy to feel.",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Well Padded",
    name: "high",
    content: "The waist is not visible and the ribs are difficult to feel.",
    imageUrl: "https://picsum.photos/200",
  },
];

const FatLvlForm = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex justify-center gap-8">
        {descriptions.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={item.content}
            // imageUrl={"https://picsum.photos/200/300"}
            active={formData.fatLevel == item.name}
            onClick={() => setFormData({ ...formData, fatLevel: item.name })}
          />
        ))}
      </div>
    </>
  );
};
export default FatLvlForm;
