import React, { useState } from "react";
import BasicSelect from "./themeSelect";
import ThemeInput from "@components/themeInput";
import breeds from "@utils/breeds";
import ThemeAutoSuggest from "./themeAutosuggest";
// const breeds = [
//   { label: "Affenpinscher", value: "Affenpinscher" },
//   { label: "Afghan Hound", value: "Afghan Hound" },
//   { label: "Airedale Terrier", value: "Airedale Terrier" },
//   { label: "Akita", value: "Akita" },
// ];
const genderOptions = [
  { label: "He", value: "Male" },
  { label: "She", value: "Female" },
];
const durationOptions = [
  { label: "Days", value: "Days" },

  { label: "Months", value: "Months" },
  { label: "Years", value: "Years" },
];

export default function PersonalInfoForm({ formData, setFormData }) {
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-start mb-4 md:text-[34px] mt-10 text-center md:text-end px-5">
        <BasicSelect
          className="w-[100px] md:w-[150px]"
          label="He/She"
          name="gender"
          value={formData}
          setValue={setFormData}
          options={genderOptions}
        />
        <span className="my-6 md:my-4">&nbsp;is</span>
        <ThemeInput
          className="w-[50px] md:w-[100px]"
          id="age"
          type="number"
          name="age"
          value={formData}
          setValue={setFormData}
          placeholder="Age"
          required
        />
        <BasicSelect
          className="w-[150px] md:w-[200px]"
          label="Duration"
          name="ageDuration"
          value={formData}
          setValue={setFormData}
          options={durationOptions}
        />

        <span className="my-6 md:my-4"> old </span>

        <span className="my-6 md:my-4">&nbsp; and a</span>

        <ThemeAutoSuggest
          className="w-[150px] md:w-[300px]"
          label="Breed"
          name="breed"
          value={formData}
          setValue={setFormData}
          options={breeds}
        />
        <span className="my-6 md:my-4">. &nbsp; </span>
        <span className="my-6 md:my-4">
          <span className="font-bold"> {formData.dogName}'s</span> weight is{" "}
        </span>
        <ThemeInput
          className="w-[150px] md:w-[300px]"
          id="ownerName"
          type="number"
          name="weight"
          value={formData}
          setValue={setFormData}
          placeholder="Weight"
          required
        />
      </div>
    </>
  );
}
