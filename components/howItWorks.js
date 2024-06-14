import React from "react";
import CircleWithImage from "./circledImages";
import chat from "@public/assets/images/chat-round-big.png";
import ParcelTracker from "@public/assets/images/parcel-tracker.png";
import Calendar from "@public/assets/images/calendar.png";
import ThemeButton from "./themeButton";

const HowItWorks = ({ className }) => (
  <>
    <div
      className={`flex flex-col  gap-10  md:justify-between pb-10 pt-10 md:pt-20 px-5 ${className}`}
    >
      <div className="grid col-span-3 flex-col justify-center text-2xl md:text-4xl gap-5 md:gap-10">
        <h1 className="justify-center font-hossRound">Here's how it works</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        {/* First Card */}
        <div className="flex flex-col gap-5 max-w-xs ">
          <div className="flex justify-center">
            <CircleWithImage imageUrl={chat} />
          </div>
          <h2 className="  md:text-lg font-hossRound max-h-10">
            1. TELL US SOMETHING ABOUT YOUR DOG
          </h2>
          <p className=" text-slate-500 text-sm md:text-base">
            Every dog is unique. That's why it's even more important to find out
            what your pet really needs so that they stay healthy and fit in the
            long term.
          </p>
        </div>
        {/* Second Card */}
        <div className="flex flex-col gap-5 max-w-xs">
          <div className="flex justify-center">
            <CircleWithImage imageUrl={ParcelTracker} />
          </div>
          <h2 className="  md:text-lg font-hossRound">
            2. GET YOUR STARTER BOX
          </h2>
          <p className=" text-slate-500 text-xs md:text-base">
            Our starter box contains fresh food for four weeks and everything
            you need to serve it. Get -20% now.
          </p>
        </div>

        {/* Third Card */}
        <div className="flex flex-col gap-5 max-w-xs">
          <div className="flex justify-center">
            <CircleWithImage imageUrl={Calendar} />
          </div>
          <h2 className="md:text-lg font-hossRound">
            3. FRESH FOOD DELIVERED MONTHLY
          </h2>
          <p className=" text-slate-500 text-sm md:text-base">
            Regular deliveries save you the trip to the supermarket. You can
            easily and conveniently receive freshly prepared dog food delivered
            straight to your door.
          </p>
        </div>
      </div>
      {/* Button */}
      <div className="grid justify-center col-span-3">
        <a href="/howItWorks">
          {" "}
          <ThemeButton secondary size="xl">
            Here's how it works
          </ThemeButton>
        </a>
      </div>
    </div>
  </>
);

export default HowItWorks;
