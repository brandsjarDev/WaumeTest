"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { useSelector } from "react-redux";
import { setUserInfo } from "@store/slices/userSlice";
import RoundInput from "@components/roundInput";
import ThemeButton from "@components/themeButton";
import Navbar from "@components/Nav";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import LoginDog from "@public/assets/images/loginDog.png";
import fullBoard from "@public/assets/images/fullBoard.png";
import { Edit } from "lucide-react";
import { formatDate } from "@helpers/foodCalc";

function subscriptionTitle(subscription) {
  let string = "Trial Pack";
  if (subscription == "Per Month") string = "Monthly subscription";
  if (subscription == "Per Three Month") string = "Three Monthly subscription";
  if (subscription == "One Month") string = "One Month Plan";
  if (subscription == "Three Month") string = "Three Month Plan";
  return string;
}
function prodTitle(product) {
  let string = "plan";
  if (product == "horse") string = "Belly Buddy Plus";
  if (product == "beef") string = "Movement Freind";
  if (product == "chicken") string = "Belly Buddy";
  if (product == "veg") string = "Veggie Amigo";
  return string;
}

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user.userInfo);

  console.log("Access Token from Redux:", auth.accessToken, user);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full  my-10 md:my-20">
        <h1 className="text-4xl mb-4 font-hossRound">My account</h1>
        <h3 className="text-2xl text-slate-500 mb-4 font-hossRound border-b-4 border-primary">
          My Plan
        </h3>
        <ToastContainer />
        <div className="relative flex items-center border-2 border-primary rounded-xl w-full md:w-3/4  gap-10 p-5">
          <Image src={fullBoard} />
          <div className="flex-col h-full space-y-4 justify-around">
            <h1 className="text-3xl mb-4 font-hossRound">
              {user?.dogName}'s Plan -{" "}
              {subscriptionTitle(user?.subscriptionTitle)}
            </h1>
            <h2 className="text-xl mb-4 font-hossRound">
              {prodTitle(user?.product)} ({user?.portion} Board)
            </h2>
            <h2 className="text-xl mb-4 font-hossRound">
              Next Delivery:
              <span className="text-slate-500">
                {" "}
                {formatDate(user?.deliveryDate)}
              </span>
            </h2>
          </div>
          <div className="absolute cursor-pointer top-2 right-2">
            <Edit onClick={() => router.push("/form")} />
          </div>
          <div className="absolute cursor-pointer bottom-2 right-2">
            <span className="text-slate-500">
              EUR {user?.subscriptionAmt}/ Month
            </span>
          </div>
        </div>

        <Image src={LoginDog} />
      </div>
    </>
  );
};

export default LoginPage;