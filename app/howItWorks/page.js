"use client";
import React from "react";
import { useEffect } from "react";
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
import dynamic from "next/dynamic";
import Lagern from "@public/assets/images/Lagern.png";

// Importing components dynamically with SSR disabled
const DynamicNavbar = dynamic(() => import("@components/Nav"), { ssr: false });
const DynamicHowItWorks = dynamic(() => import("@components/howItWorks"), {
  ssr: false,
});
const DynamicWave = dynamic(() => import("@components/wave"), { ssr: false });
const DynamicOtherProducts = dynamic(
  () => import("@components/products/otherProducts"),
  { ssr: false }
);
const DynamicNutritionNeeds = dynamic(
  () => import("@components/nutritionNeed"),
  { ssr: false }
);
const DynamicStarterBox = dynamic(() => import("@components/starterBox"), {
  ssr: false,
});
const DynamicConsultation = dynamic(() => import("@components/consultation"), {
  ssr: false,
});
const DynamicAccordions = dynamic(
  () => import("@components/howItWorks/accordions"),
  { ssr: false }
);

const Page = () => {
  const title = (
    <>
      Basierend auf deinen Eingaben erhältst du
      <br /> Futter-Empfehlungen aus denen du wählen kannst.
    </>
  );

  return (
    <>
      <div className="">
        <Image src={howitworks} style={{ objectFit: "fill" }} />
        <DynamicHowItWorks className="bg-secondary" />
        <DynamicOtherProducts title={title} className="md:p y-0" />
        <DynamicNutritionNeeds />
        <ImageRowLayout imageUrl={threesausage}>
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-2xl md:text-4xl font-hossRound ">
              Die Futtermenge wird an deinen Hund angepasst und in praktische
              Portionen verpackt.
            </h2>
            <p className="text-slate-500 leading-5 md:leading-8">
              WAUME ist ein individuell portioniertes Frischfutter das sich nach
              den Bedürfnissen deines Hundes richtet. Die Benefits:
            </p>
            <IconText text="eine unkomplizierte Fütterung, denn eine Wurst = eine Mahlzeit" />
            <IconText text="erleichtert das Gewichtsmanagement" />
            <IconText text="frisches Futter zu jeder Mahlzeit" />
          </div>
        </ImageRowLayout>
        <DynamicWave />
        <div className="bg-secondaryLight flex justify-center">
          <ImageRowLayout
            imageUrl={Lagern}
            reverse
            className="bg-secondaryDark"
          >
            <h2 className="text-2xl md:text-4xl text-center font-hossRound ">
              Frische Zutaten, schonende Zubereitung, ganz ohne Kühlung lagern.
            </h2>
          </ImageRowLayout>
          <div className="flex bg-secondary h-24 rounded-b-[70%]"></div>
        </div>
        <DynamicStarterBox className="md:mt-0 bg-secondaryLight" />
        <DynamicConsultation className="mt-10 md:mt-20" />
        <ImageRowLayout imageUrl={starterpacket} className="my-5 md:my-10">
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-2xl md:text-4xl font-hossRound ">
              Lass deinen Hund, dich überzeugen! Bestell einmalig unsere
              Probierbox.
            </h2>

            <IconText text="3 WAUME- Kostproben" />
            <IconText text="Individuell zusammengestellte Sorten" />
            <IconText text="WAUME- Futterguide und Messer" />
            <p className="text-slate-500 leading-8">
              15,00 € (inkl. 13 % MwSt.) + Versandkosten
            </p>
            <a href="/form" className="flex justify-center">
              <ThemeButton size="xl">In den Warenkorb</ThemeButton>
            </a>
          </div>
        </ImageRowLayout>
        <DynamicAccordions />
        {/* <Hero />
        <NutritionNeeds />
        <FreshFood /> */}
      </div>
    </>
  );
};

export default Page;
