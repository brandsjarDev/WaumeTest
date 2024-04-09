import React, { useState } from "react";
import Card from "@components/themeCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";

const products = [
  {
    title: "Movement Friend",
    name: "chicken",
    allergyName: "Poultry",
    content: "EUR 111.11/ Month",
    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Belly Buddy",
    name: "beef",
    allergyName: "Beef",
    content: "EUR 111.11/ Month",
    imageUrl: halfBoard,
  },
  {
    title: "Belly Buddy Plus",
    name: "horse",
    allergyName: "Horse",

    content: "EUR 111.11/ Month",
    imageUrl: fullBoard,
  },
  {
    title: "Veggie Amigo",
    name: "veg",
    allergyName: "Vegetable Protein",

    content: "EUR 111.11/ Month",
    imageUrl: halfBoard,
  },
];

const ProductForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function getCost(prodType) {
    let num = 0;
    if (prodType === "chicken") num = formData.chicken * 0.012;
    if (prodType === "beef") num = formData.beef * 0.012;
    if (prodType === "horse") num = formData.horse * 0.0145;
    if (prodType === "veg") num = formData.veg * 0.011;

    // Round off num to 2 decimal points
    if (formData.portion == "half") num *= 0.5;
    num = parseFloat(num.toFixed(2));

    return num;
  }

  const filterProducts = products.filter(
    (item) => !formData.allergies.includes(item.allergyName)
  );
  return (
    <>
      <div className="flex justify-center gap-10 mt-5">
        {filterProducts.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={`EUR ${getCost(item.name)}/ Month`}
            imageUrl={item.imageUrl}
            active={formData.product == item.name}
            knowMore
            onClick={() =>
              setFormData({
                ...formData,
                product: item.name,
                prodCost: getCost(item.name),
              })
            }
          />
        ))}
      </div>
    </>
  );
};
export default ProductForm;
