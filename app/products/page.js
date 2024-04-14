"use client";
import LinearStepper from "@components/multiForm";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Hero from "@components/products/hero";
import Navbar from "@components/Nav";
import FreshIngridients from "@components/products/natural";
import Accordions from "@components/products/accordions";
import OtherProducts from "@components/products/otherProducts";
import HumanFood from "@components/products/humanFood";

const Home = () => {
  return (
    <>
      <div className="bg-[#fafafa]">
        <Navbar className="bg-secondaryLight" />
        <Hero />
        <FreshIngridients />
        <Accordions />
        <OtherProducts />
        <HumanFood />
      </div>
    </>
  );
};

export default Home;
