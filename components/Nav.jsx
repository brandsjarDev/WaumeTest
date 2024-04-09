"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import logo from "@public/assets/images/waume-logo-dag.svg";
// import whatsapp from "@/images/whatsapp.svg";
// import phone from "@/images/phone.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import SearchBar from "./SearchBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleNavbar = () => {
    const navbar = document.getElementById("navbar-default");
    navbar.classList.toggle("hidden");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      const navbar = document.getElementById("navbar-default");
      navbar.classList.add("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white z-50 hidden md:block sticky p-4 mt-3 top-0">
        <div className="max-w-screen-xl mx-auto flex justify-around items-center ">
          <div className="flex justify-center">
            <Link href="/">
              <Image src={logo} height={50} alt="logo" />
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center py-2">
              {/* <SearchBar /> */}
              <ul className="flex flex-col font-hossRound p-4 md:p-0 mt-4 text-gray-500 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3  text-white bg-[#1ac5c2] rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                  
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="block py-2 px-3  rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  onClick={() => console.log("hii")}
                >
                  How it works
                </Link>
              </li>
              <li>
          <Link
            href="#"
            className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            Preparation
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            FAQ
          </Link>
        </li>
              
            </ul>
            </div>
          </div>
          <div className="flex justify-evenly">
            <button
              className="w-[151px] h-[40px] ml-4 bg-primary text-white font-semibold hover:bg-[#4baead] rounded-md"
              onClick={() => router.push("/enquiry")}
            >
              Login
            </button>
            {/* <Image
              // src={whatsapp}
              alt="whatsapp"
              width={25}
              height={25}
              className="ml-4"
            />
            <Image
              src={phone}
              alt="phone"
              width={25}
              height={25}
              className="ml-4"
            /> */}
          </div>
        </div>
      </nav>

      <nav className="bg-white z-50 shadow-md sticky top-0 md:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex items-center py-2 space-x-3 ">
            {/* <Image src={logo} alt="logo" height={40} /> */}
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="absolute hidden z-50 transition ease-in-out duration-300 top-12 left-14  w-[270px] md:block md:w-auto"
            id="navbar-default"
            ref={dropdownRef}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white bg-[#1ac5c2] rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  onClick={() => console.log("hii")}
                >
                  Properties
                </Link>
              </li>
              {/* <li>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            Study Abroad
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            Student Finance
          </Link>
        </li> */}
              <li>
                <Link
                  href="/enquiry"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-between">
            {/* <SearchBar /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
