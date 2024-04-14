import styles from "./humanFood.module.css"; // Import CSS module
import FeedingDog from "@public/assets/images/feedingdog.png";
import Image from "next/image";
import ThemeButton from "@components/themeButton";

const HumanFood = () => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${styles.heroBackground}`}
    >
      <Image src={FeedingDog} style={{ objectFit: "fill" }} />
      <div className="flex flex-col justify-center text-white w-full  top-[50%] bottom-[50%] ">
        <div className="w-[300px] flex flex-col justify-center m-5">
          <h1 className=" text-2xl md:text-4xl font-hossRound  text-center mb-5 md:mb-10">
            The closest thing
            <br /> to feeding your
            <br /> dog human food
          </h1>
          <div className="flex justify-center">
            <ThemeButton size="lg" className="bg-[#53A2A4]">
              Get Started
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HumanFood;
