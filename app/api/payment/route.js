import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
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
    const obj = await req.json();
    let { name, email, address, unit, product, prodType, portion, plan } = obj;
    const customer = await stripe.customers.create({
      name: name,
      email: email,
      // metadata: {
      //   userId: auth0UserId, // Replace with actual Auth0 user ID
      // },
      address: {
        city: address.city,
        country: address.country,
        line1: address.addressLine1,
        postal_code: address.zipcode,
        state: address.state,
      },
    });
    if (plan == "Trial Pack") unit = 10;
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.DOMAIN}/success`,
      cancel_url: `${process.env.DOMAIN}`,
      //   payment_method_types: ["card"],
      mode: "payment",
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product: product,
            unit_amount: getCost(prodType, portion, plan),
            // unit_amount_decimal: 14.5,
          },
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

    // res.json({ id: session.id });

    console.log("customer", customer.id);
    return NextResponse.json({
      id: session.id,
      message: "Password reset successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
