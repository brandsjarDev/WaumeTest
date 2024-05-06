import { connectToDB } from "@utils/database";
import PaidUser from "@/models/paidUser";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@helpers/getDataFromToken";

export const GET = async (req) => {
  try {
    let user = null;
    if (req.cookies.get("token")) {
      await connectToDB();
      const userId = await getDataFromToken(req);
      user = await PaidUser.findOne({ _id: userId }).select("-password");
      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log("error **********", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
