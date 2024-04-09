"use client";
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { calcFoodWeight, initialValue } from "@helpers/foodCalc";
import PersonalInfoForm from "./personalInfo";
import DogInfo from "./dogInfo";
import DogHealth from "./dogHealth";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 3,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 2,
  },
}));

const foodData = [
  { name: "Beef", kcalPer100g: 130 },
  { name: "Horse", kcalPer100g: 110 },
  { name: "Chicken", kcalPer100g: 123 },
  { name: "Veg", kcalPer100g: 126 },
];

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}

const PaymentForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <TextField
        id="horse"
        label="Horse"
        name="horse"
        value={formData.horse}
        onChange={handleInputChange}
        placeholder="Enter Your Card Number"
        fullWidth
        margin="normal"
      />
      <TextField
        id="beef"
        label="Beef"
        name="beef"
        value={formData.beef}
        onChange={handleInputChange}
        placeholder="Enter Your Card Number"
        fullWidth
        margin="normal"
      />
      <TextField
        id="chicken"
        label="Chicken"
        name="chicken"
        value={formData.chicken}
        onChange={handleInputChange}
        placeholder="Enter Your Card Year"
        fullWidth
        margin="normal"
      />
      <TextField
        id="veg"
        label="Veg"
        name="veg"
        value={formData.veg}
        onChange={handleInputChange}
        placeholder="Enter Your Card Year"
        fullWidth
        margin="normal"
      />
    </>
  );
};

function getStepContent(step, formData, setFormData) {
  switch (step) {
    case 0:
      return <PersonalInfoForm formData={formData} setFormData={setFormData} />;
    case 1:
      return <DogInfo formData={formData} setFormData={setFormData} />;
    case 2:
      return <DogHealth formData={formData} setFormData={setFormData} />;
    case 3:
      return <PaymentForm formData={formData} setFormData={setFormData} />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const [formData, setFormData] = useState(initialValue);

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setFormData(calcFoodWeight(formData));
    if (activeStep === steps.length - 1) {
      // Perform final step actions here
      console.log("Final step");
    }
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  console.log("formData", formData);
  return (
    <div
      className="flex w-full h-full justify-center align-center p-1 md:p-4"
      suppressHydrationWarning={true}
    >
      <div className="flex h-full p-1 md:p-4">
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          connector={<QontoConnector />}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconProps={{
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  },
                }}
              >
                <div className="step-label-content">{step}</div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
      <div className="flex p-1 md:p-4 w-3/4">
        <form className="w-full">
          {getStepContent(activeStep, formData, setFormData)}
          <div className="flex justify-between mt-5">
            <div className="flex gap-4">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                back
              </Button>

              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
            <div className="flex-col gap-3">
              <div className="flex gap-2">
                Calculation
                {formData.fatLevel == "high" && <> (well padded -5%)</>}
                {formData.fatLevel == "low" && <> (skinny +5%)</>}
                {formData.active == "high" && <> (highly activeness +10%)</>}
                {formData.active == "low" && <> (low activeness -10%)</>}
                {formData.treat == "normal" && <> (normal amt treats -10%)</>}
                {formData.treat == "high" && <>(large amt treats -20%)</>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinaerStepper;
