"use client";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import RoundInput from "@components/roundInput";
import ThemeButton from "@components/themeButton";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleResetPassword = async () => {
    try {
      // Validate passwords
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const token = new URLSearchParams(window.location.search).get("token");
      if (!token) {
        toast.error("Token not found");
        router.push("/");
        return;
      }

      const response = await axios.post("/api/resetPassword", {
        token,
        password,
      });
      if (response.status === 200) {
        toast.success("Password reset successful");
        router.push("/login"); // Redirect to login page
      }
    } catch (error) {
      console.error("Reset password failed:", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Reset password failed, please try again later");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 mb-20 rounded-lg">
      <ToastContainer />
      <div>
        <p className="text-lg text-center  mb-4">Reset Password</p>
        <form className="flex flex-col justify-center">
          <RoundInput
            type="password"
            placeholder="New Password"
            value={password}
            setValue={setPassword}
          />
          <RoundInput
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            className="mt-2"
          />
          <ThemeButton className="mt-4" onClick={handleResetPassword}>
            Reset Password
          </ThemeButton>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
