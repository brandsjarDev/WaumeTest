import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "PaidUser" },
  stripeId: {
    type: String,
    required: [true, "Please provide stripeId"],
    default: "",
  },
  ownerName: {
    type: String,
    required: [true, "Please provide ownerName"],
    default: "",
  },

  subscriptionTitle: {
    type: String,
    required: [true, "Please provide plan"],
    default: "",
  },
  subscriptionId: {
    type: String,
    required: false,
    default: "",
  },
  unitPerOrder: {
    type: Number,
    required: [true, "Please provide an unitPerOrder"],
  },
  hasActivePlan: {
    type: Boolean,
    required: [true, "Please provide hasActivePlan"],
    default: false,
  },
  subscriptionAmt: {
    type: Number,
    required: [true, "Please provide subscriptionAmt"],
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: null,
  },
  subscriptionEndsAt: {
    type: Date,
    required: false,
    default: null,
  },
});

const Event = mongoose.models.events || mongoose.model("events", eventSchema);

export default Event;
