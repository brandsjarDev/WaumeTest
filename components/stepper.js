"use client";
import React, { useState } from "react";
import "./stepper.css";

const Stepper = ({ currentStep, steps }) => {
  return (
    <>
      <div className="h-[400px]">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item font-hossRound font-bold h-1/4 ${
              currentStep === i + 1 && "active"
            } ${i + 1 < currentStep && "complete"} `}
          >
            <p className="text-gray-800">{step}</p>
            <div className="step"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
