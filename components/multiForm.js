"use client";
import React, { useState } from "react";
import { calcFoodWeight, initialValue } from "@helpers/foodCalc";
import PersonalInfoForm from "./personalInfo";
import DogInfo from "./dogInfo";
import DogHealth from "./dogHealth";
import Stepper from "./stepper";
import PortionForm from "./portionForm";
import ProductForm from "./productForm";
import FatLvlForm from "./fatLvlForm";
import ActiveLvlForm from "./activeLvlForm";
import TreatForm from "./treatsForm";
import AllergyForm from "./allergyForm";
import IllnessForm from "./illnessForm";
import SubscriptionForm from "./subscriptionForm";
import CheckoutForm from "./checkoutForm";
import ThemeButton from "./themeButton";

const foodData = [
  { name: "Beef", kcalPer100g: 130 },
  { name: "Horse", kcalPer100g: 110 },
  { name: "Chicken", kcalPer100g: 123 },
  { name: "Veg", kcalPer100g: 126 },
];

function getSteps() {
  return ["Me", "My Dog", "Plan", "Checkout"];
}

const checkPoints = [0, 6, 9];

function getStepContent(step, formData, setFormData) {
  switch (step) {
    case 0:
      return <PersonalInfoForm formData={formData} setFormData={setFormData} />;
    case 1:
      return <DogInfo formData={formData} setFormData={setFormData} />;
    case 2:
      return <FatLvlForm formData={formData} setFormData={setFormData} />;
    case 3:
      return <ActiveLvlForm formData={formData} setFormData={setFormData} />;
    case 4:
      return <TreatForm formData={formData} setFormData={setFormData} />;
    case 5:
      return <AllergyForm formData={formData} setFormData={setFormData} />;
    case 6:
      return <IllnessForm formData={formData} setFormData={setFormData} />;

    case 7:
      return <PortionForm formData={formData} setFormData={setFormData} />;
    case 8:
      return <ProductForm formData={formData} setFormData={setFormData} />;
    case 9:
      return <SubscriptionForm formData={formData} setFormData={setFormData} />;
    case 10:
      return <CheckoutForm formData={formData} setFormData={setFormData} />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepper, setStepper] = useState(1);

  const steps = getSteps();
  const [formData, setFormData] = useState(initialValue);

  console.log("formData", formData);

  const handleNext = () => {
    setFormData(calcFoodWeight(formData));

    if (checkPoints.includes(activeStep)) {
      setStepper((prev) => prev + 1);
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (checkPoints.includes(activeStep - 1)) {
      setStepper((prev) => prev - 1);
    }
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="flex-row w-full mb-5">
      <div className="flex gap-10 w-full">
        <div className="flex flex-col w-1/5 p-1 md:p-4">
          <Stepper currentStep={stepper} steps={getSteps()} />
        </div>
        <div className="grid grid-cols-1 justify-between content-between p-1 md:p-4 mt-0 w-full">
          <div className="w-full">
            {getStepContent(activeStep, formData, setFormData)}
          </div>
        </div>
      </div>
      <div className="flex justify-evenly w-full mt-10">
        <ThemeButton
          disabled={activeStep === 0}
          onClick={handleBack}
          className="w-[190px]"
        >
          Back
        </ThemeButton>
        {activeStep < 10 && (
          <ThemeButton
            disabled={activeStep === 10}
            onClick={handleNext}
            className="w-[190px]"
          >
            {activeStep === 9 ? "Finish" : "Next"}
          </ThemeButton>
        )}
      </div>
    </div>
  );
};

export default LinaerStepper;
