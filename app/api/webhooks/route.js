import Stripe from "stripe";
import { connectToDB } from "@utils/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@helpers/getDataFromToken";
import sendMail from "@/helpers/mailer"; // Import the sendMail function
import { getProdName, formatDate } from "@helpers/foodCalc";
import { Error } from "mongoose";
import { headers } from "next/headers";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    console.log("fk yea");
    const payload = await req.text();
    const headersList = headers();
    const sig = headersList.get("stripe-signature");
    let event;
    // console.log("payload", payload, sig);
    try {
      event = stripe.webhooks.constructEvent(
        payload,
        sig,
        "whsec_205f56f60e5267fd420d28721a1cdfd57256fe645b32220beab80df547c9825c"
      );
      console.log("event.type=> /n", event.type);
      if (event.type === "checkout.session.completed") {
        const subscription = await stripe.subscriptions.retrieve(
          event.data.object.subscription
        );
        console.log("subscription", subscription);
      }
    } catch (err) {
      throw new Error(err);
    }

    console.log(event.type);
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.error("error!*** \n \n \n", err);
  }
}
