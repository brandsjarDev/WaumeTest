import Stripe from "stripe";
import { connectToDB } from "@utils/database";
import User from "@/models/user";
import Event from "@/models/event";

import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@helpers/getDataFromToken";
import sendMail from "@/helpers/mailer"; // Import the sendMail function
import { getProdName, formatDate } from "@helpers/foodCalc";
import PaidUser from "@models/paidUser";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function getNearestFifthDate() {
  const currentDate = new Date();

  let currentMonth = currentDate.getMonth(); // Incrementing month to get next month
  let currentYear = currentDate.getFullYear();
  const anchorDate = 5;

  if (currentDate.getDate() >= anchorDate) {
    currentMonth++;
    if (currentMonth === 12) {
      currentMonth = 0;
      currentYear++;
    }
  }

  const upcomingFifthDateOfMonth = new Date(
    currentYear,
    currentMonth,
    anchorDate
  );

  const upcomingFifthDateTimeStamp = upcomingFifthDateOfMonth.getTime() / 1000;

  return upcomingFifthDateTimeStamp;
}
function getCost(prodType, unit, portion, plan) {
  let num = unit;
  if (prodType === "chicken") num *= 0.012;
  if (prodType === "beef") num *= 0.012;
  if (prodType === "horse") num *= 0.0145;
  if (prodType === "veg") num *= 0.011;
  if (portion == "half") num *= 0.6;

  if (plan == "Trial Pack") {
    num = 25;
  }

  // Round off num to 2 decimal points
  return parseInt(Number(num.toFixed(2)) * 100);
}

function getProdId(prodType) {
  if (prodType === "horse") return "prod_PwRLvWsLASiXaE";
  if (prodType === "veg") return "prod_PwRLSREjV9mj1A";
  if (prodType === "chicken") return "prod_PwRICkgOGmaK34";
  if (prodType === "beef") return "prod_PxRE6stJDFS19r";
  return "prod_PwSQmvSOeLVfwH";
}
export async function PUT(req) {
  try {
    await connectToDB();
    console.log("at PUT");
    const obj = await req.json();
    let { name, email, address, unit, prodType, portion, plan } =
      obj.stripeData;
    let userData = obj.userData;
    const user = await PaidUser.findOne({ email });

    console.log("userData", userData.deliveryDate);
    if (user) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    const customer = await stripe.customers.create({
      name: name,
      email: email,
      // metadata: {
      //   userId: auth0UserId, // Replace with actual Auth0 user ID
      // },
      address: {
        city: address?.city,
        country: address?.country,
        line1: address?.addressLine1,
        postal_code: address?.zipcode,
        state: address?.state,
      },
    });
    const paymentMode =
      plan == "Per Month" || plan == "Per Three Month"
        ? "subscription"
        : "payment";
    const subscriptionPeriod = plan == "Per Month" ? 1 : 3;

    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.DOMAIN}/success`,
      cancel_url: `${process.env.DOMAIN}`,
      payment_method_types: ["card"],
      mode: paymentMode,
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: getCost(prodType, unit, portion, plan),
            ...(paymentMode === "subscription" && {
              recurring: {
                interval: "month",
                interval_count: subscriptionPeriod,
              },
            }),
            product: getProdId(prodType),
          },
          quantity: 1,
        },
      ],
      // metadata: {
      //   creation: true,
      //   cancellation: false,
      //   user: JSON.stringify(userData),
      // },
      ...(paymentMode === "subscription" && {
        subscription_data: {
          billing_cycle_anchor: getNearestFifthDate(),
          proration_behavior: "none",
        },
      }),
      customer: customer.id, // Use the customer ID here
    });
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(userData.password, salt);

    // const subscriptionId = session.subscription;
    // const paymentIntentId = session.payment_intent;
    userData.subscriptionId = session?.line_items?.data[0]?.subscription;
    userData.stripeId = customer.id;
    userData.password = hashedPassword;
    userData.createdAt = new Date();

    // res.json({ id: session.id });
    const newUser = new PaidUser(userData);
    const savedUser = await newUser.save();
    console.log("customer", customer.id);
    return NextResponse.json(
      {
        id: session.id,
        user: savedUser,
        message: "User created",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("error!", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function PATCH(req) {
  try {
    await connectToDB();
    console.log("at PATCH");

    const obj = await req.json();
    let { email, unit, prodType, portion, plan } = obj.stripeData;
    let userData = obj.userData;
    const userDataToUpdate = { ...userData, updatedAt: new Date() }; // Create a copy of userData

    delete userDataToUpdate.password;
    delete userDataToUpdate.email;
    const user = await PaidUser.findOne({ email });

    const validPassword = await bcryptjs.compare(
      userData.password,
      user.password
    );
    if (!validPassword) {
      return Response.json({ error: "Invalid password" }, { status: 400 });
    }

    const subscriptions = await stripe.subscriptions.list({
      customer: user.stripeId,
    });
    let billingCycleAnchor = getNearestFifthDate();
    if (subscriptions.data.length > 0) {
      let activeSubscriptionId;
      // console.log("data", subscriptions.data);

      await Promise.all(
        subscriptions.data.map(async (subscription) => {
          if (subscription.status === "active") {
            await stripe.subscriptions.update(subscription.id, {
              cancel_at_period_end: true,
              proration_behavior: "none",
            });
            activeSubscriptionId = subscription.id;
          } else
            await stripe.subscriptions.update(subscription.id, {
              cancel_now: true,
            });
        })
      );

      const activeSubscription = await stripe.subscriptions.retrieve(
        activeSubscriptionId
      );
      console.log("activeSubscription", activeSubscription);

      if (activeSubscription) {
        billingCycleAnchor = activeSubscription.current_period_end;
      } else {
        billingCycleAnchor = getNearestFifthDate();
      }
    }
    const paymentMode =
      plan == "Per Month" || plan == "Per Three Month"
        ? "subscription"
        : "payment";
    const subscriptionPeriod = plan == "Per Month" ? 1 : 3;

    // 2. Create a new subscription
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.DOMAIN}/success`,
      cancel_url: `${process.env.DOMAIN}`,
      payment_method_types: ["card"],
      mode: paymentMode,
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: getCost(prodType, unit, portion, plan),
            ...(paymentMode === "subscription" && {
              recurring: {
                interval: "month",
                interval_count: subscriptionPeriod,
              },
            }),
            product: getProdId(prodType),
          },
          quantity: 1,
        },
      ],
      ...(paymentMode === "subscription" && {
        subscription_data: {
          billing_cycle_anchor: billingCycleAnchor,
          proration_behavior: "none",
        },
      }),
      customer: user.stripeId,
    });

    // Save the updated user details
    // const newUser = new User(userData);
    // const savedUser = await newUser.save();
    await PaidUser.updateOne({ email }, { $set: userDataToUpdate });

    return NextResponse.json(
      {
        id: session.id,
        // user: savedUser,
        message: "User updated",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("error! ***", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    let user = await req.json();
    const email = user.email;
    console.log(user);
    const subscription = await stripe.subscriptions.retrieve(
      user.subscriptionId
    );
    console.log("subscription", subscription);
    await stripe.subscriptions.update(user.subscriptionId, {
      cancel_at_period_end: true,
    });

    const updatedUser = await PaidUser.updateOne(
      { email },
      { $set: { subscriptionId: "", hasActivePlan: false } }
    );
    await PaidUser.updateOne(
      { email },
      { $set: { subscriptionId: "", hasActivePlan: false } }
    );

    const event = {
      userId: user._id,
      stripeId: user.stripeId,
      subscriptionId: "",
      subscriptionTitle: user.subscriptionTitle,
      subscriptionAmt: 0,
      unitPerOrder: 0,
      updatedAt: new Date(),
      hasActivePlan: false,
    };
    const newEvent = new Event(event);
    const savedEvent = await newEvent.save();

    console.log(updatedUser);
    return NextResponse.json(
      {
        message:
          "Subscription cancelled successfully,subscription will end at end of billing cycle",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
