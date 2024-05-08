import Stripe from "stripe";
import { connectToDB } from "@utils/database";
import PaidUser from "@/models/paidUser";
import User from "@/models/user";
import Event from "@/models/event";
import { NextRequest, NextResponse } from "next/server";
import sendMail from "@/helpers/mailer"; // Import the sendMail function
import { getProdName, formatDate } from "@helpers/foodCalc";
import { headers } from "next/headers";
import { ContactSupportOutlined } from "@material-ui/icons";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    await connectToDB();
    console.log("fk yea");
    const payload = await req.text();
    const headersList = headers();
    const sig = headersList.get("stripe-signature");
    let event;
    // console.log("payload", payload, sig);
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      // "whsec_205f56f60e5267fd420d28721a1cdfd57256fe645b32220beab80df547c9825c"
      "whsec_TSRQhbxae1Dz3zuC6hZKJGNvZTSi5dRW"
    );
    console.log("event.type=> /n", event.type);
    if (event.type === "checkout.session.completed") {
      const customerId = event.data.object.customer;
      const subscriptionId = event.data.object.subscription;
      console.log("********8\n\n", subscriptionId);
      const user = await User.findOne({ stripeId: customerId }).lean();
      if (!user) {
        console.log("User not found.");
      } else {
        const savedPaidUser = await PaidUser.findOneAndUpdate(
          { stripeId: customerId },
          { ...user, subscriptionId: subscriptionId },
          { new: true, upsert: true, overwrite: true }
        );

        const {
          _id,
          subscriptionTitle,
          subscriptionAmt,
          createdAt,
          updatedAt,
          unitPerOrder,
          ownerName,
        } = savedPaidUser;

        const event = {
          userId: _id,
          stripeId: customerId,
          subscriptionId,
          subscriptionTitle,
          subscriptionAmt,
          createdAt,
          updatedAt,
          unitPerOrder,
          hasActivePlan: true,
          ownerName,
        };
        const newEvent = new Event(event);
        const savedEvent = await newEvent.save();
        console.log("savedEvent \n \n \n", savedEvent);

        const success = await sendMail(
          "Order placed successfully",
          "develop@brandsjar.com",
          `<p>Hi ${user.ownerName} , your order for ${
            user.subscriptionTitle
          } plan for ${getProdName(
            user.product
          )} is placed successfully, it is estimated to deliver at ${formatDate(
            user.deliveryDate
          )}`
        );

        console.log("Paid User updated:", savedPaidUser);
      }
    }

    // console.log(event.type);
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.error("error!*** \n \n \n", err);
  }
}
