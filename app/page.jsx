"use client";
import LinearStepper from "@components/multiForm";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Hero from "@components/hero";
import Navbar from "@components/Nav";
import NutritionNeeds from "@components/nutritionNeed";
import HowItWorks from "@components/howItWorks";
import StarterBox from "@components/starterBox";
import Consultation from "@components/consultation";
import FreshFood from "@components/freshFood";

const Home = () => (
  <>
    <div className="bg-[#fafafa]">
      <Navbar className="bg-secondary" />
      <Hero /> <NutritionNeeds /> <HowItWorks />
      <StarterBox />
      <Consultation />
      <FreshFood />
    </div>
  </>
);

export default Home;
