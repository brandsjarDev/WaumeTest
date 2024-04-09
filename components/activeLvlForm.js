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
      <div className="flex justify-center gap-8">
        {descriptions.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={item.content}
            active={formData.active == item.name}
            onClick={() => setFormData({ ...formData, active: item.name })}
          />
        ))}
      </div>
    </>
  );
};
export default ActiveLvlForm;
