"use client";
import Veggie from "@public/assets/images/veggie.jpg";
import quote from "@public/assets/images/quote.jpg";
import fresh3 from "@public/assets/images/fresh3.png";
import Image from "next/image";
import TestimonialCard1 from "./testimonialCard1";

const Testimonials = ({}) => (
  <div className="flex flex-col md:h-[560px] md:w-3/5 bg-white rounded-3xl md:flex-row-reverse justify-center mt-5 md:mt-10">
    <div className="md:w-1/2 p-5">
      <Image src={Veggie} className="rounded-3xl" />
    </div>
    <div className="flex flex-col md:w-1/2 gap-5 p-5 md:p-10 md:pb-0">
      <p>
        <span className="md:text-lg">Pippilottas Speiseplan</span>
      </p>
      <p>
        <span className="text-sm md:text-base">
          Feinspitz mit Vorliebe für Leckerlies
        </span>
      </p>
      <h2 className="md:text-xl font-hossRound ">
        300g WAUME Veggie Lover pro Tag, für gut gepolsterte Vierbeiner
      </h2>
      <p className="text-xs md:text-sm text-slate-500 ">
        "Optimal versorgt ist die junge 2-jährige French Bulldog Dame, 10kg
        (optimal 8kg) mit einem Futter, dass auch ihren feinen Geschmack trifft
        und ihre Bewegungsfreude unterstützt."
      </p>
      <p className="flex text-slate-500 text-xs md:text-sm">
        <div>
          <Image
            src={fresh3}
            height={10}
            width={30}
            style={{ objectFit: "contain" }}
            className="mr-5 h-auto"
          />
        </div>
        Trifft Pippilottas selektiven Geschmack
      </p>
      <div>
        <p className="flex text-slate-500  text-xs md:text-sm">
          <Image
            src={fresh3}
            height={10}
            width={30}
            style={{ objectFit: "contain" }}
            className="mr-5 h-auto"
          />
          Einfaches Gewichtsmanagement, durch hohen Gehalt pflanzlicher Zutaten
        </p>
      </div>
      <div>
        <h2 className="md:text-lg font-hossRound ">
          Kosten für Pippilotta’s Vollpension
        </h2>
        <p className="flex text-slate-500"> 3,2 EUR/Tag</p>
      </div>
    </div>{" "}
  </div>
);

export default Testimonials;
