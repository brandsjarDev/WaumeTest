"use client";
import Link from "next/link";
import ThemeButton from "@components/themeButton";

const OrderSuccessPage = () => {
  return (
    <div className="flex flex-col justify-center w-full space-y-4">
      <h1 className="flex justify-center text-4xl font-hossRound">
        Your Order Placed Successfully!
      </h1>

      <div className="flex justify-center">
        <ThemeButton
          className="w-1/4"
          href="/"
          onClick={() => {
            window.location = "/";
          }}
        >
          Back to Home
        </ThemeButton>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
