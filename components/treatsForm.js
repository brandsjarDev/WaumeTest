import React, { useState } from "react";
import Card from "@components/themeCard";

const descriptions = [
  {
    title: "Selten",
    name: "low",
    content: "(nur zu besonderen Anlässen)",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Einige",
    name: "normal",
    content: "(1-5 Leckerlis pro Tag)",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Viele",
    name: "high",
    content: "(Mehr als 5 Leckerlis pro Tag)",
    imageUrl: "https://picsum.photos/200",
  },
];

const TreatForm = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex flex-col  justify-center">
        <h1 className="text-2xl md:text-4xl font-hossRound mb-5 md:mb-10">
          Bekommt {formData.dogName} Leckerlis?
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {descriptions.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              content={item.content}
              // imageUrl={"https://picsum.photos/200/300"}
              active={formData.treat == item.name}
              onClick={() => setFormData({ ...formData, treat: item.name })}
            />
          ))}
        </div>{" "}
      </div>
    </>
  );
};
export default TreatForm;
