import { connectToDB } from "@utils/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@helpers/getDataFromToken";

export const POST = async (req, { params }) => {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    // Check if user with same email exists
    let user = await User.findOne({ email }).lean();

    if (!user) {
      return Response.json({ error: "User does not exist" }, { status: 400 });
    }
    console.log("User exists", user);

    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return Response.json({ error: "Invalid password" }, { status: 400 });
    }
    console.log(user.password);
    delete user.password;
    delete user.forgotPasswordToken;
    console.log(user.password);

    // Create token data
    const tokenData = {
      id: user._id,
      username: user.ownerName,
      email: user.email,
    };

    // Create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    console.log(tokenData, token);
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      token,
      user,
    });

    // Set HTTP-only cookie to prevent cross-site-scripting
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  const reqBody = await req.json();
  const { token } = reqBody;
  console.log(token);
  const response = NextResponse.json({
    message: "Login successful",
    success: true,
  });
  return response;
};
