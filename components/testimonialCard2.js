"use client";
import Veggie from "@public/assets/images/veggie.jpg";
import quote from "@public/assets/images/quote.jpg";
import fresh3 from "@public/assets/images/fresh3.png";
import Image from "next/image";
import TestimonialCard1 from "./testimonialCard1";

const Testimonials = ({ image }) => (
  <div className="flex flex-col  md:h-[500px] md:w-3/5 bg-white rounded-3xl md:flex-row-reverse justify-center mt-5 md:mt-10">
    <div className="md:w-1/2 p-5">
      <Image src={image} className="rounded-3xl" />
    </div>
    <div className="flex flex-col md:w-1/2 gap-5 p-5 md:p-10">
      <p>
        <span className="md:text-lg">Tobi's Menu</span>
      </p>
      <p>
        <span className="text-sm md:text-base">Active Omnivore</span>
      </p>

      <h2 className="md:text-xl font-hossRound">
        600g WAUME Movement Friend per day, for super athletes
      </h2>
      <p className="text-xs md:text-base text-slate-500 md:leading-8">
        "The active 6-year-old Cocker Spaniel weighing 14kg needs optimal dog
        food for his adventures in mountains while hunting."
      </p>
      <p className="flex text-slate-500 text-xs md:text-sm">
        <Image
          src={fresh3}
          height={10}
          width={30}
          style={{ objectFit: "contain" }}
          className="mr-5 h-auto"
        />
        Supports his good mobility
      </p>
      <div>
        <p className="flex text-slate-500 text-xs md:text-sm">
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
        <h2 className="md:text-lg font-hossRound">
          Costs for Tobi's full board
        </h2>
        <p className="flex text-slate-500">4.5 EUR/day</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
