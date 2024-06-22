"use client";
import Image from "next/image";
import fresh3 from "@public/assets/images/fresh3.png";

const Testimonials = ({ image }) => (
  <div className="flex flex-col md:h-[530px] md:w-3/5 bg-white rounded-3xl md:flex-row-reverse justify-center mt-5 md:mt-10">
    <div className="md:w-1/2 p-5">
      <Image src={image} className="rounded-3xl" />
    </div>
    <div className="flex flex-col md:w-1/2 gap-5 p-5 md:p-10 md:pb-0">
      <p>
        <span className="md:text-lg">Narvania's menu</span>
      </p>
      <p>
        <span className="text-sm md:text-base">
          Cozy, elderly lady with stomach problems
        </span>
      </p>
      <h2 className="md:text-xl font-hossRound">
        400g WAUME Belly Buddy Plus per day, for sensitive stomachs
      </h2>
      <p className="text-xs md:text-sm text-slate-500">
        "For the 10-year-old mixed-breed lady weighing 26 kg, it is important to
        <br />
        have a stomach-friendly and well-tolerated food that supports her as she
        <br />
        grows older."
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
        Nutrient-rich portion of fresh food on top of your dry food
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
          Stomach-friendly ingredients
        </p>
      </div>
      <div>
        <h2 className="md:text-lg font-hossRound">
          Costs for Narvania's full board
        </h2>
        <p className="flex text-slate-500">6.5 €/day</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
