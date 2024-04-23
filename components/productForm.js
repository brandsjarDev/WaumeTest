import React, { useState } from "react";
import Card from "@components/themeCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";
import bellyBuddy from "@public/assets/images/belly-buddy.png";
import bellyBuddyPlus from "@public/assets/images/belly-buddy-plus.png";
import movementFreind from "@public/assets/images/movement-friend.png";
import veggieAmigo from "@public/assets/images/veggie-amigo.png";

const ONE_MONTH = 31;

const products = [
  {
    title: "Movement Friend",
    name: "beef",
    allergyName: "Poultry",
    content: "EUR 111.11/ Month",
    imageUrl: bellyBuddy,
    active: true,
    href: "/products/Movement-Friend",
  },
  {
    title: "Belly Buddy",
    name: "chicken",
    allergyName: "Beef",
    content: "EUR 111.11/ Month",
    imageUrl: bellyBuddyPlus,
    href: "/products/Belly-Buddy",
  },
  {
    title: "Belly Buddy Plus",
    name: "horse",
    allergyName: "Horse",
    href: "/products/Belly-Buddy-Plus",

    content: "EUR 111.11/ Month",
    imageUrl: movementFreind,
  },
  {
    title: "Veggie Amigo",
    name: "veg",
    allergyName: "Vegetable Protein",
    href: "/products/Veggie-Amigo",
    content: "EUR 111.11/ Month",
    imageUrl: veggieAmigo,
  },
];

const ProductForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function getCost(prodType) {
    let num = 0;
    if (prodType === "chicken") num = formData.chicken * 0.012 * ONE_MONTH;
    if (prodType === "beef") num = formData.beef * 0.012 * ONE_MONTH;
    if (prodType === "horse") num = formData.horse * 0.0145 * ONE_MONTH;
    if (prodType === "veg") num = formData.veg * 0.011 * ONE_MONTH;

    // Round off num to 2 decimal points
    if (formData.portion == "half") num *= 0.6;
    num = parseFloat(num.toFixed(2));

    return num;
  }

  const filterProducts = products.filter(
    (item) => !formData.allergies.includes(item.allergyName)
  );
  function handleChange(obj) {
    setFormData({
      ...formData,
      product: obj.name,
      prodCost: getCost(obj.name),
    });
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-5">
        {filterProducts.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={`EUR ${getCost(item.name)}/ Month`}
            imageUrl={item.imageUrl}
            active={formData.product == item.name}
            knowMore
            href={item.href}
            onClick={() => handleChange(item)}
          />
        ))}
      </div>
    </>
  );
};
export default ProductForm;
