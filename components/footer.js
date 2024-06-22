import React from "react";
import Image from "next/image";
import logo from "@public/assets/images/waume-logo-dag.svg";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="md:px-[90px] pt-10 bg-softBlack">
      <div className=" border-slate-500 p-4 mb-5">
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 text-white text-center md:text-start gap-4 md:gap-8 mt-10 md:mt-0">
          <ul className="flex flex-col justify-center space-y-2 mt-10 md:mt-0">
            <li className="mb-5 text-lg">Products</li>
            <li>
              <a href="/products/Movement-Friend">Movement Friend</a>
            </li>
            <li>
              <a href="/products/Belly-Buddy">Belly Buddy</a>
            </li>
            <li>
              <a href="/products/Belly-Buddy-Plus">Belly Buddy Plus</a>
            </li>
            <li>
              <a href="/products/Veggie-Amigo">Veggie Amigo</a>
            </li>
            <li>
              <a href="/howItWorks">How it works</a>
            </li>
            <li>
              <a href="/preparation">Preparation</a>
            </li>
          </ul>
          <ul className="space-y-2 mt-10 md:mt-0">
            <li className="mb-5 text-lg">About Us</li>
            <li>
              <a href="/aboutUs/#about" className="text-white">
                Our goals
              </a>
            </li>
            <li>
              <a href="/aboutUs/#story" className="text-white">
                Our Story
              </a>
            </li>
            <li>
              <a href="/aboutUs/#team" className="text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="/aboutUs/#village" className="text-white">
                Our Village
              </a>
            </li>
          </ul>
          <ul className="space-y-2 mt-10 md:mt-0">
            <li className="mb-5 text-lg">Support</li>
            <li>
              <a href="/faq">Frequently asked questions</a>
            </li>
            <li>
              <a href="mailto:info@waume.at">info@waume.at</a>
            </li>
            <li>
              <a href="tel:+4369911343715">+43 699 11343715</a>
            </li>
          </ul>
          <ul className="space-y-2 mt-10 md:mt-0">
            <li className="mb-5 text-lg">
              <a href="">Company</a>
            </li>
            <li>
              <a href="/aboutUs">About Us</a>
            </li>
            <li>
              <a href="/TnC">Terms of Service</a>
            </li>
            <li>
              <a href="/dataProtection">Privacy Policy</a>
            </li>
            <li>
              <a href="/imprint">Imprint</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        translate="no"
        className="flex justify-between text-[#777777] mt-20 mx-5 pb-5"
      >
        © 2024 — Waume{" "}
        <div className="flex">
          <a
            href="https://www.facebook.com/waumedogsaregreat/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/waume_dogsaregreat/?r=nametag"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 cursor-pointer"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
