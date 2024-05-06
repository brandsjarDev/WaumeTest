import React, { useState } from "react";
import SimpleCard from "@components/simpleCard";
import WarningDialog from "./dailogue";

const illness = [
  "Kidney disease",
  "Liver disease",
  "Pancreatitis",
  "Lactating",
  "Pregnant",
  "None",
];

const IllnessForm = ({ formData, setFormData }) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (selectedIllness) => {
    if (selectedIllness != "None") setOpen(true);
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
        <WarningDialog
          title="Unfortunately we have to interrupt you here because your dog is suffering from an illness."
          content="We recommend contacting your veterinarian in advance to see whether WAUME is suitable for your four-legged friend.

For questions or more information, contact us or ask your veterinarian.

If you have already done this, click 'next' to continue."
          buttonText="Next"
          isOpen={open}
          setOpen={setOpen}
        />
      </div>
    </>
  );
};
export default IllnessForm;
