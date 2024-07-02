"use client";
import React, { useState } from "react";
import Card from "@components/themeCard";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";
import { Typography, TextField, Button } from "@material-ui/core";
import { calcFoodWeight } from "@helpers/foodCalc";

function getStepContent(step, formData, setFormData) {
  switch (step) {
    case 0:
      return <PersonalInfoForm formData={formData} setFormData={setFormData} />;
    case 1:
      return <DogInfo formData={formData} setFormData={setFormData} />;
    case 2:
      return <DogHealth formData={formData} setFormData={setFormData} />;
    case 3:
      return <PlanForm formData={formData} setFormData={setFormData} />;
    default:
      return "unknown step";
  }
}

const PaymentForm = ({ formData, setFormData }) => {
  const [embeddedStep, setEmbeddedStep] = useState(0);

  const handleNext = () => {
    setFormData(calcFoodWeight(formData));

    setEmbeddedStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Card
          title={"Full Board"}
          content={"Daily ration, the full pampering program for your darling."}
          imageUrl={fullBoard}
          active={true}
        />
        <Card
          title={"Half Board"}
          content={
            "Half a daily ration as a nutrient-rich addition to the existing feed."
          }
          imageUrl={halfBoard}
          active={false}
        />
      </div>
      <div className="flex justify-between">
        <Button onClick={handleBack}>Back</Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};
export default PaymentForm;
