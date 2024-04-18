import React, { useState } from "react";
import Card from "@components/themeCard";

const descriptions = [
  {
    title: "Occasional athlete",
    name: "low",
    content: "(0h-2h exercise per day)",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Hobby athlete",
    name: "normal",
    content: "(2h-3h exercise per day)",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Super athlete",
    name: "high",
    content: "(More than 3 hours per day)",
    imageUrl: "https://picsum.photos/200",
  },
];

const ActiveLvlForm = ({ formData, setFormData }) => {
  return (
    <>
      {" "}
      <div className="flex flex-col  justify-center">
        <h1 className="text-2xl md:text-4xl font-hossRound mb-5 md:mb-10">
          How active is {formData.dogName} currently?
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
