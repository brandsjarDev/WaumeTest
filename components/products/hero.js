import HomeCard from "@components/homeCard";
import moochy from "@public/assets/images/moochy.png";
import sausage from "@public/assets/images/sausage.png";
import ThemeButton from "@components/themeButton";
import MovementFreind from "@public/assets/images/movementfriendHero.png";
import styles from "./hero.module.css"; // Import CSS module
import getContent from "@helpers/prodData";

const Hero = ({ prodName }) => {
  const content = getContent(prodName);
  return (
    <div
      className={`flex flex-col h-[400px] md:h-[650px] bg-secondaryLight overflow-hidden ${styles.heroBackground}`}
    >
      <div className="md:w-1/2 h-full flex flex-col justify-center font-hossRound">
        <div className="md:w-3/4 flex flex-col justify-center gap-4 md:gap-8 ml-10">
          <h1 className="block text-2xl md:text-4xl ">{content.title}</h1>
          <div className="flex flex-col gap-4 font-bioSans">
            <p className="text-slate-500 text-xl md:text-2xl">
              {content.ingredients}
            </p>
            <p className="text-slate-500 text-xs md:text-sm">
              {content.description}
            </p>
          </div>
          <a href="/form">
            <ThemeButton className="w-[191px] h-[50px]">
              Get Started
            </ThemeButton>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
