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
                  Über uns
                </h2>
                <p>
                  Wir haben es uns zum Ziel gesetzt ein Hundefutter zu
                  produzieren, das gesund, nachhaltig und einfach in der
                  Fütterung und Handhabung ist.
                </p>
                <p>
                  Wir sind der Meinung, dass jeder Hund nur das Allerbeste
                  verdient. Eine ausgewogene Ernährung ist nicht nur für
                  Menschen, sondern auch für Hunde einer der wichtigsten
                  Grundbausteine für ein langes und glückliches Leben.
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
            Einfache Fütterung. Schmackhaft. Individuell.
          </h2>
          <p className="text-slate-500 m-5 md:m-8">
            Grundlage unserer Rezepturen sind frische und hochwertige Zutaten,
            kombiniert mit Fachwissen aus Ernährung und Tiergesundheit.
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
                Alles begann vor ca. 2 Jahren mit ‘Hot’, unserem damals
                14-jährigen Labrador. Ein treuer Begleiter und der beste Freund
                über viele Jahre. Mit 6 Jahren wurde bei ihm Arthritis
                diagnostiziert, eine degenerative Gelenksabnützung mit immer
                wiederkehrenden Entzündungen. Bewegungen wurden im Alter immer
                schwerer, trotz Verwendung unterstützender Präparate. Dieses
                Krankheitsbild ist bei vielen Hunden nicht ungewöhnlich. Nach
                Recherchen und Gesprächen mit Tierärzten wurde uns klar, dass
                eine gesunde, auf Hot’s individuelle Bedürfnisse abgestimmte
                Ernährung von klein auf seine Krankheit hätte lindern können.
              </p>
              <p>
                Es begann die Futtersuche, strikte Diäten und kaum etwas schien
                tatsächlich zu helfen. Mit der Zeit begannen wir selbst Futter
                zu kochen und so entstand die Idee: Frischfutter, mit hohen
                Ansprüchen an Qualität und Verträglichkeit für die Bedürfnisse
                eines jeden Hundes, einfach und unkompliziert verpackt. Seither
                verfolgen wir unsere Mission von schmackhaftem, gesunden und
                nachhaltigem Hundefutter. Bisher verzeichnen wir 100% super
                saubere Futterschüsseln. Hot war jener Hund, der uns geholfen
                hat, WAUME ins Leben zu rufen, heute sieht er vom Himmel aus zu
                und schleckt mit Sicherheit noch immer alle Futterschüsseln
                picobello sauber.
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
            Unser Team
          </h1>
          <ImageRowLayout imageUrl={team} className="pt-0 md:pt-0">
            <div className="md:h-[600px] flex-col justify-around content-around gap-5 md:gap-10">
              <TeamMember
                imageSrc={bea}
                name="Bea"
                description="Ein kreativer Kopf, mit viel Liebe zum Detail. Hunde-Ernährungsberaterin und Ernährungswissenschaftlerin"
              />
              <TeamMember
                imageSrc={thaddeus}
                name="Thaddäus"
                description="Ein Querdenker, WAUME Souschef und Dogdad"
              />
              <TeamMember
                imageSrc={peter}
                name="Peter"
                description="Ein Anpacker, Chef de Cuisine und Dogdad of 4"
              />
              <TeamMember
                imageSrc={luna}
                name="Luna"
                description="CPCO- Chief Plate Cleaning Officer and Head of Taste-Testing, die heimliche Chefin von WAUME"
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
              Pro Village
            </h1>
            <p className="text-sm md:text-xl">
              Wir haben es uns zur Aufgabe gemacht, einen Ort für Hunde zu
              schaffen, an dem sie sich wohlfühlen und einfach Hunde sein
              können. Pro Village ist ein Ort, der Hundeherzen höher schlagen
              lässt. Ganz nach dem Motto – Tu das was du liebst – leben wir den
              Traum, so vielen Hunden wie möglich ein schönes und gesundes Leben
              zu ermöglichen. Alles begann mit der ‘Initiative zweites Leben für
              Hunde’ – das Herzstück von Pro Village. Heute zählen wir über 100
              Hunde aus Tierheimen und von der Straße, für die wir nach ihrer
              Re-Sozialisierung ein glückliches Zuhause gefunden haben. Bei der
              ersten Besichtigung des noch unbebauten Grundstücks von Pro
              Village hat unser Hot hier die ersten Knochen ausgegraben. Heute
              produzieren wir hier unser WAUME Futter und verköstigen Vierbeiner
              mit viel Liebe.
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
