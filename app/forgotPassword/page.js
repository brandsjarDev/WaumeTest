"use client";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import RoundInput from "@components/roundInput";
import ThemeButton from "@components/themeButton";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post("/api/forgotPassword", { email });
      if (response.status === 200) {
        toast.success("Password reset email sent successfully");
        // router.push("/login"); // Redirect to login page
      }
    } catch (error) {
      console.error("Forgot password failed:", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Forgot password failed, please try again later");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg mb-20">
      <ToastContainer />

      <p className="text-lg text-center  mb-4">Forgot Password</p>
      <form className="flex flex-col justify-center">
        <RoundInput
          type="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <ThemeButton className="mt-4" onClick={handleForgotPassword}>
          Forgot Password
        </ThemeButton>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
