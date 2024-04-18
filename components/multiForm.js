"use client";
import React, { useState, useEffect, Suspense } from "react";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationArr = [
  [
    { feild: "ownerName", type: "text", msg: "name" },
    { feild: "dogName", type: "text", msg: "Pet's Name" },
  ],
  [{ feild: "weight", type: "text", msg: "weight" }],
  [{ feild: "fatLevel", type: "singlecard", msg: "an option" }],
  [{ feild: "active", type: "singlecard", msg: "an option" }],
  [{ feild: "treat", type: "singlecard", msg: "an option" }],
  [
    {
      feild: "allergies",
      type: "multicard",
      msg: "allergy if not select none",
    },
  ],
  [
    {
      feild: "illness",
      type: "multicard",
      msg: "illness if not select none",
    },
  ],
  [{ feild: "portion", type: "singlecard", msg: "portion" }],
  [{ feild: "product", type: "singlecard", msg: "product" }],
  [{ feild: "subscriptionTitle", type: "singlecard", msg: "subscription" }],
  [
    { feild: "email", type: "text", msg: "email" },

    { feild: "password", type: "text", msg: "password" },
    { feild: "phoneNumber", type: "text", msg: "phoneNumber" },
    { feild: "addressLine1", type: "text", msg: "addressLine1" },
    { feild: "addressLine2", type: "text", msg: "addressLine2" },
    { feild: "city", type: "text", msg: "city" },
    { feild: "state", type: "text", msg: "state" },
    { feild: "zipcode", type: "text", msg: "zipcode" },
  ],
];
function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function getSteps() {
  return ["Me", "My Dog", "Plan", "Checkout"];
}

const checkPoints = [0, 6, 9];

function getStepContent(step, formData, setFormData, validate, toast) {
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
      return (
        <CheckoutForm
          formData={formData}
          setFormData={setFormData}
          validate={validate}
          toast={toast}
        />
      );
    default:
      return "unknown step";
  }
}

const LazyHorizontalStepper = React.lazy(() => import("./horizontalStepper"));

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepper, setStepper] = useState(1);
  const [shouldLoadHorizontalStepper, setShouldLoadHorizontalStepper] =
    useState(false);
  const [formData, setFormData] = useState(initialValue);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShouldLoadHorizontalStepper(true);
    }
  }, []);

  console.log("formData", formData);

  function validate() {
    // console.log(activeStep);
    // toast.error(`Please enter asd`);
    for (let i = 0; i < validationArr[activeStep].length; i++) {
      const item = validationArr[activeStep][i];

      if (item.type === "text" && !formData[item.feild]) {
        // console.log(!formData[item.feild]);
        toast.error(`Please enter ${item.msg}`);
        return false;
      }
      if (item.type === "singlecard" && !formData[item.feild]) {
        toast.error(`Please select ${item.msg}`);
        return false;
      }
      if (item.type === "multicard" && formData[item.feild].length === 0) {
        toast.error(`Please select ${item.msg}`);
        return false;
      }
      if (item.feild === "email" && !validateEmail(formData[item.feild])) {
        toast.error("Please enter a valid email address");
        return false;
      }
    }
    return true;
  }

  const handleNext = () => {
    if (validate()) {
      setFormData(calcFoodWeight(formData));

      if (checkPoints.includes(activeStep)) {
        setStepper((prev) => prev + 1);
      }
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (checkPoints.includes(activeStep - 1)) {
      setStepper((prev) => prev - 1);
    }
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="flex-row w-full mb-5 max-w-[1440px]">
      <ToastContainer />
      <div className="flex gap-10 w-full">
        <div
          className={`hidden md:flex md:flex-col ${
            (activeStep > 1 && activeStep) < 4 ? "justify-center" : ""
          } md:w-1/5 p-1 md:p-4`}
        >
          <Stepper currentStep={stepper} steps={getSteps()} />
        </div>
        <div className="grid grid-cols-1 p-1 md:p-4 mt-0 w-full">
          <div className="flex flex-col md:flex-row  text-center items-center p-5">
            <div className="md:hidden w-[270px]">
              {shouldLoadHorizontalStepper && (
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyHorizontalStepper
                    currentStep={stepper}
                    steps={getSteps()}
                  />
                </Suspense>
              )}
            </div>
            {getStepContent(activeStep, formData, setFormData, validate, toast)}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-evenly w-full gap-5 px-5 mt-10">
        <ThemeButton disabled={activeStep === 0} onClick={handleBack} size="xl">
          Back
        </ThemeButton>
        {activeStep < 10 && (
          <ThemeButton
            disabled={activeStep === 10}
            onClick={handleNext}
            size="xl"
          >
            {activeStep === 9 ? "Finish" : "Next"}
          </ThemeButton>
        )}
      </div>
    </div>
  );
};

export default LinaerStepper;
