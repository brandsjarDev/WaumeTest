"use client";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post("/api/forgotPassword", { email });
      if (response.status === 200) {
        toast.success("Password reset email sent successfully");
        router.push("/login"); // Redirect to login page
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
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <ToastContainer />
      <div>
        <p className="text-lg font-bold mb-4">Forgot Password</p>
        <form>
          <input
            className="block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleForgotPassword}
          >
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
