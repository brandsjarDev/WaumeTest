"use client";
import Veggie from "@public/assets/images/veggie.jpg";
import quote from "@public/assets/images/quote.jpg";
import fresh3 from "@public/assets/images/fresh3.png";
import Image from "next/image";
import TestimonialCard1 from "./testimonialCard1";

const Testimonials = ({}) => (
  <div className="flex flex-col md:w-3/4 bg-white rounded-3xl md:flex-row-reverse justify-center gap-5 md:gap-10 p-5 md:p-10 mt-5 md:mt-10">
    <div>
      <Image src={Veggie} height={600} className="rounded-3xl" />
    </div>
    <div className="flex flex-col gap-5 px-5">
      <p>
        <span className="">Pippilotta's menu</span>
        &nbsp;&nbsp;&nbsp;
        <span className="text-slate-500">Feinspitz with a love for treats</span>
      </p>
      <h2 className="text-lg md:text-xl font-hossRound ">
        300g WAUME Veggie Lover per day, for well- padded four-legged friends
      </h2>
      <p className="text-slate-500 md:leading-8">
        "The young 2-year-old French Bulldog lady, 10kg (optimally 8kg) is
        <br />
        optimally cared for with food that meets her fine taste and supports
        <br />
        her joy of movement."
      </p>
      <p className="flex text-slate-500">
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
        <p className="flex text-slate-500">
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
        <h2 className="text-lg font-hossRound ">
          Costs for Pippilotta's full board
        </h2>
        <p className="flex text-slate-500">3.2 EUR/day</p>
      </div>
    </div>{" "}
  </div>
);

export default Testimonials;