"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@public/assets/images/waume-logo-dag.svg";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import from 'next/router' instead of 'next/navigation'

const Navbar = ({ className = "bg-white" }) => {
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = (event) => {
    const relatedTarget = event.relatedTarget || event.toElement;
    if (relatedTarget && dropdownRef.current.contains(relatedTarget)) {
      // If mouse is leaving to the dropdown menu, do not close it
      return;
    }

    setShowDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={`z-50 hidden md:block sticky p-5 top-0 ${className}`}>
        <style>
          {`
          @media only screen and (min-width: 768px){
            .parent:hover .child {
              opacity:1;
              height:auto;
              overflow:none;
              transform: translateY(0);
            }
            .child {
              opacity:0;
              height:0;
              overflow:hidden;
              transform: translateY(-10%);
            }
          }
          `}
        </style>
        <div className="max-w-screen-xl mx-auto flex justify-around items-center ">
          <div className="flex justify-center">
            <Link href="/">
              <Image src={logo} height={50} alt="logo" />
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center py-2">
              <ul className="flex flex-col font-hossRound p-4 md:p-0 mt-4 text-gray-500 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/howItWorks"
                    className="block py-2 px-3  rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    onClick={() => console.log("hii")}
                  >
                    How it works
                  </Link>
                </li>
                <li className="relative parent">
                  <a
                    href="#"
                    className="flex justify-between md:inline-flex items-center hover:bg-gray-50 space-x-2"
                  >
                    <span>Products</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                    </svg>
                  </a>
                  <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b">
                    <li>
                      <Link
                        href="products/Movement-Freind"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Movement Freind
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="products/Belly-Buddy"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Belly Buddy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="products/Belly-Buddy-Plus"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Belly Buddy Plus
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="products/Veggies-Amigo"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Veggies Amigo
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/preparation"
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
              className="w-[151px] h-[40px] ml-4 bg-primary text-white  hover:bg-[#4baead] rounded-md"
              onClick={() => router.push("/enquiry")}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <nav className="bg-white z-50 shadow-md sticky top-0 md:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex items-center py-2 space-x-3 ">
            <Image src={logo} alt="logo" height={40} />
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
                  className="block py-2 px-3  text-white bg-primary rounded md:bg-transparent md:text-blue-700 md:p-0 "
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
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative">
                  <a className="block py-2 px-3 rounded md:p-0">Products</a>
                  {showDropdown && (
                    <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                      <Link
                        href="products/Movement-Freind"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Movement Freind
                      </Link>
                      <Link
                        href="products/Belly-Buddy"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Belly Buddy
                      </Link>
                      <Link
                        href="products/Belly-Buddy-Plus"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Belly Buddy Plus
                      </Link>
                      <Link
                        href="products/Veggies-Amigo"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Veggies Amigo
                      </Link>
                    </div>
                  )}
                </div>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
