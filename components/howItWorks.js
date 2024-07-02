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
        <h1 className="justify-center font-hossRound">So funktioniert’s</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        {/* First Card */}
        <div className="flex flex-col gap-5 max-w-xs ">
          <div className="flex justify-center">
            <CircleWithImage imageUrl={chat} />
          </div>
          <h2 className="  md:text-lg font-hossRound max-h-10">
            1. ERZÄHLE UNS ETWAS ÜBER DEINEN HUND
          </h2>
          <p className=" text-slate-500 text-sm md:text-base">
            Jeder Hund ist einzigartig. Daher ist es umso wichtiger
            herauszufinden, was dein Liebling wirklich braucht, damit er
            langfristig gesund und fit bleibt.
          </p>
        </div>
        {/* Second Card */}
        <div className="flex flex-col gap-5 max-w-xs">
          <div className="flex justify-center">
            <CircleWithImage imageUrl={ParcelTracker} />
          </div>
          <h2 className="  md:text-lg font-hossRound">
            2. ERHALTE DEINE STARTERBOX
          </h2>
          <p className=" text-slate-500 text-xs md:text-base">
            Unsere Starterbox enthält Frischfutter für vier Wochen und alles
            Notwendige um es zu servieren. Los gehts!
          </p>
        </div>

        {/* Third Card */}
        <div className="flex flex-col gap-5 max-w-xs">
          <div className="flex justify-center">
            <CircleWithImage imageUrl={Calendar} />
          </div>
          <h2 className="md:text-lg font-hossRound">
            3. FRISCHFUTTER MONATLICH GELIEFERT
          </h2>
          <p className=" text-slate-500 text-sm md:text-base">
            Regelmäßige Lieferungen ersparen dir den Weg zum Supermarkt. Einfach
            und bequem erhältst du frisch zubereitetes Hundefutter direkt vor
            deine Haustüre geliefert.
          </p>
        </div>
      </div>
      {/* Button */}
      <div className="grid justify-center col-span-3">
        <a href="/howItWorks">
          {" "}
          <ThemeButton secondary size="xl">
            So funktioniert's
          </ThemeButton>
        </a>
      </div>
    </div>
  </>
);

export default HowItWorks;
