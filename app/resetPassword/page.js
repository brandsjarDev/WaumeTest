"use client";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

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

      const token = window.location.search.split("=")[1];
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
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <ToastContainer />
      <div>
        <p className="text-lg  mb-4">Reset Password</p>
        <form>
          <input
            className="block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="block w-full mt-2 rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded"
            type="button"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
