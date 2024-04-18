import ThemeButton from "./themeButton";
import Sausage from "@public/assets/images/sausage.png";
import Guide from "@public/assets/images/guide.png";
import Knife from "@public/assets/images/knife.png";
import HomeCard from "./homeCard";
import { cn } from "@lib/utils";

const cardData = [
  {
    imageUrl: Sausage,
    title: "WAUME fresh food",
    description: "ready to eat for your dog.",
  },
  {
    imageUrl: Guide,
    title: "Guide",
    description: "information and tips for changing feed.",
  },
  {
    imageUrl: Knife,
    title: "Knife",
    description: "For easy opening of portions.",
  },
];

const StarterBox = ({ className }) => (
  <>
    <div
      className={cn(
        "flex flex-col justify-center items-center bg-secondaryLight gap-10 md:gap-15 py-10 md:py-15 mt-10 md:mt-20 px-5 md:px-10",
        className
      )}
    >
      <div className="flex flex-col w-full md:flex-row justify-between items-center gap-5">
        <div className="flex flex-col justify-between items-center mx-5 gap-5">
          <h2 className="flex text-center justify-center text-3xl md:text-4xl font-hossRound ">
            IN YOUR STARTER BOX
          </h2>

          <p className="text-center  text-slate-500 font-hossRound ">
            All animals are in the best condition and vaccinated as always
          </p>
        </div>
        <ThemeButton size="xl">Get Started</ThemeButton>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div>
          <HomeCard
            title="WAUME fresh food"
            content="ready to eat for your dog."
            imageUrl={Sausage}
            className="md:mb-20"
          />
        </div>
        <div>
          <HomeCard
            title="Guide"
            content="information and tips for changing feed."
            imageUrl={Guide}
            className="md:mt-20"
          />
        </div>
        <div>
          <HomeCard
            title="Knife"
            content="For easy opening of portions."
            imageUrl={Knife}
            className="md:mb-20"
          />
        </div>
      </div>
    </div>
  </>
);

export default StarterBox;
