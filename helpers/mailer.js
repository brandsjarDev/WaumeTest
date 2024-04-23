import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail(title, email, body) {
  const mailOptions = {
    from: "onboarding@resend.dev",
    to: email,
    subject: title,
    html: `<p>${body}</p>`,
  };

  try {
    const { data, error } = await resend.emails.send(mailOptions);
    console.log("data, error", data, error);
    return true;
  } catch (error) {
    console.error("error", error);
    return false;
  }
}

export default sendMail;
