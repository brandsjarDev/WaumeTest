"use client";
import HomeCard from "./newHomeCard";
import fullBoard from "@public/assets/images/fullBoardHomePage.png";
import halfBoard from "@public/assets/images/halfBoardHomePage.png";

const NutritionNeeds = () => (
  <>
    <div className="flex flex-col justify-center my-10 md:my-20">
      <div className="flex flex-col justify-center  md:text-4xl gap-5 md:gap-10 mb-10 md:mb-20">
        {" "}
        <h1 className="flex text-center text-2xl md:text-4xl font-hossRound justify-center">
          Decke den täglichen Bedarf an
          <br />
          Nährstoffen für deinen Hund.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <HomeCard
          title="Vollpension"
          content="Tagesration, das volle Verwöhnprogramm für deinen Liebling."
          imageUrl={fullBoard}
        />
        <HomeCard
          title="Halbpension"
          content=" Halbe Tagesration als nährstoffreicher Zusatz zum bestehenden Futter."
          imageUrl={halfBoard}
        />
      </div>
    </div>
  </>
);

export default NutritionNeeds;
