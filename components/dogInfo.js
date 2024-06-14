import React, { useState } from "react";
import BasicSelect from "./themeSelect";
import ThemeInput from "@components/themeInput";
import breeds from "@utils/breeds";
import ThemeAutoSuggest from "./themeAutosuggest";

const genderOptions = [
  { label: "He", value: "Male" },
  { label: "She", value: "Female" },
];

export default function PersonalInfoForm({ formData, setFormData }) {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "year") setYear(value);
    if (name === "month") setMonth(value);
    if (name === "day") setDay(value);

    setFormData({
      ...formData,
      age: `${year}-${month}-${day}`,
    });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center md:justify-start mb-4 md:text-[34px] mt-10 text-center md:text-end px-5">
        <BasicSelect
          className="w-[100px] md:w-[150px]"
          label="He/She"
          name="gender"
          value={formData}
          setValue={setFormData}
          options={genderOptions}
        />
        <span className="my-6 md:my-4">&nbsp;is born on</span>
        <div className="flex space-x-2">
          <ThemeInput
            className="w-[60px] md:w-[150px]"
            id="year"
            type="number"
            name="birthYear"
            value={formData}
            setValue={setFormData}
            placeholder="YYYY"
            min={1900}
            max={new Date().getFullYear()}
          />
          <ThemeInput
            className="w-[40px] md:w-[100px]"
            id="month"
            type="number"
            name="birthMonth"
            value={formData}
            setValue={setFormData}
            placeholder="MM"
            min={1}
            max={12}
          />
          <ThemeInput
            className="w-[40px] md:w-[100px]"
            id="day"
            type="number"
            name="birthDay"
            value={formData}
            setValue={setFormData}
            placeholder="DD"
            min={1}
            max={31}
          />
        </div>
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
          <span className=""> {formData.dogName}'s</span> weight is{" "}
        </span>
        <ThemeInput
          className="w-[150px] md:w-[300px] mt-6"
          id="weight"
          type="number"
          name="weight"
          value={formData}
          setValue={setFormData}
          placeholder="Weight"
          maxValue={100}
          required
        />{" "}
        <span className="my-6 md:my-4">&nbsp; Kgs</span>
      </div>
    </>
  );
}
