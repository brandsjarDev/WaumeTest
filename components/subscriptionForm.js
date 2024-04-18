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
function getProdIdOfOneTimeCost(prod) {
  if (prod == "chicken") return "prod_PwRICkgOGmaK34";
  else if (prod == "beef") {
    return "prod_PwRuctGfss2Tdt";
  } else if (prod == "horse") {
    return "prod_PwRLvWsLASiXaE";
  } else return "prod_PtFwbhFRmmy9CH";
}

function getProdIdPerMonth(prod) {
  if (prod == "chicken") return "prod_PtInW7Kz4dGcnk";
  else if (prod == "beef") {
    return "prod_PtFsIFJYk9wCet";
  } else if (prod == "horse") {
    return "prod_PtFvZI2HQY8UTL";
  } else return "prod_PwRLSREjV9mj1A";
}

const SubscriptionForm = ({ formData, setFormData }) => {
  function getContent(step) {
    switch (step) {
      case 0:
        return "Eur 25";
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
        return 25;
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
  function getProdId(step) {
    switch (step) {
      case 0:
        return "prod_PwSQmvSOeLVfwH";
      case 1:
        return getProdIdOfOneTimeCost(formData.product);
      case 2:
        return getProdIdOfOneTimeCost(formData.product);
      case 3:
        return getProdIdPerMonth(formData.product);
      case 4:
        return getProdIdPerMonth(formData.product);
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
                subscriptionAmt: getCost(index),
                productId: getProdId(index),
              })
            }
          />
        ))}
      </div>
    </>
  );
};
export default SubscriptionForm;
