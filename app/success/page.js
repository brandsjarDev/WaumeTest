"use client";
import Link from "next/link";
import ThemeButton from "@components/themeButton";
import Image from "next/image";
import paymentsucess from "@public/assets/images/paymentsuccess.jpg";

const OrderSuccessPage = () => {
  return (
    <div className="flex flex-col justify-center bg-slate-50 py-10 items-center min-h-[500px] w-full space-y-4">
      <h1 className="flex justify-center text-4xl font-hossRound">
        Your Order Placed Successfully!
      </h1>
      <Image src={paymentsucess} alt="paymentsucess" />
      <div className="flex justify-center">
        <ThemeButton
          className=""
          href="/"
          size="xl"
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
