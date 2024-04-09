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
    const { username, email, password } = reqBody;
    console.log("req:", req);
    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    // console.log(savedUser);

    //send verification email
    const hashedToken = await bcryptjs.hash(savedUser._id.toString(), 10);
    await User.findByIdAndUpdate(savedUser._id, {
      verifyToken: hashedToken,
      verifyTokenExpiry: Date.now() + 3600000,
    });
    const mailOptions = {
      from: "onboarding@resend.dev",
      to: "develop@brandsjar.com",
      subject: "Verify your email",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${"verify your email"}
              or copy and paste the link below in your browser. <br> ${
                process.env.DOMAIN
              }/verifyemail?token=${hashedToken}
              </p>`,
    };

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send(mailOptions);
    console.log(" data, error", data, error);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
