import Stripe from "stripe";
import { connectToDB } from "@utils/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@helpers/getDataFromToken";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
async function getProductPriceId(productId) {
  try {
    const product = await stripe.products.retrieve(productId);

    const defaultPriceId = product.default_price;

    const defaultPrice = await stripe.prices.retrieve(defaultPriceId);

    return defaultPrice;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
function getCost(prodType, portion, plan) {
  let num = 0;
  if (prodType === "chicken") num = 12;
  if (prodType === "beef") num = 12;
  if (prodType === "horse") num = 14;
  if (prodType === "veg") num = 11;
  if (portion == "half") num *= 0.5;
  if (plan == "Trial Pack") {
    num = 2500;
  }
  if (plan == "Three Month") {
    num *= 3;
  }
  if (plan == "Per Three Month") {
    num *= 3;
  }

  // Round off num to 2 decimal points

  return num;
}

export async function POST(req) {
  try {
    await connectToDB();

    const obj = await req.json();
    let { name, email, address, unit, product, prodType, portion, plan } =
      obj.stripeData;
    let userData = obj.userData;
    const user = await User.findOne({ email });
    console.log(
      "product",
      product,
      userData.subscriptionTitle == "Per Month" ||
        userData.subscriptionTitle == "Per Three Month"
        ? "subscription"
        : "payment"
    );
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
    const stripePriceObj = await getProductPriceId(product);
    if (plan == "Trial Pack") unit = 1;
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.DOMAIN}/success`,
      cancel_url: `${process.env.DOMAIN}`,
      //   payment_method_types: ["card"],
      mode:
        userData.subscriptionTitle == "Per Month" ||
        userData.subscriptionTitle == "Per Three Month"
          ? "subscription"
          : "payment",
      billing_address_collection: "auto",
      line_items: [
        {
          price: stripePriceObj.id,
          //   price: defaultPrice,
          quantity: Math.floor(unit / 10),

          //   price: amount * 100, // Convert amount to cents
          //   currency: "eur",
          //   name: "Payment", // Name of the payment
        },
      ],
      // metadata: {
      //   userId: auth0UserId,
      // },
      // customer_email: "hello@tricksumo.com",
      customer: customer.id, // Use the customer ID here
    });
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(userData.password, salt);

    userData.subscriptionId = session?.line_items?.data[0]?.subscription;
    userData.stripeId = customer.id;
    userData.password = hashedPassword;

    // res.json({ id: session.id });
    const newUser = new User(userData);
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
