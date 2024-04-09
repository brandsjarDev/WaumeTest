import React, { useState } from "react";
import SimpleCard from "@components/simpleCard";

const allergies = [
  "Horse",
  "Beef",
  "Poultry",
  "No",
  "Vegetable Protein",
  "Insect Protein",
  "Millet",
  "Quinoa",
  "Oatmeal",
];

const AllergyForm = ({ formData, setFormData }) => {
  const handleSelect = (allergy) => {
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
      <div className="flex-col justify-center text-4xl">
        <h1 className="flex justify-center mt-2 mb-10">
          Does {formData.dogName} have allergies?
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {allergies.map((item, index) => (
            <SimpleCard
              key={index}
              title={item}
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