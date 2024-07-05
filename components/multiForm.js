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
import CheckoutForm from "./wrappedCheckoutForm";
import ThemeButton from "./themeButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import userSlice from "@store/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "@store/slices/userSlice";
import WarningDialog from "./dailogue";
import axios from "axios";
import { getLcl } from "@helpers/lcl";

const public_stripe_key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(public_stripe_key);

let validationArr = [
  [
    { feild: "ownerName", type: "text", msg: "Name" },
    { feild: "dogName", type: "text", msg: "Name des Haustiers" },
  ],
  [
    { feild: "weight", type: "text", msg: "Gewicht" },
    { feild: "birthYear", type: "text", msg: "Geburtsjahr" },
    { feild: "birthMonth", type: "text", msg: "Geburtsmonat" },
  ],
  [{ feild: "fatLevel", type: "singlecard", msg: "eine Option" }],
  [{ feild: "active", type: "singlecard", msg: "eine Option" }],
  [{ feild: "treat", type: "singlecard", msg: "eine Option" }],
  [
    {
      feild: "allergies",
      type: "multicard",
      msg: "eine Allergie, wenn keine ausgewählt wurde",
    },
  ],
  [
    {
      feild: "illness",
      type: "multicard",
      msg: "eine Krankheit, wenn keine ausgewählt wurde",
    },
  ],
  [{ feild: "product", type: "singlecard", msg: "Produkt" }],
  [{ feild: "portion", type: "singlecard", msg: "Portion" }],

  [{ feild: "subscriptionTitle", type: "singlecard", msg: "Abonnement" }],
  [
    { feild: "email", type: "text", msg: "E-Mail" },
    { feild: "firstName", type: "text", msg: "Vorname" },
    { feild: "lastName", type: "text", msg: "Nachname" },

    { feild: "password", type: "text", msg: "Passwort" },
    { feild: "phoneNumber", type: "text", msg: "Telefonnummer" },
    { feild: "addressLine1", type: "text", msg: "Adresszeile 1" },
    { feild: "addressLine2", type: "text", msg: "Adresszeile 2" },
    { feild: "city", type: "text", msg: "Stadt" },
    { feild: "zipcode", type: "text", msg: "Postleitzahl" },
  ],
];
function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validDate(birthYear, birthMonth) {
  if (
    typeof birthYear != "number" ||
    typeof birthMonth != "number" ||
    birthMonth < 1 ||
    birthMonth > 12 ||
    birthYear < 1900 ||
    birthYear > new Date().getFullYear()
  ) {
    console.log(
      typeof birthYear != "number",
      typeof birthMonth != "number",
      birthMonth < 1,
      birthMonth > 12,
      birthYear < 1900,
      birthYear > new Date().getFullYear()
    );
    toast.error("Ungültiges Datum");
    return false;
  } else return true;
}
function validateAge(birthYear, birthMonth) {
  const birthDate = new Date(birthYear, birthMonth - 1);

  if (isNaN(birthDate.getTime())) {
    console.log("hi");
    return false;
  }

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return birthDate <= oneYearAgo;
}

function getSteps() {
  return ["Über Mich", "Mein Hund", "Plan", "Checkout"];
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
      return <ProductForm formData={formData} setFormData={setFormData} />;
    case 8:
      return <PortionForm formData={formData} setFormData={setFormData} />;

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
      return "Unbekannter Schritt";
  }
}

const LazyHorizontalStepper = React.lazy(() => import("./horizontalStepper"));

const LinaerStepper = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [stepper, setStepper] = useState(1);
  const [loading, setLoading] = useState(true);
  const [shouldLoadHorizontalStepper, setShouldLoadHorizontalStepper] =
    useState(false);
  const [formData, setFormData] = useState(initialValue);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShouldLoadHorizontalStepper(true);
    }
    // document.cookie = "googtrans=/en/de; path=/";
  }, []);

  const getUserDetails = async () => {
    try {
      const res = await axios.post("/api/form");
      if (res.status === 200) {
        await dispatch(setUserInfo(res.data));

        setFormData(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  console.log("formData", formData);

  function validate() {
    if (getLcl("isLoggedIn"))
      validationArr[10] = validationArr[10].filter(
        (item) => item.feild !== "password"
      );

    for (let i = 0; i < validationArr[activeStep].length; i++) {
      const item = validationArr[activeStep][i];

      if (item.type === "text" && !formData[item.feild]) {
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
      if (
        item.feild === "birthYear" &&
        !validDate(formData.birthYear, formData.birthMonth)
      ) {
        return false;
      }
      if (
        item.feild === "birthYear" &&
        !validateAge(formData.birthYear, formData.birthMonth)
      ) {
        setOpen(true);
        // return false;
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
  loading && getUserDetails();
  return (
    <div className="flex-row w-full mb-5 ">
      <ToastContainer />
      <div className="flex gap-10 w-full">
        <div
          className={`hidden md:flex md:flex-col ${
            (activeStep > 1 && activeStep) < 4 ? "justify-center" : ""
          } md:w-1/4 p-1 md:p-4`}
        >
          <Stepper currentStep={stepper} steps={getSteps()} />
        </div>
        <div className="grid grid-cols-1 p-1 md:p-4 mt-0 w-full">
          <div className="flex flex-col md:flex-row justify-center text-center items-center p-5">
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
      <div className="flex flex-col-reverse md:flex-row justify-center w-full gap-5 px-5 mt-10">
        <ThemeButton
          secondary
          disabled={activeStep === 0}
          onClick={handleBack}
          size="xl"
        >
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
      <WarningDialog
        title="Leider müssen wir hier kurz unterbrechen, weil Ihr Hund noch im Wachstum ist."
        content="Wir empfehlen, WAUME erst nach Abschluss des Wachstums in der Höhe zu füttern, was Hunde normalerweise im Alter von 12-15 Monaten abschließen.

    Wenn Ihr Hund das Wachstum abgeschlossen hat oder Ihr Tierarzt grünes Licht gegeben hat, klicken Sie auf 'Weiter', um mit dem Futtergenerator fortzufahren.
    
    Wenn Sie Fragen haben, kontaktieren Sie uns bitte oder Ihren Tierarzt."
        buttonText="Weiter"
        isOpen={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default LinaerStepper;
