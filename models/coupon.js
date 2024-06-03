// models/Coupon.js

import mongoose from "mongoose";

const { Schema } = mongoose;

const couponSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    discountValue: {
      type: Number,
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);

export default Coupon;
