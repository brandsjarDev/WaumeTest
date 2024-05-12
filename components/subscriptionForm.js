import React, { useState } from "react";
import Card from "@components/simpleCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";

const products = [
  {
    title: "Trial Pack",

    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "One Month",

    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Three Month",

    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Per Month",

    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Per Three Month",

    imageUrl: fullBoard,
    active: true,
  },
];

const SubscriptionForm = ({ formData, setFormData }) => {
  function getContent(step) {
    switch (step) {
      case 0:
        return "Eur 15";
      case 1:
        return `Eur ${getCost(step)}`;
      case 2:
        return `Eur ${getCost(step)}`;
      case 3:
        return `Eur ${getCost(step)}/ Month`;
      case 4:
        return `Eur ${getCost(step)}/ three month`;
      default:
        return "unknown step";
    }
  }

  function getCost(step) {
    switch (step) {
      case 0:
        return 15;
      case 1:
        return formData.prodCost;
      case 2:
        return parseFloat((formData.prodCost * 3).toFixed(2));
      case 3:
        return formData.prodCost;
      case 4:
        return parseFloat((formData.prodCost * 3).toFixed(2));
      default:
        return 0;
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mt-10">
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={getContent(index)}
            active={formData.subscriptionTitle == item.title}
            onClick={() =>
              setFormData({
                ...formData,
                subscriptionTitle: item.title,
              })
            }
          />
        ))}
      </div>
    </>
  );
};
export default SubscriptionForm;
