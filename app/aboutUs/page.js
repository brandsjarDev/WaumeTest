"use client";
import React from "react";
import ImageRowLayout from "@components/preparation/imageRowLayout";
import threesausage from "@public/assets/images/threesausage.png";
import IconText from "@components/iconText";
import aboutUsHero from "@public/assets/images/aboutUsHero.png";
import Wave from "@components/wave";
import StarterBox from "@components/starterBox";
import Consultation from "@components/consultation";
import starterpacket from "@public/assets/images/starterpacket.png";
import deadDog from "@public/assets/images/deadDog.png";
import peter from "@public/assets/images/peter.png";
import luna from "@public/assets/images/luna.png";
import thaddeus from "@public/assets/images/thaddeus.png";
import bea from "@public/assets/images/bea.png";
import team from "@public/assets/images/team.png";
import ThemeButton from "@components/themeButton";
import Village from "@public/assets/images/village.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import TeamMember from "@components/teamMember";

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
      Based on your input, you will receive food
      <br /> recommendations from which you can choose
    </>
  );

  return (
    <>
      <DynamicNavbar />
      <div className="">
        <div id="about" className="bg-red-500">
          <div
            className="flex flex-col md:flex-row-reverse
               items-center justify-center md:justify-around bg-primary text-white  px-5 pt-5 md:pt-10 "
          >
            <Image
              src={aboutUsHero}
              className="rounded-2xl"
              width={500}
              height={700}
            />

            <div className="flex justify-center items-center max-w-md">
              <div className="flex flex-col gap-5 md:gap-8">
                <h2 className="text-start text-2xl md:text-4xl   font-hossRound ">
                  About Us
                </h2>
                <p>
                  We have set ourselves the goal of producing dog food that is
                  healthy, sustainable and easy to feed and handle.
                </p>
                <p>
                  We believe that every dog ​​deserves only the very best. A
                  balanced diet is one of the most important building blocks for
                  a long and happy life, not only for people but also for dogs.
                </p>
              </div>
            </div>
          </div>
          <DynamicWave className="bg-primary m-[-1px]" />
        </div>
        <div
          id="story"
          className="flex flex-col items-center justify-center bg-secondary"
        >
          <h2 className=" text-2xl md:text-4xl text-center font-hossRound ">
            Easy feeding. Tasty. Individually.
          </h2>
          <p className="text-slate-500 m-5 md:m-8">
            Our recipes are based on fresh, high-quality ingredients, combined
            with specialist knowledge of nutrition and animal health.
          </p>
          <ImageRowLayout
            imageUrl={deadDog}
            width={300}
            className="bg-secondary"
          >
            <div
              className="flex flex-col justify-start 
text-xs  md:text-sm text-slate-500 gap-5"
            >
              <p>
                It all started about 2 years ago with 'Hot', our then
                14-year-old Labrador. A loyal companion and best friend for many
                years. At the age of 6, he was diagnosed with arthritis, a
                degenerative joint wear and tear with recurring inflammation.
                Movements became increasingly difficult with age, despite the
                use of supportive preparations. This clinical picture is not
                uncommon in many dogs. After researching and speaking with
                veterinarians, we realized that a healthy diet tailored to Hot's
                individual needs from an early age could have alleviated his
                illness.
              </p>
              <p>
                The search for food began, strict diets began and hardly
                anything actually seemed to help. Over time, we began to cook
                food ourselves and that's how the idea came about: fresh food,
                with high standards of quality and tolerability for the needs of
                every dog, packaged in a simple and uncomplicated manner. Since
                then, we have pursued our mission of tasty, healthy and
                sustainable dog food. So far we have had 100% super clean
                feeding bowls. Hot was the dog who helped us bring WAUME into
                being. Today he is watching from heaven and is definitely still
                licking all the food bowls perfectly clean.
              </p>
            </div>
          </ImageRowLayout>
        </div>
        <div
          id="team"
          className="flex bg-secondary h-24 rounded-b-[70%] mb-[-1px]"
        ></div>
        <div className="">
          <h1 className="font-hossRound mt-10 text-2xl md:text-4xl text-center">
            Our Team
          </h1>
          <ImageRowLayout imageUrl={team} className="pt-0 md:pt-0">
            <div className="md:h-[600px] flex-col justify-around content-around gap-5 md:gap-10">
              <TeamMember
                imageSrc={bea}
                name="Bea"
                description="A creative mind with great attention to detail. Canine nutritionist and nutritionist"
              />
              <TeamMember
                imageSrc={thaddeus}
                name="Squidward"
                description="A lateral thinker, WAUME sous chef and dog dad"
              />
              <TeamMember
                imageSrc={peter}
                name="Peter"
                description="A go-getter, Chef de Cuisine and Dogdad of 4"
              />
              <TeamMember
                imageSrc={luna}
                name="Luna"
                description="CPCO- Chief Plate Cleaning Officer and Head of Taste-Testing, the secret boss of WAUME"
              />
            </div>
          </ImageRowLayout>
        </div>
        <div
          id="village"
          className="flex flex-col items-end justify-center bg-[url('/assets/images/village.png')] bg-cover bg-no-repeat text-white h-[800px] p-5 md:pr-20"
        >
          <div className="flex flex-col  max-w-md">
            <h1 className="font-hossRound text-2xl md:text-4xl text-start">
              Our Village
            </h1>
            <p className="text-sm md:text-xl">
              Our mission is to create a place for dogs where they can feel
              comfortable and just be dogs. Pro Village is a place that makes
              dogs' hearts beat faster. True to the motto – Do what you love –
              we live the dream of giving as many dogs as possible a beautiful
              and healthy life. It all started with the 'Second Life for Dogs
              Initiative' - the heart of Pro Village. Today we have over 100
              dogs from animal shelters and the streets, for whom we have found
              happy homes after their re-socialization. During the first tour of
              the still undeveloped Pro Village property, our Hot dug up the
              first bones here. Today we produce our WAUME food here and feed
              our four-legged friends with a lot of love.
            </p>
          </div>
        </div>
        {/* <Hero />
        <NutritionNeeds />
        <FreshFood /> */}
      </div>
    </>
  );
};

export default Page;
