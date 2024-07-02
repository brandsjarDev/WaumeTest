import React, { useState } from "react";
import Card from "@components/simpleCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";

const products = [
  {
    title: "Testpaket",
    subtitle: "einmalige Zahlung",
    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Ein Monat",
    subtitle: "einmalige Zahlung",
    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Drei Monate",
    subtitle: "einmalige Zahlung",
    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Pro Monat",
    subtitle: "Abonnement",
    imageUrl: fullBoard,
    active: true,
  },
  {
    title: "Pro Drei Monate",
    subtitle: "Abonnement",
    imageUrl: fullBoard,
    active: true,
  },
];

const SubscriptionForm = ({ formData, setFormData }) => {
  function getContent(step) {
    switch (step) {
      case 0:
        return "15 €";
      case 1:
        return `€ ${getCost(step)}`;
      case 2:
        return `€ ${getCost(step)}`;
      case 3:
        return `€ ${getCost(step)}/ Monat`;
      case 4:
        return `€ ${getCost(step)}/ drei Monate`;
      default:
        return "unbekannter Schritt";
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            subtitle={item.subtitle}
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
