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
        “Dogs are amazing and deserve <br />
        only the best food so they can
        <br /> live healthy, happy lives.”
      </h1>
      <div className="flex flex-col">
        <h1 className=" text-3xl md:text-4xl my-5 text-white font-hossRound">
          Personal consultation for every <br /> first order
        </h1>
        <p className="text-white">
          Order your starter box and also receive a consultation with our
          <br />
          nutritionist and dog mom Beatrix.
        </p>
        <ThemeButton
          size="lg"
          className="w-[180px] md:w-[260px] mt-5 bg-primaryLight text-black"
        >
          More about us
        </ThemeButton>
      </div>
    </div>
    <div className="absolute bottom-0  w-full h-3/4 md:h-1/2 bg-primary rounded-3xl  z-0"></div>
  </div>
);

export default Consultation;
