import React, { useState } from "react";
import BasicSelect from "./themeSelect";
import ThemeInput from "@components/themeInput";

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

export default function PersonalInfoForm({ formData, setFormData }) {
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-5 md:gap-10">
        <div className="flex flex-wrap mb-4 text-xl md:text-[34px] justify-center md:justify-start  text-center md:text-end">
          <span className="my-6 md:my-4"> My name is</span>
          <ThemeInput
            className="w-[170px] md:w-[300px]"
            id="ownerName"
            type="text"
            name="ownerName"
            value={formData}
            setValue={setFormData}
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="flex flex-wrap mb-4 text-xl md:text-[34px] justify-center md:justify-start  text-center md:text-end">
          <span className="my-6 md:my-4"> I have a dog</span>

          <span className="my-6 md:my-4">&nbsp; named</span>
          <ThemeInput
            id="dogName"
            type="text"
            name="dogName"
            className="w-[100px] md:w-[300px]"
            value={formData}
            setValue={setFormData}
            placeholder="Name"
            required
          />
        </div>
        {/* <span className="my-6 md:my-4"> , who is</span>
        <BasicSelect
          className="w-[200px]"
          label="Gender"
          name="gender"
          value={formData}
          setValue={setFormData}
          options={genderOptions}
        />
        <span className="my-6 md:my-4"> dog</span> */}
      </div>
    </>
  );
}
