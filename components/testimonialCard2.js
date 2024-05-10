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
        <span className="">Tobi's Menu</span>
        &nbsp;&nbsp;&nbsp;
        <span className="text-slate-500">Active Omnivore</span>
      </p>
      <h2 className="text-lg md:text-xl font-hossRound ">
        600g WAUME Movement Freind per day, for super athletes
      </h2>
      <p className="text-slate-500 md:leading-8">
        "The active 6-year-old Cocker Spaniel weighing 14kg needs
        <br />
        optimal dog food for his adventures in mountains
        <br />
        while hunting."
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
        Supports his good mobility
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
          Optimally coordinated nutrient and energy supply
        </p>
      </div>
      <div>
        <h2 className="text-lg font-hossRound ">Costs for Tobi's full board</h2>
        <p className="flex text-slate-500">4.5 EUR/day</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
