"use client";
import HomeCard from "./homeCard";
import fullBoard from "@public/assets/images/fullBoardHomePage.png";
import halfBoard from "@public/assets/images/halfBoardHomePage.png";
import Veggie from "@public/assets/images/veggie.jpg";
import quote from "@public/assets/images/quote.jpg";
import fresh3 from "@public/assets/images/fresh3.png";
import Image from "next/image";

const Testimonials = () => (
  <>
    <div className="flex flex-col justify-center mt-20 md:mt-40">
      <h1 className="flex text-center text-2xl md:text-4xl font-bold font-hossRound justify-center">
        What Our Beloved Clients Say About Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
        <Image src={Veggie} className="h-auto" />
        <div className="flex flex-col gap-5 px-5">
          <Image src={quote} />
          <p>
            <span className="font-semibold">Pippilotta's menu</span>
            &nbsp;&nbsp;&nbsp;
            <span className="text-slate-500">
              Feinspitz with a love for treats
            </span>
          </p>
          <h2 className="text-lg md:text-2xl font-hossRound font-semibold">
            300g WAUME Veggie Lover per day, for well- <br /> padded four-legged
            friends
          </h2>
          <p className="text-slate-500 leading-8">
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
            <h2 className="text-lg font-hossRound font-semibold">
              Costs for Pippilotta's full board
            </h2>
            <p className="flex text-slate-500">3.2 EUR/day</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Testimonials;
