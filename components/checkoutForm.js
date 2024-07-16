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
import { Subscript } from "lucide-react";
import { getLcl } from "@helpers/lcl";

const public_stripe_key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function CheckoutForm({
  formData,
  setFormData,
  validate,
  toast,
}) {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const isExistingUser = "_id" in formData;

  const calculateTotalOrderPrice = () => {
    const { subscriptionAmt, shippingCost } = formData;

    return (subscriptionAmt + shippingCost).toFixed(2);
  };

  const handleSubscription = async () => {
    setLoading(true);
    const stripePromise = await loadStripe(public_stripe_key);
    const stripeData = {
      name: formData.ownerName,
      email: formData.email,
      address: {
        country: formData.country,
        line1: formData.addressLine1,
        postal_code: formData.zipcode,
        city: formData.city,
      },
      unit: formData.unitPerOrder,
      prodType: formData.product,
      portion: formData.potion,
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
          window.open(response.data.redirectUrl, "_blank");
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
      else
        toast.error(
          "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
        );
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
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
      toast.error(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setCancelLoading(false);
    }
  }

  const options = { day: "2-digit", month: "long", year: "numeric" };
  let formattedDate = "";
  if (formData.deliveryDate) {
    formattedDate = new Date(formData.deliveryDate).toLocaleDateString(
      "de-DE",
      options
    );
  }

  const getSubscriptionWithoutTax = (amount = formData.subscriptionAmt) => {
    const subscriptionAmt = parseFloat(amount);
    if (isNaN(subscriptionAmt) || subscriptionAmt < 0) {
      console.error("Ungültiger Abonnementbetrag");
    }
    if (formData.country == "Switzerland") return subscriptionAmt;
    const subscriptionWithoutTax = subscriptionAmt - subscriptionAmt * 0.13;

    return subscriptionWithoutTax.toFixed(2);
  };

  return (
    <>
      <div className="w-full">
        <h1 className="my-5 text-2xl md:text-4xl text-start font-hossRound">
          Bestellübersicht
        </h1>
        {formData.subscriptionTitle &&
          formData.subscriptionTitle != "Testpaket" && (
            <div className="flex gap-2 font-hossRound md:text-lg">
              <h3>Voraussichtliches Lieferdatum</h3>
              <span>- {formattedDate}</span>
            </div>
          )}
        <div className="flex md:w-1/2 my-10">
          <div className="flex flex-col gap-5 w-full text-lg md:text-2xl">
            <div>
              <div className="flex justify-between">
                <span>{formData.subscriptionTitle}</span>
                <span>
                  €&nbsp;
                  {Number(getSubscriptionWithoutTax()).toFixed(2)}
                </span>
              </div>
              <div className="flex tet-xs md:text-sm">
                {formData.subscriptionTitle.includes("Pro")
                  ? "(Abonnement)"
                  : "(Einmalige Zahlung)"}
              </div>
            </div>
            <div className="flex justify-between">
              <span>Versand</span>
              <span>€ {formData.shippingCost}</span>
            </div>
            {formData.country != "Switzerland" && (
              <div className="flex justify-between">
                <span>Steuer</span>
                <span>
                  € {Number(formData.subscriptionAmt * 0.13).toFixed(2)}
                </span>
              </div>
            )}
            <div class="border-t-[3px] border-primary"></div>
            <div className="flex justify-between">
              <span>GESAMT BESTELLUNGSPREIS</span>
              <span>
                €&nbsp;
                {(formData.subscriptionAmt + formData.shippingCost).toFixed(2)}
              </span>
            </div>
            <span className="text-xs md:text-base text-primary ">
              Du kannst Rabattcodes im nächsten Schritt, im Zahlungsprozess,
              eingeben.
            </span>
          </div>
        </div>

        <div className="flex flex-col text-start my-5 md:my-10">
          {/* Section for three RoundInputs */}
          <span className="my-5 font-hossRound">Benutzerkonto</span>
          <div className="md:w-3/4 grid md:grid-cols-2 gap-5">
            <RoundInput
              id="firstName"
              type="text"
              name="firstName"
              value={formData}
              setValue={setFormData}
              placeholder="Vorname"
            />
            <RoundInput
              id="lastName"
              type="text"
              name="lastName"
              value={formData}
              setValue={setFormData}
              placeholder="Nachname"
            />
            <RoundInput
              id="email"
              type="text"
              name="email"
              value={formData}
              setValue={setFormData}
              placeholder="E-Mail"
            />
            <RoundInput
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={formData}
              setValue={setFormData}
              placeholder="Telefonnummer"
            />
            <RoundInput
              id="companyName"
              type="text"
              name="companyName"
              value={formData}
              setValue={setFormData}
              placeholder="Firmenname (optional)"
            />
            {!getLcl("isLoggedIn") && (
              <>
                <RoundInput
                  id="password"
                  type="password"
                  name="password"
                  value={formData}
                  setValue={setFormData}
                  placeholder="Passwort"
                />
                <RoundInput
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData}
                  setValue={setFormData}
                  placeholder="Passwort bestätigen"
                />
              </>
            )}
          </div>
          {/* Section for RoundInputs for address */}
          <span className="my-5 font-hossRound">Adresse</span>
          <div className="md:w-3/4 grid md:grid-cols-2 items-center gap-5">
            <RoundInput
              id="addressLine1"
              type="text"
              name="addressLine1"
              value={formData}
              setValue={setFormData}
              placeholder="Adresszeile 1"
            />
            <RoundInput
              id="addressLine2"
              type="text"
              name="addressLine2"
              value={formData}
              setValue={setFormData}
              placeholder="Adresszeile 2"
            />
            <RoundInput
              id="city"
              type="text"
              name="city"
              value={formData}
              setValue={setFormData}
              placeholder="Stadt"
            />
            <RoundCountrySelect
              // className="w-[100px] md:w-[150px]"
              label="Land"
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
              placeholder="Postleitzahl"
            />
          </div>
          <div className="flex flex-col text-sm md:text-base text-start mt-5">
            {/* Section for three RoundInputs */}
            <span className="my-5">Abstellgenehmigung</span>
            <Checkbox value={formData} setValue={setFormData} />
          </div>
          <div className="flex flex-col w-3/4 text-start mt-5">
            {/* Section for three RoundInputs */}
            <span className="my-5">Bestellnotizen</span>
            <RoundInput
              id="order"
              name="orderComments"
              value={formData}
              setValue={setFormData}
              placeholder="Bestellkommentare"
              type="paragraph"
            />
          </div>
          <div className="flex flex-col text-start mt-5">
            {/* Section for three RoundInputs */}
            <div className="flex mt-2">
              <input
                type="checkbox"
                checked={checked} // Set the checked state based on the state variable
                onChange={() => setChecked((prev) => !prev)} // Handle changes to the checkbox state
              />
              {/* Label for the checkbox */}
              <label className="ml-2 text-sm md:text-base">
                Mit deiner Bestellung erklärst du dich mit unseren
                <a className="text-blue-400" href="/TnC" target="_blank">
                  {" "}
                  Allgemeinen Geschäftsbedingungen
                </a>{" "}
                und Widerrufsbestimmungen einverstanden. *
              </label>
            </div>
          </div>
          <div className="flex flex-col md:w-3/4 mt-5">
            <ThemeButton
              className="w-full mt-5"
              disabled={!checked}
              onClick={() => {
                validate() && handleSubscription();
              }}
              loading={loading}
            >
              {!isExistingUser
                ? "Bestellung aktualisieren und zahlen "
                : "Jetzt kostenpflichtig bestellen "}
              &nbsp;
            </ThemeButton>
          </div>
          {formData.subscriptionId && (
            <div className="flex justify-center md:w-3/4 mt-5 md:mt-10">
              <ThemeButton
                onClick={() => setOpen(true)}
                loading={cancelLoading}
                size="xl"
              >
                Abonnement kündigen
              </ThemeButton>
            </div>
          )}
          <WarningDialog
            title="Sind Sie sicher, dass Sie das Abonnement kündigen möchten?"
            buttonText="Ja"
            isOpen={open}
            setOpen={setOpen}
            callBack={cancelSubscription}
          />
        </div>
      </div>
    </>
  );
}
