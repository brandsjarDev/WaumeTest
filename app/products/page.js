"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled
const Navbar = dynamic(() => import("@components/Nav"), {
  ssr: false,
});

const DynamicHero = dynamic(() => import("@components/products/hero"), {
  ssr: false,
});
const DynamicFreshIngredients = dynamic(
  () => import("@components/products/natural"),
  { ssr: false }
);
const DynamicAccordions = dynamic(
  () => import("@components/products/accordions"),
  { ssr: false }
);
const DynamicOtherProducts = dynamic(
  () => import("@components/products/otherProducts"),
  { ssr: false }
);
const DynamicHumanFood = dynamic(
  () => import("@components/products/humanFood"),
  { ssr: false }
);

const Home = () => {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <>
      <div className="bg-[#fafafa]">
        <Navbar className="bg-secondaryLight" />
        {/* Render dynamically imported components */}
        <DynamicHero />
        <DynamicFreshIngredients />
        <DynamicAccordions />
        <DynamicOtherProducts />
        <DynamicHumanFood />
      </div>
    </>
  );
};

export default Home;
