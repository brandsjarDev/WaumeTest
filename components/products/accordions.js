import React from "react";
import ThemeAccordion from "@components/themeAccordion";
import { getAccordianData } from "@helpers/prodData";

const Accordions = ({ prodName }) => (
  <>
    <div className="flex flex-col justify-center items-center  gap-10 md:gap-15 pt-20 md:pt-40 px-5">
      <div className="flex flex-col justify-center w-3/4 items-center  text-lg gap-5 md:gap-10">
        {getAccordianData(prodName).map((item) => (
          <ThemeAccordion
            title={item.title}
            content={item.content}
            className="bg-primary text-white rounded-xl px-5 md:px-10"
          />
        ))}
      </div>
    </div>{" "}
  </>
);

export default Accordions;
