"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { useSelector } from "react-redux";
import { setUserInfo } from "@store/slices/userSlice";
import RoundInput from "@components/roundInput";
import ThemeButton from "@components/themeButton";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import LoginDog from "@public/assets/images/loginDog.png";
import dynamic from "next/dynamic";

// Importing Navbar dynamically with SSR disabled
const DynamicNavbar = dynamic(() => import("@components/Nav"), { ssr: false });

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user.userInfo);
  console.log(auth, user);
  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/login", userData);
      const { user } = response.data;

      await dispatch(login({ isLoggedIn: true }));
      await dispatch(setUserInfo(user));

      router.push("/profile");

      toast.success("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Login failed, please try again later");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center h-full my-10 md:my-20">
        <ToastContainer />
        <div className="flex flex-col items-center w-3/4 md:w-1/2 gap-4">
          <h1 className="text-4xl mb-4 font-hossRound">Login</h1>
          <RoundInput
            type="email"
            name="email"
            placeholder="Email"
            value={userData}
            setValue={setUserData}
            className="w-full md:w-[300px]"
          />
          <RoundInput
            type="password"
            name="password"
            placeholder="Password"
            value={userData}
            setValue={setUserData}
            className="w-full md:w-[300px]"
          />
          <ThemeButton
            className="w-full md:w-[300px]"
            loading={loading}
            onClick={handleLogin}
          >
            Login
          </ThemeButton>
          <Link href="/forgotPassword">Forgot Password?</Link>
          <Image src={LoginDog} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
