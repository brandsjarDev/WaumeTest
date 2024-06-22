import React, { useState } from "react";
import Card from "@components/themeCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";

const ONE_MONTH = 31;
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
function getCost(formData, portion) {
  let num = 0;
  if (formData.product === "chicken")
    num = formData.chicken * 0.012 * ONE_MONTH;
  if (formData.product === "beef") num = formData.beef * 0.012 * ONE_MONTH;
  if (formData.product === "horse") num = formData.horse * 0.0145 * ONE_MONTH;
  if (formData.product === "veg") num = formData.veg * 0.011 * ONE_MONTH;

  // Round off num to 2 decimal points
  if (portion == "half") num *= 0.6;
  num = parseFloat(num.toFixed(2));

  return num;
}
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
            price={`€ ${getCost(formData, item.name)}`}
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
