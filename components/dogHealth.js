"use client";
import React, { useState } from "react";
import BasicSelect from "./basicSelect";

const allergies = [
  { label: "Horse", value: "Horse" },
  { label: "Beef", value: "Beef" },
  { label: "Poultry", value: "Poultry" },
  { label: "No", value: "No" },
  { label: "Vegetable Protein", value: "Vegetable Protein" },
  { label: "Insect Protein", value: "Insect Protein" },
  { label: "Millet", value: "Millet" },
  { label: "Quinoa", value: "Quinoa" },
  { label: "Oatmeal", value: "Oatmeal" },
];
const diseases = [
  { label: "Kidney disease", value: "Kidney disease" },
  { label: "Liver disease", value: "Liver disease" },
  { label: "Pancreatitis", value: "Pancreatitis" },
  { label: "Lactating", value: "Lactating" },
  { label: "Pregnant", value: "Pregnant" },
  { label: "None", value: "None" },
];

export default function DogHealth({ formData, setFormData }) {
  return (
    <>
      <div className="mb-4">
        <BasicSelect
          label="Does your dog have allergies?"
          name="allergies"
          value={formData}
          setValue={setFormData}
          options={allergies}
        />
      </div>
      <div className="mb-4">
        <BasicSelect
          label="Does your dog have any illness?"
          value={formData}
          setValue={setFormData}
          name="illness"
          options={diseases}
        />
      </div>
    </>
  );
}
