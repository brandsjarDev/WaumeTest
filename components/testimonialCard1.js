"use client";
import Veggie from "@public/assets/images/veggie.jpg";
import quote from "@public/assets/images/quote.jpg";
import fresh3 from "@public/assets/images/fresh3.png";
import Image from "next/image";
import TestimonialCard1 from "./testimonialCard1";

const Testimonials = ({}) => (
  <div className="flex flex-col md:h-[500px] md:w-3/5 bg-white rounded-3xl md:flex-row-reverse justify-center mt-5 md:mt-10">
    <div className="md:w-1/2 p-5">
      <Image src={Veggie} className="rounded-3xl" />
    </div>
    <div className="flex flex-col md:w-1/2 gap-5 p-5 md:p-10 md:pb-0">
      <p>
        <span className="md:text-lg">Pippi Longstocking's menu</span>
      </p>
      <p>
        <span className="text-sm md:text-base">
          Gourmet with a penchant for treats
        </span>
      </p>
      <h2 className="md:text-xl font-hossRound ">
        300g WAUME Veggie Lover per day, for well- padded four-legged friends
      </h2>
      <p className="text-xs md:text-sm text-slate-500 ">
        "The young 2-year-old French Bulldog lady, 10kg (optimally 8kg) is
        optimally cared for with food that meets her fine taste and supports her
        joy of movement."
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
        Meets Pippilotta's selective taste
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
          Easy weight management, thanks to the high content of herbal
          ingredients
        </p>
      </div>
      <div>
        <h2 className="md:text-lg font-hossRound ">
          Costs for Pippilotta's full board
        </h2>
        <p className="flex text-slate-500">3.2 €/day</p>
      </div>
    </div>{" "}
  </div>
);

export default Testimonials;
