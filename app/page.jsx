"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import CookieConsent from "@components/cookieConsent";

// Dynamically import components with SSR disabled
const DynamicNavbar = dynamic(() => import("@components/Nav"), { ssr: false });
const DynamicHero = dynamic(() => import("@components/hero"), { ssr: false });
const DynamicNutritionNeeds = dynamic(
  () => import("@components/nutritionNeed"),
  { ssr: false }
);
const DynamicHowItWorks = dynamic(() => import("@components/howItWorks"), {
  ssr: false,
});
const DynamicStarterBox = dynamic(() => import("@components/starterBox"), {
  ssr: false,
});
const DynamicConsultation = dynamic(() => import("@components/consultation"), {
  ssr: false,
});
const DynamicTestimonials = dynamic(() => import("@components/testimonial"), {
  ssr: false,
});
const DynamicFreshFood = dynamic(() => import("@components/freshFood"), {
  ssr: false,
});
const DynamicAccordions = dynamic(
  () => import("@components/howItWorks/accordions"),
  { ssr: false }
);
const Home = () => {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <>
      <CssBaseline />
      <div className="bg-[#fafafa]">
        <DynamicHero />
        <DynamicNutritionNeeds />
        <DynamicHowItWorks />
        <DynamicStarterBox />
        <DynamicConsultation />
        <DynamicTestimonials />
        <DynamicFreshFood />
        <DynamicAccordions more />
      </div>
    </>
  );
};

export default Home;
