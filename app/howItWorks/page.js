import React from "react";
import howitworks from "@public/assets/images/howitworks.webp";
import Image from "next/image";
import Navbar from "@components/Nav";
import HowItWorks from "@components/howItWorks";
import OtherProducts from "@components/products/otherProducts";
import "./wave.module.css";
import NutritionNeeds from "@components/nutritionNeed";
import ImageRowLayout from "@components/preparation/imageRowLayout";
import threesausage from "@public/assets/images/threesausage.png";
import IconText from "@components/iconText";
import Wave from "@components/wave";
import StarterBox from "@components/starterBox";
import Consultation from "@components/consultation";
import starterpacket from "@public/assets/images/starterpacket.png";
import ThemeButton from "@components/themeButton";
import Accordions from "@components/howItWorks/accordions";

const Page = () => {
  const title = (
    <>
      Based on your input, you will receive food
      <br /> recommendations from which you can choose
    </>
  );

  return (
    <>
      <Navbar />
      <div className="">
        <Image src={howitworks} style={{ objectFit: "fill" }} />
        <HowItWorks />
        <Wave />
        <OtherProducts title={title} className="bg-secondary md:py-0" />
        <div className="flex bg-secondary h-24 rounded-b-[70%]"></div>
        <NutritionNeeds />
        <ImageRowLayout imageUrl={threesausage}>
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-2xl md:text-4xl font-hossRound font-semibold">
              Cover Your Dog’s Daily Nutritional Needs
            </h2>
            <p className="text-slate-500 leading-8">
              WAUME is an individually portioned fresh food that is tailored to
              your dog's needs. The benefits:
            </p>
            <IconText text="uncomplicated feeding, because one sausage = one meal" />
            <IconText text="Makes weight management easier" />
            <IconText text="Fresh food at every meal" />
          </div>
        </ImageRowLayout>
        <Wave />
        <div className="bg-secondaryLight">
          <ImageRowLayout
            imageUrl={threesausage}
            reverse
            className="bg-secondaryDark"
          >
            <h2 className="text-2xl md:text-4xl text-center font-hossRound font-semibold">
              Fresh ingredients, gentle preparation, stored without
              refrigeration
            </h2>
          </ImageRowLayout>
          <div className="flex bg-secondary h-24 rounded-b-[70%]"></div>
        </div>
        <StarterBox className="md:mt-0 bg-secondaryLight" />
        <Consultation className="mt-10 md:mt-20" />
        <ImageRowLayout imageUrl={starterpacket} className="my-5 md:my-10">
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-2xl md:text-4xl font-hossRound font-semibold">
              Let your dog convince you! Order our sample box once.
            </h2>

            <IconText text="3 WAUME samples" />
            <IconText text="Individually compiled varieties" />
            <IconText text="WAUME food guide and knife" />
            <p className="text-slate-500 leading-8">
              EUR 25.00 (Including 13% VAT) + Shipping Cost
            </p>
            <div>
              <ThemeButton size="xl">Add to cart</ThemeButton>
            </div>
          </div>
        </ImageRowLayout>
        <h2 className="text-2xl md:text-4xl text-center font-hossRound font-bold mt-10 md:mt-20">
          Frequently Asked Questions
        </h2>
        <Accordions />
        {/* <Hero />
        <NutritionNeeds />
        <FreshFood /> */}
      </div>
    </>
  );
};

export default Page;
