import { connectToDB } from "@utils/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { Resend } from "resend";
import * as React from "react";

export async function POST(req) {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { email } = reqBody;
    console.log("req:", reqBody);
    //check if user already exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "Email not found" }, { status: 400 });
    }

    //send verification email
    const hashedToken = await bcryptjs.hash(user._id.toString(), 10);

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      },
      { new: true } // Return the updated user
    );

    const mailOptions = {
      from: "onboarding@resend.dev",
      to: "develop@brandsjar.com",
      subject: "Password recovery",
      html: `<p>Hi ${user.username} , Click <a href="${process.env.DOMAIN}/resetPassword?token=${hashedToken}">here</a> to reset your password
              or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/resetPassword?token=${hashedToken}
              </p>`,
    };

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send(mailOptions);
    console.log(" data, error", data, error);

    return NextResponse.json({
      message: "User forgotpassword token set successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
