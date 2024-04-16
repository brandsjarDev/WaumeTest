"use client";
import HomeCard from "./homeCard";
import fullBoard from "@public/assets/images/fullBoardHomePage.png";
import halfBoard from "@public/assets/images/halfBoardHomePage.png";

const NutritionNeeds = () => (
  <>
    <div className="flex flex-col justify-center my-10 md:my-20">
      <div className="flex flex-col justify-center font-bold md:text-4xl gap-5 md:gap-10 mb-10 md:mb-20">
        {" "}
        <h1 className="flex text-center text-2xl md:text-4xl font-hossRound justify-center">
          Cover Your Dog’s Daily
          <br />
          Nutritional Needs
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <HomeCard
          title="Full Board"
          content="Daily ration, the full pampering program for your darling."
          imageUrl={fullBoard}
        />
        <HomeCard
          title="Half Board"
          content="Half a daily ration as a nutrient-rich addition to the existing feed."
          imageUrl={halfBoard}
        />
      </div>
    </div>
  </>
);

export default NutritionNeeds;
