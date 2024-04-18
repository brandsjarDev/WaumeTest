import React from "react";
import CircleWithImage from "./circledImages";
import chat from "@public/assets/images/chat-round-big.png";
import ParcelTracker from "@public/assets/images/parcel-tracker-svgrepo-com.png";
import Calendar from "@public/assets/images/calendar.png";
import ThemeButton from "./themeButton";

const HowItWorks = () => (
  <>
    <div className="flex flex-col justify-center gap-10 md:gap-15 mt-20 md:mt-40 px-5">
      <div className="flex flex-col justify-center  text-2xl md:text-4xl gap-5 md:gap-10">
        <h1 className="flex justify-center font-hossRound">
          Here's how it works
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-10">
        {/* First Card */}
        <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 mb-0 md:mb-16">
          <CircleWithImage imageUrl={chat} />
          <h2 className="flex text-center justify-center text-lg font-hossRound ">
            TELL US SOMETHING ABOUT YOUR DOG
          </h2>
          <p className="text-center text-slate-500 font-hossRound ">
            Every dog is unique. That's why it's even more important to find out
            what your pet really needs so that they stay healthy and fit in the
            long term.
          </p>
        </div>
        {/* Second Card */}
        <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 mt-0 md:mt-10">
          <CircleWithImage imageUrl={ParcelTracker} />
          <h2 className="flex text-center justify-center text-lg font-hossRound ">
            GET YOUR STARTER BOX
          </h2>
          <p className="text-center text-slate-500 font-hossRound ">
            Our starter box contains fresh food for four weeks and everything
            you need to serve it. Get -20% now.
          </p>
        </div>
        {/* Third Card */}
        <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 mb-0 md:mb-16">
          <CircleWithImage imageUrl={Calendar} />
          <h2 className="flex text-center justify-center text-lg font-hossRound ">
            FRESH FOOD DELIVERED MONTHLY
          </h2>
          <p className="text-center text-slate-500 font-hossRound ">
            Regular deliveries save you the trip to the supermarket. You can
            easily and conveniently receive freshly prepared dog food delivered
            straight to your door.
          </p>
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center">
        <ThemeButton size="xl">Get Started</ThemeButton>
      </div>
    </div>
  </>
);

export default HowItWorks;
