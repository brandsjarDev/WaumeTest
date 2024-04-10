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
      <div className="flex flex-wrap mb-4 text-[34px]  text-end">
        <span className="my-4"> My name is</span>
        <ThemeInput
          className="w-[300px]"
          id="ownerName"
          type="text"
          name="ownerName"
          value={formData}
          setValue={setFormData}
          placeholder="Enter Your Name"
          required
        />
        <span className="my-4"> and my email ID</span>

        <span className="my-4">&nbsp;is</span>
        <ThemeInput
          className="w-[500px]"
          id="email"
          type="email"
          name="email"
          value={formData}
          setValue={setFormData}
          placeholder="Enter Your Email"
          required
        />
        <span className="my-4"> . I have a dog</span>

        <span className="my-4">&nbsp; named</span>
        <ThemeInput
          id="dogName"
          type="text"
          name="dogName"
          className="w-[200px]"
          value={formData}
          setValue={setFormData}
          placeholder="Name"
          required
        />
        {/* <span className="my-4"> , who is</span>
        <BasicSelect
          className="w-[200px]"
          label="Gender"
          name="gender"
          value={formData}
          setValue={setFormData}
          options={genderOptions}
        />
        <span className="my-4"> dog</span> */}
      </div>
    </>
  );
}
