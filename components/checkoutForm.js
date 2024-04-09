"use client";
import React, { useState } from "react";
import BasicSelect from "./themeSelect";
import RoundInput from "@components/roundInput";
import ThemeButton from "./themeButton";
import { useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const public_stripe_key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
function getProdId(prod) {
  if (prod == "chicken") return "prod_PtInW7Kz4dGcnk";
  else if (prod == "beef") {
    return "prod_PtFsIFJYk9wCet";
  } else if (prod == "horse") {
    return "prod_PtFvZI2HQY8UTL";
  } else return "prod_PtFwbhFRmmy9CH";
}
export default function CheckoutForm({ formData, setFormData }) {
  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
    phoneNo: "",
    street: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipcode: "",
  });

  console.log("formValues", formValues);
  const handleSubscription = async () => {
    const stripePromise = await loadStripe(public_stripe_key);

    try {
      const response = await axios.post("/api/payment", {
        name: formData.ownerName,
        email: formData.email,
        address: formValues,
        unit: formData.product ? formData[formData.product] : "0",
        product: getProdId(formData.product),
        prodType: formData.product,
        portion: formData.portion,
        plan: formData.subscriptionTitle,
      });

      if (response.status === 409) {
        if (response.data && response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl;
        }
      } else {
        const session = response.data;
        stripePromise.redirectToCheckout({
          sessionId: session.id,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  return (
    <>
      <div className="">
        <ToastContainer />
        <h1 className="my-5 text-4xl font-bold font-hossRound">
          Order Summary
        </h1>
        <div className="flex gap-2 font-hossRound text-lg">
          <h3 className="font-semibold ">Estimated Delivery Date </h3>
          <span>- 14 April 2024</span>
        </div>
        <div className="flex w-1/2 mt-10">
          <div className="flex flex-col gap-5 w-full text-2xl">
            <div className="flex justify-between">
              <span className="font-semibold ">{formData.dogName}'s Plan</span>
              <span>
                EUR{" "}
                {Number(
                  formData.subscriptionAmt - formData.subscriptionAmt * 0.13
                ).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className=" ">Shipping</span>
              <span>EUR 0</span>
            </div>
            <div className="flex justify-between">
              <span className=" ">Tax</span>
              <span>
                EUR {Number(formData.subscriptionAmt * 0.13).toFixed(2)}
              </span>
            </div>
            <div class="border-t-[3px]  border-primary"></div>
            <div className="flex justify-between">
              <span className="font-semibold ">TOTAL ORDER PRICE</span>
              <span>EUR {formData.subscriptionAmt}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-10">
          {/* Section for three RoundInputs */}
          <span className="my-5 font-semibold font-hossRound">
            User Account
          </span>

          <div className="w-3/4 grid grid-cols-2 gap-5">
            <RoundInput
              id="password"
              type="text"
              name="password"
              value={formValues}
              setValue={setFormValues}
              placeholder="Password"
              required
            />
            <RoundInput
              id="confirmPassword"
              type="text"
              name="confirmPassword"
              value={formValues}
              setValue={setFormValues}
              placeholder="Confirm Password"
              required
            />
            <RoundInput
              id="phoneNo"
              type="text"
              name="phoneNo"
              value={formValues}
              setValue={setFormValues}
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Section for RoundInputs for address */}
          <span className="my-10 font-semibold font-hossRound">Address</span>
          <div className="w-3/4 grid grid-cols-2 gap-5">
            <RoundInput
              id="addressLine1"
              type="text"
              name="addressLine1"
              value={formValues}
              setValue={setFormValues}
              placeholder="Address Line 1"
              required
            />
            <RoundInput
              id="addressLine2"
              type="text"
              name="addressLine2"
              value={formValues}
              setValue={setFormValues}
              placeholder="Address Line 2"
              required
            />

            <RoundInput
              id="city"
              type="text"
              name="city"
              value={formValues}
              setValue={setFormValues}
              placeholder="City"
              required
            />
            <RoundInput
              id="state"
              type="text"
              name="state"
              value={formValues}
              setValue={setFormValues}
              placeholder="State"
              required
            />
            <RoundInput
              id="zipcode"
              type="text"
              name="zipcode"
              value={formValues}
              setValue={setFormValues}
              placeholder="Zip Code"
              required
            />
          </div>
          <div className="flex w-3/4">
            <ThemeButton className="w-full mt-5" onClick={handleSubscription}>
              Start First Box for EUR {formData.subscriptionAmt}
            </ThemeButton>
          </div>
        </div>
      </div>
    </>
  );
}
