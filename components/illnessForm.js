import React, { useState } from "react";
import SimpleCard from "@components/simpleCard";

const illness = [
  "Kidney disease",
  "Liver disease",
  "Pancreatitis",
  "Lactating",
  "Pregnant",
  "None",
];

const IllnessForm = ({ formData, setFormData }) => {
  const handleSelect = (selectedIllness) => {
    if (formData.illness.includes(selectedIllness)) {
      const updatedIllness = formData.illness.filter(
        (item) => item !== selectedIllness
      );
      setFormData({ ...formData, illness: updatedIllness });
    } else {
      const updatedIllness = [...formData.illness, selectedIllness];
      setFormData({ ...formData, illness: updatedIllness });
    }
  };

  return (
    <>
      <div className="flex-col justify-center text-4xl">
        <h1 className="flex justify-center mt-2 mb-10">
          Does your dog have any illness?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {illness.map((item, index) => (
            <SimpleCard
              key={index}
              title={item}
              active={formData.illness.includes(item)}
              onClick={() => handleSelect(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default IllnessForm;
