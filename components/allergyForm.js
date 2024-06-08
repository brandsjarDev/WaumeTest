import React, { useState } from "react";
import SimpleCard from "@components/simpleCard";

const allergies = [
  "Horse",
  "Beef",
  "Poultry",
  "Vegetable Protein",
  "Insect Protein",
  "Millet",
  "Quinoa",
  "Oatmeal",
  "No",
];

const AllergyForm = ({ formData, setFormData }) => {
  const handleSelect = (allergy) => {
    if (formData.allergies.includes("No") || allergy == "No") {
      setFormData({ ...formData, allergies: ["No"] });
      return;
    }
    if (!formData.allergies.includes(allergy)) {
      const updatedAllergies = [...formData.allergies, allergy];
      setFormData({ ...formData, allergies: updatedAllergies });
    }
  };

  const handleUnSelect = (allergy) => {
    if (formData.allergies.includes(allergy)) {
      const updatedAllergies = formData.allergies.filter(
        (item) => item !== allergy
      );
      setFormData({ ...formData, allergies: updatedAllergies });
    }
  };

  return (
    <>
      <div className="flex-col justify-center items-center text-4xl">
        <h1 className="flex justify-center items-center mt-2 mb-10">
          Does {formData.dogName} have allergies?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center content-center gap-4">
          {" "}
          {allergies.map((item, index) => (
            <SimpleCard
              key={index}
              title={item}
              className="w-full"
              // imageUrl={"https://picsum.photos/200/300"}
              active={formData.allergies.includes(item)}
              onClick={
                formData.allergies.includes(item)
                  ? () => handleUnSelect(item)
                  : () => handleSelect(item)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default AllergyForm;
