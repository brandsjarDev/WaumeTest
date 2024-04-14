import React, { useState } from "react";
import Card from "@components/themeCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";

const descriptions = [
  {
    title: "No",
    name: "low",
    content: "(only on special occasions)",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Few",
    name: "normal",
    content: "(1-5 treats per day)",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Many",
    name: "high",
    content: "(More than 5 treats per day)",
    imageUrl: "https://picsum.photos/200",
  },
];

const TreatForm = ({ formData, setFormData }) => {
  return (
    <>
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
      </div>
    </>
  );
};
export default TreatForm;
