import HomeCard from "@components/homeCard";
import moochy from "@public/assets/images/moochy.png";
import sausage from "@public/assets/images/sausage.png";
import ThemeButton from "@components/themeButton";
import styles from "./hero.module.css"; // Import CSS module
import getContent from "@helpers/prodData";
import BellyB from "@public/assets/images/BellyBuddy.jpg";
import Image from "next/image";

const Hero = ({ prodName }) => {
  const content = getContent(prodName);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  // Determine the image source based on the device type (mobile/desktop)
  const backgroundImageUrl =
    isMobile && content.mobileImg ? content.mobileImg.src : content.img.src;

  return (
    <div
      className={`flex flex-col h-[525px] md:h-[650px] md:flex-row bg-secondaryLight overflow-hidden pt-8`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <Image src={BellyB} className=""/> */}
      <div className="md:w-1/2 h-full flex flex-col md:justify-center font-hossRound ">
        <div className="md:w-3/4 flex flex-col md:justify-center gap-4 md:gap-8 ml-10">
          <h1 className="block text-2xl md:text-4xl ">{content.title}</h1>
          <div className="flex flex-col gap-4 text-softBlack font-bioSans">
            <p className="text-xl md:text-2xl">{content.ingredients}</p>
            <p className="text-xs md:text-sm">{content.description}</p>
          </div>
          <a href="/form">
            <ThemeButton size="xl">Get Started</ThemeButton>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
