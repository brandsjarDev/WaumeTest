import React, { useState } from "react";
import Card from "@components/themeCard";
import wellpadded from "@public/assets/images/wellpadded.webp";
import normal from "@public/assets/images/normal.webp";
import skinny from "@public/assets/images/skinny.webp";

const fatLvls = [
  {
    title: "Etwas schmal",
    name: "low",
    content: "Die Taille ist schmal und die Rippen sind deutlich sichtbar.",
    imageUrl: skinny,
  },
  {
    title: "Genau richtig",
    name: "normal",
    content:
      "Die Taille ist klar sichtbar mit etwas Fettpolsterung, die Rippen sind leicht zu fühlen.",
    imageUrl: normal,
  },
  {
    title: "Gut gepolstert",
    name: "high",
    content:
      "Die Taille ist nicht sichtbar und die Rippen sind schwer zu fühlen.",
    imageUrl: wellpadded,
  },
];

const FatLvlForm = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex flex-col  justify-center">
        <h1 className="text-2xl md:text-4xl font-hossRound mb-5 md:mb-10">
          Wie würdest du {formData.dogName}'s aktuelle Figur beschreiben?
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {fatLvls.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
              active={formData.fatLevel == item.name}
              onClick={() => setFormData({ ...formData, fatLevel: item.name })}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default FatLvlForm;
