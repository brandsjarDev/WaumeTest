"use client";
import React, { useState } from "react";
import BasicSelect from "./themeSelect";
import RoundInput from "@components/roundInput";
import ThemeButton from "./themeButton";
import { useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import "react-toastify/dist/ReactToastify.css";
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  Elements,
} from "@stripe/react-stripe-js";

const public_stripe_key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(public_stripe_key);
function getProdId(prod) {
  if (prod == "chicken") return "prod_PtInW7Kz4dGcnk";
  else if (prod == "beef") {
    return "prod_PtFsIFJYk9wCet";
  } else if (prod == "horse") {
    return "prod_PtFvZI2HQY8UTL";
  } else return "prod_PtFwbhFRmmy9CH";
}
export default function CheckoutForm({
  formData,
  setFormData,
  validate,
  toast,
}) {
  const stripe = useStripe();
  const elements = useElements();
  // const [formData, setFormData] = useState({
  //   password: "",
  //   confirmPassword: "",
  //   phoneNo: "",
  //   street: "",
  //   addressLine1: "",
  //   addressLine2: "",
  //   city: "",
  //   state: "",
  //   zipcode: "",
  // });
  const handleSubscription = async () => {
    // const cardNumberElement = elements.getElement(CardNumberElement);
    // const cardExpiryElement = elements.getElement(CardExpiryElement);
    // const cardCvcElement = elements.getElement(CardCvcElement);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardNumberElement,
    // });

    // if (error) {
    //   console.error("Error creating payment method:", error);
    //   toast.error("An error occurred while processing your payment.");
    //   return;
    // } else {
    // console.log("paymentMethod", paymentMethod);

    const stripePromise = await loadStripe(public_stripe_key);
    const stripeData = {
      // paymentMethodId: paymentMethod.id,
      name: formData.ownerName,
      email: formData.email,
      address: {
        country: formData.country,
        line1: formData.addressLine1,
        postal_code: formData.zipcode,
        state: formData.state,
      },
      unit: formData.unitPerOrder,
      prodType: formData.product,
      portion: formData.portion,
      plan: formData.subscriptionTitle,
    };
    const userData = { ...formData };
    try {
      const response = await axios.post("/api/payment", {
        stripeData,
        userData,
      });
      console.log(response.status, response.data);
      if (response.status == 400) toast.error(response.data.error);
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
      if (error?.response?.status == 400)
        toast.error(error.response.data.error);
      else toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
    // }
  };
  return (
    <>
      <div className="w-full">
        <h1 className="my-5 text-2xl md:text-4xl  text-start font-hossRound">
          Order Summary
        </h1>
        <div className="flex gap-2 font-hossRound md:text-lg">
          <h3 className=" ">Estimated Delivery Date </h3>
          <span>- 14 April 2024</span>
        </div>
        <div className="flex md:w-1/2 mt-10">
          <div className="flex flex-col gap-5 w-full text-xl md:text-2xl">
            <div className="flex justify-between">
              <span className=" ">{formData.dogName}'s Plan</span>
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
              <span className=" ">TOTAL ORDER PRICE</span>
              <span>EUR {formData.subscriptionAmt}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-start my-5 md:my-10">
          {/* Section for three RoundInputs */}
          <span className="my-5  font-hossRound">User Account</span>
          <div className="md:w-3/4 grid md:grid-cols-2 gap-5">
            <RoundInput
              id="email"
              type="text"
              name="email"
              value={formData}
              setValue={setFormData}
              placeholder="Email"
            />

            <RoundInput
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={formData}
              setValue={setFormData}
              placeholder="Phone Number"
            />

            <RoundInput
              id="password"
              type="password"
              name="password"
              value={formData}
              setValue={setFormData}
              placeholder="Password"
            />
            <RoundInput
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData}
              setValue={setFormData}
              placeholder="Confirm Password"
            />
          </div>
          {/* Section for RoundInputs for address */}
          <span className="my-5  font-hossRound">Address</span>
          <div className="md:w-3/4 grid md:grid-cols-2 items-center gap-5">
            <RoundInput
              id="addressLine1"
              type="text"
              name="addressLine1"
              value={formData}
              setValue={setFormData}
              placeholder="Address Line 1"
            />
            <RoundInput
              id="addressLine2"
              type="text"
              name="addressLine2"
              value={formData}
              setValue={setFormData}
              placeholder="Address Line 2"
            />
            <RoundInput
              id="state"
              type="text"
              name="state"
              value={formData}
              setValue={setFormData}
              placeholder="State"
            />
            <RoundInput
              id="country"
              type="text"
              name="country"
              value={formData}
              setValue={setFormData}
              placeholder="Country"
            />
            <RoundInput
              id="zipcode"
              type="number"
              name="zipcode"
              value={formData}
              setValue={setFormData}
              placeholder="Zip Code"
            />{" "}
          </div>{" "}
          <span className="my-5  font-hossRound">Credit Card Details</span>
          <div className="md:w-3/4 grid md:grid-cols-2 items-center gap-5">
            <div className="mx-4 px-2  h-[40px] content-center rounded-full block border-[1px]  text-primary border-slate-500">
              <CardNumberElement
                options={{
                  placeholder: "Card Number",
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#32325d",
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                  },
                }}
              />
            </div>
            <div className="mx-4 px-2  h-[40px] content-center rounded-full block border-[1px]  text-primary border-slate-500">
              <CardCvcElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#32325d",
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                  },
                }}
              />
            </div>
            <div className="mx-4 px-2  h-[40px] content-center rounded-full block border-[1px]  text-primary border-slate-500">
              <CardExpiryElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#32325d",
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="flex md:w-3/4 mt-5 md:mt-10">
            <ThemeButton
              className="w-full mt-5"
              onClick={() => {
                validate() && handleSubscription();
              }}
            >
              Start First Box for EUR {formData.subscriptionAmt}
            </ThemeButton>
          </div>
        </div>
      </div>
    </>
  );
}
