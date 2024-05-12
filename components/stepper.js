"use client";
import React, { useState, useEffect } from "react";
import "./stepper.css";

const Stepper = ({ currentStep, steps }) => {
  useEffect(() => {
    if (window.innerHeight < 768) {
      // import("./horizontalStepper.css");
    }
  }, []);

  return (
    <>
      <div className="h-[350px] md:text-4xl">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item font-hossRound  h-1/4 ${
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
