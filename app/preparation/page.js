"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled
const Navbar = dynamic(() => import("@components/Nav"), {
  ssr: false,
});

const DynamicHero = dynamic(() => import("@components/preparation/hero"), {
  ssr: false,
});
const DynamicImageRowLayout = dynamic(
  () => import("@components/preparation/imageRowLayout"),
  { ssr: false }
);
const DynamicNutritionNeeds = dynamic(
  () => import("@components/nutritionNeed"),
  { ssr: false }
);
const DynamicFreshFood = dynamic(() => import("@components/freshFood"), {
  ssr: false,
});

const HumanFood = () => {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <>
      <div className="">
        {/* Render dynamically imported components */}
        <DynamicHero />
        <DynamicNutritionNeeds />
        <DynamicFreshFood />
      </div>
    </>
  );
};
export default HumanFood;
