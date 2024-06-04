import styles from "./humanFood.module.css"; // Import CSS module
import FeedingDog from "@public/assets/images/feedingdogfull.png";
import Image from "next/image";
import ThemeButton from "@components/themeButton";

const HumanFood = () => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row justify-normal ${styles.heroBackground}`}
    >
      <Image src={FeedingDog} className="w-full" height={300} />
      <div className="flex flex-col justify-center w-full text-white  top-[50%] bottom-[50%]">
        <div className="w-[300px] flex flex-col justify-end m-5">
          <h1 className="text-center text-2xl md:text-4xl font-hossRound   mb-5 md:mb-10">
            The closest thing
            <br /> to feeding your
            <br /> dog human food
          </h1>
          <a href="/form" className="flex justify-center">
            <ThemeButton size="lg" className="bg-[#53A2A4]">
              Get Started
            </ThemeButton>
          </a>
        </div>
      </div>
    </div>
  );
};
export default HumanFood;
