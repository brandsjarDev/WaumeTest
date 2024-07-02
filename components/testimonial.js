"use client";
import React, { useState, useEffect } from "react";
import Veggie from "@public/assets/images/veggie.jpg";
import quote from "@public/assets/images/quote.jpg";
import fresh3 from "@public/assets/images/fresh3.png";
import Testimonial2 from "@public/assets/images/testimonial2.jpg";
import Testimonial3 from "@public/assets/images/testimonial3.jpg";
import Image from "next/image";
import TestimonialCard1 from "./testimonialCard1";
import TestimonialCard2 from "./testimonialCard2";
import TestimonialCard3 from "./testimonialCard3";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const [currentNumber, setCurrentNumber] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNumber((prevNumber) => (prevNumber % 3) + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center   pt-20 md:pt-40">
        <h1 className="flex text-center text-2xl md:text-4xl font-hossRound justify-center">
          Was unsere geliebten Kunden über uns sagen
        </h1>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="hidden md:flex"
        >
          <CarouselContent>
            <CarouselItem className="flex justify-center overflow-hidden">
              <TestimonialCard1 image={Veggie} />
            </CarouselItem>
            <CarouselItem className="flex justify-center overflow-hidden">
              <TestimonialCard2 image={Testimonial2} />
            </CarouselItem>
            <CarouselItem className="flex justify-center overflow-hidden">
              <TestimonialCard3 image={Testimonial3} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          orientation="vertical"
          className="md:hidden"
        >
          <CarouselContent>
            <CarouselItem className="flex justify-center overflow-hidden">
              <TestimonialCard1 image={Veggie} />
            </CarouselItem>
            <CarouselItem className="flex justify-center overflow-hidden">
              <TestimonialCard2 image={Testimonial2} />
            </CarouselItem>
            <CarouselItem className="flex justify-center overflow-hidden">
              <TestimonialCard3 image={Testimonial3} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
