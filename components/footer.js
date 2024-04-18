import React from "react";
import Image from "next/image";
import logo from "@public/assets/images/waume-logo-dag.svg";

const Footer = () => {
  return (
    <footer className="md:px-10 pt-10 bg-secondaryLight">
      <div className="grid grid-cols-1 md:grid-cols-5  border-b-[1px] border-slate-500  p-4 mb-5">
        {/* Logo Section (1/4 width) */}
        <div className="col-span-2 flex justify-center items-start">
          <Image src={logo} alt="Logo" />
        </div>

        {/* Lists Section (3/4 width) */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 text-slate-500  text-center md:text-start gap-4 md:gap-8 mt-10 md:mt-0">
          {/* First List */}
          <ul className="space-y-5 mt-10 md:mt-0">
            <li className=" text-black mb-5">Services</li>
            <li>How it works</li>
            <li>Recipies</li>
            <li>Preparation</li>
            <li>Blogs</li>
          </ul>

          {/* Second List */}
          <ul className="space-y-5 mt-10 md:mt-0">
            <li className=" text-black mb-5">Blogs</li>
            <li>Moment Friend</li>
            <li>Belly Buddy</li>
            <li>Belly Buddy Plus</li>
            <li>Veggie Amigo</li>
          </ul>

          {/* Third List */}
          <ul className="space-y-5 mt-10 md:mt-0">
            <li className=" text-black mb-5">Support</li>
            <li>FAQ</li>
            <li>info@waume.at</li>
            <li>+43 699 11343715</li>
          </ul>

          {/* Fourth List */}
          <ul className="space-y-5 mt-10 md:mt-0">
            <li className=" text-black mb-5">Company</li>
            <li>About Us</li>
            <li>Data</li>
            <li>Terms of Service</li>
            <li>Protection</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-slate-500 pb-5">
        © 2024 — Waume
      </div>
    </footer>
  );
};

export default Footer;
