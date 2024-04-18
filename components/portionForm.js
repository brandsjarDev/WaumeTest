import React, { useState } from "react";
import Card from "@components/themeCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";

const products = [
  {
    title: "Full Board",
    name: "full",
    content: "Daily ration, the full pampering program for your darling.",
    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Half Board",
    name: "half",
    content:
      "Half a daily ration as a nutrient-rich addition to the existing feed.",
    imageUrl: halfBoard,
    active: false,
  },
];

const PortionForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="flex flex-1 flex-col md:flex-row justify-center gap-8">
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={item.content}
            imageUrl={item.imageUrl}
            active={formData.portion == item.name}
            onClick={() => setFormData({ ...formData, portion: item.name })}
          />
        ))}
      </div>
    </>
  );
};
export default PortionForm;
