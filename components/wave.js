"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Wave = ({ className, color = "#e9e7e5" }) => {
  return (
    <div className={cn("bg-[#FFFFFF] w-full", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={color}
          fillOpacity="1"
          d="M0,192L34.3,176C68.6,160,137,128,206,101.3C274.3,75,343,53,411,69.3C480,85,549,139,617,176C685.7,213,754,235,823,250.7C891.4,267,960,277,1029,266.7C1097.1,256,1166,224,1234,176C1302.9,128,1371,64,1406,32L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
