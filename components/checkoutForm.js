"use client";
import React, { useState } from "react";
import RoundCountrySelect from "./roundSelect";
import RoundInput from "@components/roundInput";
import ThemeButton from "./themeButton";
import { useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import "react-toastify/dist/ReactToastify.css";
import WarningDialog from "./dailogue";
import Checkbox from "./checkbox";

const public_stripe_key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function CheckoutForm({
  formData,
  setFormData,
  validate,
  toast,
}) {
  const [loading, setLoading] = useState(false);
  const [discountLoading, setDiscountLoading] = useState(false);

  const [cancelLoading, setCancelLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const isExistingUser = "_id" in formData;
  const applyCoupon = async () => {
    try {
      if (formData.portion == "half") {
        toast.error("Discount only applicable for full portion");
        return;
      }
      if (isExistingUser && formData.couponCode == "FIRST_ORDER") {
        toast.error("Invalid coupon code");
        return;
      }
      setDiscountLoading(true);
      const response = await axios.post("/api/coupon", {
        code: formData.couponCode,
      });

      if (response.status === 200) {
        setFormData({
          ...formData,
          discount: response.data.coupon.discountPercentage,
        });
        console.log(response.data);
        toast.success("Coupon applied successfully!");
      } else {
        setFormData({
          ...formData,
          discount: "",
        });
        toast.error(response.data.message || "Failed to apply coupon.");
      }
    } catch (error) {
      setFormData({
        ...formData,
        discount: "",
      });
      if (error.response && error.response.status === 404) {
        toast.error("Invalid coupon code");
      } else if (error.response && error.response.status === 400) {
        toast.error("Coupon expired");
      } else {
        console.error("Error applying coupon:", error);
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setDiscountLoading(false);
    }
  };
  const calculateTotalOrderPrice = () => {
    const { subscriptionAmt, shippingCost, discount } = formData;
    const discountAmount = discount
      ? getSubscriptionWithoutTax() * (discount / 100)
      : 0;
    return (subscriptionAmt + shippingCost - discountAmount).toFixed(2);
  };

  const handleSubscription = async () => {
    setLoading(true);
    const stripePromise = await loadStripe(public_stripe_key);
    const stripeData = {
      name: formData.ownerName,
      email: formData.email,
      address: {
        city: formData.city,
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
    let response;
    try {
      if (isExistingUser) {
        response = await axios.patch("/api/payment", {
          stripeData,
          userData,
        });
      } else {
        response = await axios.put("/api/payment", {
          stripeData,
          userData,
        });
      }
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
    } finally {
      setLoading(false);
    }
    // }
  };

  async function cancelSubscription() {
    try {
      setCancelLoading(true);
      const response = await axios.post("/api/payment", formData);
      if (response.status == 200) {
        toast.success(response.data.message);
        setFormData({ ...formData, subscriptionId: "" });
      }
      if (response.status == 400) toast.error(response.data.error);
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setCancelLoading(false);
    }
  }

  const options = { day: "2-digit", month: "long", year: "numeric" };
  let formattedDate = "";
  if (formData.deliveryDate) {
    formattedDate = new Date(formData.deliveryDate).toLocaleDateString(
      "en-GB",
      options
    );
  }
  const getSubscriptionWithoutTax = (amount = formData.subscriptionAmt) => {
    const subscriptionAmt = parseFloat(amount);
    if (isNaN(subscriptionAmt) || subscriptionAmt < 0) {
      console.error("Invalid subscription amount");
    }

    const subscriptionWithoutTax = subscriptionAmt - subscriptionAmt * 0.13;

    return subscriptionWithoutTax.toFixed(2);
  };
  return (
    <>
      <div className="w-full">
        <h1 className="my-5 text-2xl md:text-4xl  text-start font-hossRound">
          Order Summary
        </h1>
        {formData.subscriptionTitle &&
          formData.subscriptionTitle != "Trial Pack" && (
            <div className="flex gap-2 font-hossRound md:text-lg">
              <h3 className=" ">Estimated Delivery Date </h3>
              <span>- {formattedDate}</span>
            </div>
          )}
        <div className="flex md:w-1/2 my-10">
          <div className="flex flex-col gap-5 w-full text-lg md:text-2xl">
            <div className="flex justify-between">
              <span className=" ">{formData.dogName}'s Plan</span>
              <span>
                EUR&nbsp;
                {Number(getSubscriptionWithoutTax()).toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className=" ">Shipping</span>
              <span>EUR {formData.shippingCost}</span>
            </div>
            <div className="flex justify-between">
              <span className=" ">Tax </span>
              <span>
                EUR {Number(formData.subscriptionAmt * 0.13).toFixed(2)}
              </span>
            </div>
            {formData.discount && (
              <div className="flex justify-between">
                <span className=" ">Discount&nbsp;({formData.discount}%)</span>
                <span>
                  EUR&nbsp;
                  {(
                    getSubscriptionWithoutTax() *
                    (formData.discount / 100)
                  ).toFixed(2)}
                </span>
              </div>
            )}
            <div class="border-t-[3px]  border-primary"></div>
            <div className="flex justify-between">
              <span className=" ">TOTAL ORDER PRICE</span>
              <span>
                EUR&nbsp;
                {(
                  formData.subscriptionAmt +
                  formData.shippingCost -
                  getSubscriptionWithoutTax() * (formData.discount / 100)
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-start mt-5">
          <span className="my-5 font-hossRound">Coupon Code</span>
          <div className="flex gap-2">
            <RoundInput
              id="couponCode"
              type="text"
              name="couponCode"
              value={formData}
              setValue={setFormData}
              placeholder="Enter coupon code"
            />
            <ThemeButton onClick={applyCoupon} loading={discountLoading}>
              Apply
            </ThemeButton>
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
              id="companyName"
              type="text"
              name="companyName"
              value={formData}
              setValue={setFormData}
              placeholder="Company Name (optional)"
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
              id="city"
              type="text"
              name="city"
              value={formData}
              setValue={setFormData}
              placeholder="City"
            />
            <RoundInput
              id="state"
              type="text"
              name="state"
              value={formData}
              setValue={setFormData}
              placeholder="State"
            />

            <RoundCountrySelect //also sets shipping cost
              // className="w-[100px] md:w-[150px]"
              label="Country"
              name="country"
              value={formData}
              setValue={setFormData}
              // options={countryOptions}
            />
            <RoundInput
              id="zipcode"
              type="number"
              name="zipcode"
              value={formData}
              setValue={setFormData}
              placeholder="Zip Code"
            />
          </div>
          <div className="flex flex-col text-start mt-5 ">
            {/* Section for three RoundInputs */}
            <span className="my-5">Parking Permit</span>
            <Checkbox value={formData} setValue={setFormData} />
          </div>
          <div className="flex flex-col text-start mt-5">
            {/* Section for three RoundInputs */}
            <span className="my-5">Notes on the order</span>
            <RoundInput
              id="order"
              name="orderComments"
              value={formData}
              setValue={setFormData}
              placeholder="Order Comments"
              type="paragraph"
            />
          </div>
          <div className="flex flex-col md:w-3/4 mt-5 md:mt-10">
            <ThemeButton
              className="w-full mt-5"
              onClick={() => {
                validate() && handleSubscription();
              }}
              loading={loading}
            >
              {isExistingUser ? "Update Box for " : "Start First Box for "}
              <span>EUR {calculateTotalOrderPrice()}</span>
            </ThemeButton>
            <p className="my-5  text-slate-400">
              <a href="/TnC">
                By placing your order you agree to our general terms and
                conditions and cancellation policy . *
              </a>
            </p>
          </div>
          {formData.subscriptionId && (
            <div className="flex justify-center md:w-3/4 mt-5 md:mt-10">
              <ThemeButton
                onClick={() => setOpen(true)}
                loading={cancelLoading}
                size="xl"
              >
                Cancel Subscription
              </ThemeButton>
            </div>
          )}
          <WarningDialog
            title="Are you sure you want to cancel the subscription?"
            buttonText="Yes"
            isOpen={open}
            setOpen={setOpen}
            callBack={cancelSubscription}
          />
        </div>
      </div>
    </>
  );
}
