"use client";
import LinearStepper from "@components/multiForm";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Hero from "@components/products/hero";
import Navbar from "@components/Nav";
import FreshIngridients from "@components/products/natural";
import Accordions from "@components/products/accordions";
import OtherProducts from "@components/products/otherProducts";
import HumanFood from "@components/products/humanFood";

const Page = ({ params }) => {
  console.log("slug", params.prodName);
  return (
    <>
      <div className="bg-[#fafafa]">
        <Hero prodName={params.prodName} />
        <FreshIngridients prodName={params.prodName} />
        <Accordions prodName={params.prodName} />
        <OtherProducts />
        <HumanFood />
      </div>
    </>
  );
};

export default Page;
