import ThemeButton from "./themeButton";
import CircleWithImage from "./circledImages";
import chat from "@public/assets/images/chat-round-big.png";
import ParcelTracker from "@public/assets/images/parcel-tracker-svgrepo-com.png";
import Calendar from "@public/assets/images/calendar.png";
import fresh1 from "@public/assets/images/fresh1.svg";
import fresh2 from "@public/assets/images/fresh2.svg";
import fresh3 from "@public/assets/images/fresh3.svg";
import fresh4 from "@public/assets/images/fresh4.svg";
import fresh5 from "@public/assets/images/fresh5.svg";

const FreshFood = () => (
  <>
    <div className="flex  justify-center items-center bg-primary  gap-10 md:gap-15  mt-10 md:mt-20 py-10 md:px-10">
      <div className="flex flex-col w-full  justify-between items-center text-center gap-8 md:gap-5 px-5 md:px-15">
        <h2 className="flex text-white font-semibold text-2xl md:text-5xl  font-hossRound ">
          Great Food For Great Dogs
        </h2>
        <p className="text-base md:text-lg  text-white">
          Individually portioned fresh food delivered straight to your doorstep
        </p>
        <a href="/form">
          <ThemeButton className="bg-white text-primary" size="xl">
            Get Started
          </ThemeButton>
        </a>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-white py-20 gap-5 md:gap-5">
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 ">
        <CircleWithImage imageUrl={fresh1} className="w-auto" />
        <h2 className="flex text-center justify-center text-base font-hossRound text-slate-500">
          Without The Addition Of Preservatives
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 ">
        <CircleWithImage imageUrl={fresh2} className="right-10" />
        <h2 className="flex text-center justify-center text-base font-hossRound text-slate-500">
          100% Fresh And Regional Ingredients
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 ">
        <CircleWithImage imageUrl={fresh3} />
        <h2 className="flex text-center justify-center text-base font-hossRound text-slate-500">
          Individually Prepared In Own Production
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 ">
        <CircleWithImage imageUrl={fresh4} />
        <h2 className="flex text-center justify-center text-base font-hossRound text-slate-500">
          Optimal Supply Of Vitamins & Minerals
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center max-w-xs mx-5 gap-5 ">
        <CircleWithImage imageUrl={fresh5} className="w-20" />
        <h2 className="flex text-center justify-center text-base font-hossRound text-slate-500">
          Co2 Neutral Shipping
        </h2>
      </div>
    </div>
  </>
);

export default FreshFood;
