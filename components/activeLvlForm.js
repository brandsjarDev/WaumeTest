import React, { useState } from "react";
import Card from "@components/themeCard";

const descriptions = [
  {
    title: "Gelegenheits Sportler",
    name: "low",
    content: "(0-2 Stunden Bewegung pro Tag)",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Hobbysportler",
    name: "normal",
    content: "(2-3 Stunden Bewegung pro Tag)",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Supersportler",
    name: "high",
    content: "(Mehr als 3 Stunden pro Tag)",
    imageUrl: "https://picsum.photos/200",
  },
];

const ActiveLvlForm = ({ formData, setFormData }) => {
  return (
    <>
      {" "}
      <div className="flex flex-col  justify-center">
        <h1 className="text-2xl md:text-4xl font-hossRound mb-5 md:mb-10">
          Wie aktiv ist {formData.dogName} derzeit?
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {descriptions.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              content={item.content}
              active={formData.active == item.name}
              onClick={() => setFormData({ ...formData, active: item.name })}
            />
          ))}
        </div>{" "}
      </div>
    </>
  );
};
export default ActiveLvlForm;
