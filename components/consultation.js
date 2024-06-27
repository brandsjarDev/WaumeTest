import React from "react";
import Portrait from "@public/assets/images/Portraits_Auswahl.png";
import Image from "next/image";
import ThemeButton from "./themeButton";
import { cn } from "@/lib/utils";

const Consultation = ({ className }) => (
  <div
    className={cn(
      "relative flex-col md:flex-row flex justify-center py-5 mt-20 md:mt-40 mx-5 md:mx-20",
      className
    )}
  >
    <h1 className="text-2xl  md:hidden text-center  font-hossRound mb-5">
      “Dogs are amazing and deserve <br />
      only the best food so they can
      <br /> live healthy, happy lives.”
    </h1>

    <div className="flex-none z-10">
      <Image src={Portrait} alt="Image" />
    </div>
    <div className="flex flex-col justify-between ml-10 z-10">
      <h1 className="text-4xl hidden md:block mb-5 md:mt-16 font-hossRound">
        “Hunde sind einfach großartig und <br />
        verdienen nur das beste Futter, damit sie ein gesundes und glückliches
        Leben führen können.”
      </h1>
      <div className="flex flex-col">
        <h1 className=" text-2xl md:text-4xl my-5 text-white font-hossRound">
          Persönliches Beratungsgespräch <br /> zu jeder ersten Bestellung.
        </h1>
        <p className="text-white">
          Bestelle deine Starterbox und erhalte zusätzlich ein Beratungsgespräch
          <br />
          mit unserer Ernährungswissenschaftlerin und Hundemama Beatrix.
        </p>
        <a href="/aboutUs">
          {" "}
          <ThemeButton
            secondary
            size="lg"
            className="w-[180px] md:w-[260px] mt-5 hover:border-white"
          >
            Mehr über uns
          </ThemeButton>
        </a>
      </div>
    </div>
    <div className="absolute bottom-0  w-full h-3/4 md:h-1/2 bg-primary rounded-3xl  z-0"></div>
  </div>
);

export default Consultation;
