// pages/api/coupons/index.js

import { connectToDB } from "@utils/database";
import Coupon from "@models/coupon";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { code } = await req.json();

  try {
    await connectToDB();

    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return NextResponse.json(
        { success: false, message: "Coupon not found" },
        { status: 404 }
      );
    }

    const currentDate = new Date();
    if (currentDate > coupon.expirationDate) {
      return NextResponse.json(
        { success: false, message: "Coupon has expired" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        coupon,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error applying coupon:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
export const DELETE = async (req, { params }) => {
  await connectToDB();
  console.log("gi");
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    await Coupon.findByIdAndDelete(id);
    return NextResponse.json(
      { success: true, message: "Coupon deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.log("errer!!!", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};

export const GET = async (req, { params }) => {
  await connectToDB();

  try {
    const coupons = await Coupon.find({});
    return NextResponse.json({ success: true, data: coupons }, { status: 200 });
  } catch (error) {
    console.log("errer!!!", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};
export const PUT = async (req, { params }) => {
  const { code, discountPercentage, expirationDate, isActive } =
    await req.json();

  try {
    await connectToDB();
    const newCoupon = new Coupon({
      code,
      discountPercentage,
      expirationDate,
      isActive,
    });

    await newCoupon.save();
    return NextResponse.json(
      { success: true, data: newCoupon },
      { status: 200 }
    );
  } catch (error) {
    console.log("errer!!!", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};
