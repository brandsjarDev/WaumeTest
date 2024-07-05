import React, { useState } from "react";
import SimpleCard from "@components/simpleCard";
import WarningDialog from "./dailogue";

const illness = [
  "Nierenkrankheit",
  "Leberkrankheit",
  "Pankreatitis",
  "Stillend",
  "Schwanger",
  "Keine",
];

const IllnessForm = ({ formData, setFormData }) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (selectedIllness) => {
    if (formData.illness.includes(selectedIllness)) {
      const updatedIllness = formData.illness.filter(
        (item) => item !== selectedIllness
      );
      setFormData({ ...formData, illness: updatedIllness });
    } else if (
      formData.illness.includes("Keine") ||
      selectedIllness == "Keine"
    ) {
      setFormData({ ...formData, illness: ["Keine"] });
      return;
    } else {
      const updatedIllness = [...formData.illness, selectedIllness];
      if (selectedIllness != "Keine") setOpen(true);
      setFormData({ ...formData, illness: updatedIllness });
    }
  };

  return (
    <>
      <div className="flex-col justify-center text-4xl">
        <h1 className="flex justify-center mt-2 mb-10">
          Hat Ihr Hund eine Krankheit?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center content-center gap-4">
          {illness.map((item, index) => (
            <SimpleCard
              className="w-full"
              key={index}
              title={item}
              active={formData.illness.includes(item)}
              onClick={() => handleSelect(item)}
            />
          ))}
        </div>
        <WarningDialog
          title="Leider müssen wir Sie hier unterbrechen, da Ihr Hund unter einer Krankheit leidet."
          content="Wir empfehlen Ihnen, im Voraus Ihren Tierarzt zu kontaktieren, um herauszufinden, ob WAUME für Ihren Vierbeiner geeignet ist.

Für Fragen oder weitere Informationen kontaktieren Sie uns oder fragen Sie Ihren Tierarzt.

Wenn Sie dies bereits getan haben, klicken Sie auf 'Weiter', um fortzufahren."
          buttonText="Weiter"
          isOpen={open}
          setOpen={setOpen}
        />
      </div>
    </>
  );
};
export default IllnessForm;
