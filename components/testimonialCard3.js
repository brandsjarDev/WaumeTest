"use client";
import Veggie from "@public/assets/images/veggie.jpg";
import quote from "@public/assets/images/quote.jpg";
import fresh3 from "@public/assets/images/fresh3.png";
import Image from "next/image";
import TestimonialCard1 from "./testimonialCard1";
const Testimonials = ({ image }) => (
  <div className="flex flex-col w-3/4 bg-white rounded-3xl md:flex-row-reverse justify-center gap-5 md:gap-10 p-5 md:p-10 mt-5 md:mt-10">
    <div>
      <Image src={image} height={600} className="rounded-3xl" />
    </div>

    <div className="flex flex-col gap-5 px-5">
      <p>
        <span className="">Narvania's menu</span>
        &nbsp;&nbsp;&nbsp;
        <span className="text-slate-500">Active Omnivore</span>
      </p>
      <h2 className="text-lg md:text-xl font-hossRound ">
        400g WAUME Belly Buddy Plus per day, for sensitive stomachs
      </h2>
      <p className="text-slate-500 md:leading-8">
        "For the 10-year-old mixed-breed lady weighing 26 kg, it is important to
        <br />
        have a stomach-friendly and well-tolerated food that supports her as she
        <br />
        grows older."
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
        Nutrient-rich portion of fresh food on top of your dry food
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
          Stomach-friendly ingredients
        </p>
      </div>
      <div>
        <h2 className="text-lg font-hossRound ">
          Costs for Narvanias's full board
        </h2>
        <p className="flex text-slate-500">6.5 EUR/day</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
