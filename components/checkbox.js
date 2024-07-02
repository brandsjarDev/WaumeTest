"use client";
import React, { useState } from "react";

const Checkbox = ({ value, setValue }) => {
  // State to manage the checked 1state of the checkbox
  const [isChecked1, setIsChecked1] = useState(
    value.parkingPermit == "Park in front of my front door"
  );
  const [isChecked2, setIsChecked2] = useState(
    value.parkingPermit == "Collection station/branch of he Austrian Post"
  );

  // Function to handle changes to the checkbox state
  const handleCheckboxChange1 = (event) => {
    if (event) {
      setValue({ ...value, parkingPermit: "Park in front of my front door" });
      setIsChecked1(true);
      setIsChecked2(false);
    } else {
      setValue({ ...value, parkingPermit: "" });
      setIsChecked1(false);
      setIsChecked2(true);
    }
  };
  const handleCheckboxChange2 = (event) => {
    if (event) {
      setValue({
        ...value,
        parkingPermit: "Collection station/branch of he Austrian Post",
      });
      setIsChecked1(false);
      setIsChecked2(true);
    } else {
      setValue({ ...value, parkingPermit: "" });
      setIsChecked1(true);
      setIsChecked2(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-around md:w-3/4  ">
      {/* Checkbox input */}
      <div>
        <input
          type="checkbox"
          checked={isChecked1} // Set the checked state based on the state variable
          onChange={handleCheckboxChange1} // Handle changes to the checkbox state
        />
        {/* Label for the checkbox */}
        <label className="ml-2">Parken Sie vor meiner Haustür</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={isChecked2} // Set the checked state based on the state variable
          onChange={handleCheckboxChange2} // Handle changes to the checkbox state
        />
        {/* Label for the checkbox */}
        <label className="ml-2">
          Abholstation/Filiale der Österreichischen Post
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
