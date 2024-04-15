import production from "@public/assets/images/production.png";
import Image from "next/image";
import ThemeButton from "@components/themeButton";
import Navbar from "@components/Nav";
import Hero from "@components/preparation/hero";
import ImageRowLayout from "@components/preparation/imageRowLayout";
import NutritionNeeds from "@components/nutritionNeed";
import FreshFood from "@components/freshFood";

const HumanFood = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Image src={production} style={{ objectFit: "fill" }} />
        <Hero />
        <NutritionNeeds />
        <FreshFood />
      </div>
    </>
  );
};
export default HumanFood;
