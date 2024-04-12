import ThemeButton from "./themeButton";
import CircleWithImage from "./circledImages";
import chat from "@public/assets/images/chat-round-big.png";
import ParcelTracker from "@public/assets/images/parcel-tracker-svgrepo-com.png";
import Calendar from "@public/assets/images/calendar.png";
import fresh1 from "@public/assets/images/fresh1.png";
import fresh2 from "@public/assets/images/fresh2.png";

import fresh3 from "@public/assets/images/fresh3.png";
import fresh4 from "@public/assets/images/fresh4.png";
import fresh5 from "@public/assets/images/fresh5.png";

const FreshFood = () => (
  <>
    <div className="flex flex-col justify-center items-center bg-secondary gap-10 md:gap-15  mt-10 md:mt-20 py-20 md:px-10">
      <div className="flex flex-col w-full md:flex-row justify-between items-center text-center gap-8 md:gap-16 md:px-15">
        <h2 className="flex text-2xl md:text-4xl  font-hossRound font-semibold">
          Great Food For Great Dogs
        </h2>
        <p className=" text-base md:text-lg text-slate-500 font-hossRound font-semibold">
          All animals are in the best condition and vaccinated as always
        </p>
        <ThemeButton size="xl">Get Started</ThemeButton>
      </div>{" "}
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-white py-20 gap-5 md:gap-5">
      {/* First Card */}
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 mb-0 md:mb-16">
        <CircleWithImage imageUrl={fresh1} className="w-auto" />
        <h2 className="flex text-center justify-center text-base font-hossRound font-semibold">
          Without The Addition Of Preservatives
        </h2>
      </div>
      {/* Second Card */}
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 mt-0 md:mt-10">
        <CircleWithImage imageUrl={fresh2} />
        <h2 className="flex text-center justify-center text-base font-hossRound font-semibold">
          100% Fresh And Regional Ingredients
        </h2>
      </div>
      {/* Third Card */}
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 mb-0 md:mb-16">
        <CircleWithImage imageUrl={fresh3} />
        <h2 className="flex text-center justify-center text-base font-hossRound font-semibold">
          Individually Prepared In Own Production
        </h2>
      </div>
      {/* Fourth Card */}
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 mt-0 md:mt-10">
        <CircleWithImage imageUrl={fresh4} />
        <h2 className="flex text-center justify-center text-base font-hossRound font-semibold">
          Optimal Supply Of Vitamins & Minerals
        </h2>
      </div>
      {/* Fifth Card */}
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 mb-0 md:mb-16">
        <CircleWithImage imageUrl={fresh5} className="w-20" />
        <h2 className="flex text-center justify-center text-base font-hossRound font-semibold">
          Co2 Neutral Shipping
        </h2>
      </div>
    </div>
  </>
);

export default FreshFood;
