import { connectToDB } from "@utils/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import sendMail from "@/helpers/mailer"; // Import the sendMail function

export async function POST(req) {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { email } = reqBody;
    console.log("req:", reqBody);
    // Check if user already exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "Email not found" }, { status: 400 });
    }

    // Send verification email
    const hashedToken = await bcryptjs.hash(user._id.toString(), 10);

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      },
      { new: true } // Return the updated user
    );

    // Use the sendMail function to send the email
    const success = await sendMail(
      "Password Recovery",
      "develop@brandsjar.com",
      `<p>Hi ${user.ownerName} , Click <a href="${process.env.DOMAIN}/resetPassword?token=${hashedToken}">here</a> to reset your password or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/resetPassword?token=${hashedToken} </p>`
    );

    if (!success) {
      // Handle email sending failure
      return NextResponse.json(
        { error: "Email sending failed" },
        { status: 500 }
      );
    }

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
