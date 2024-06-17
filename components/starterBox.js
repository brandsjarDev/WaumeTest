import ThemeButton from "./themeButton";
import Sausage from "@public/assets/images/sausage.png";
import Guide from "@public/assets/images/guide.png";
import Knife from "@public/assets/images/knife.png";
import HomeCard from "./newHomeCard";
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
      <h2 className="text-center  text-2xl md:text-4xl font-hossRound ">
        In your starter box:
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div>
          <HomeCard
            title="WAUME fresh food"
            content="Ready to eat for your dog."
            imageUrl={Sausage}
          />
        </div>
        <div>
          <HomeCard
            title="Guide"
            content="Information and tips for changing feed."
            imageUrl={Guide}
          />
        </div>
        <div>
          <HomeCard
            title="Knife"
            content="For easy opening of portions."
            imageUrl={Knife}
          />
        </div>
      </div>
      <a href="/form">
        {" "}
        <ThemeButton size="xl">Get Started</ThemeButton>
      </a>
    </div>
  </>
);

export default StarterBox;
