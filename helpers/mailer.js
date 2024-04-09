import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { Resend } from "resend";

export const getMailData = async ({ email, emailType, userId }) => {
  try {
    // create a hased token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const mailOptions = {
      from: "onboarding@resend.dev",
      to: "develop@brandsjar.com",
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
              or copy and paste the link below in your browser. <br> ${
                process.env.DOMAIN
              }/verifyemail?token=${hashedToken}
              </p>`,
    };

    return mailOptions;
  } catch (error) {
    throw new Error(error);
  }
};
