import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(request) {
  try {
    await connectToDB();

    const reqBody = await request.json();
    let { token } = reqBody;

    // Decode the token if it's URL encoded
    token = decodeURIComponent(token);
    console.log(token);

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      console.log("Invalid token");
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    console.log(user);

    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Password reset successfully",
      success: true,
    });
  } catch (error) {
    console.log("error!!!", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
