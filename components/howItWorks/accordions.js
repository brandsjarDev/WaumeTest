import React from "react";
import ThemeAccordion from "@components/themeAccordion";
import { getAccordianData } from "@helpers/prodData";

const accordianData = [
  {
    title: "WHY FRESH FOOD, WHY WAUME?",
    content:
      "Dog food comes in a wide variety of shapes and variants. With WAUME we have developed a fresh food that is fresh, healthy and optimally meets your needs. Because our goal is not just to provide your dog with food that fills him up - but to provide him with well-being for his entire dog's life. In order to ensure optimal nutrition and coverage of all important minerals and vitamins, our WAUME varieties are subjected to a full analysis. This means that a laboratory analyzes the food for all essential nutrients. This means you can be sure that your dog is optimally supplied with all nutrients. For us, fresh food means using fresh, high-quality ingredients that are processed and packaged directly. Through an optimized heating process we can retain a large proportion of the nutrients. Whether your dog is a picky eater struggling with a specific health issue or he is completely healthy and will eat just about anything, we have seen the positive effects of feeding fresh food to our own dogs and our dogs Customers experience first-hand. There is nothing magical about our food: WAUME is fresh food that is practical. Dog food, the way it should be. Great Food for Great Dogs",
  },
  {
    title: "HOW IS YOUR FOOD PREPARED?",
    content:
      "In short, with a lot of love. Longer answer: Our ingredients are locally sourced, high quality and are cooked and hand packaged in small batches in our own production at Pro Village. Our dogs can attest to how delicious it is. You can find more information on our homepage under “About Us” and on the Pro Village homepage www.pro-village.eu .",
  },
  {
    title: "How do I store the food",
    content:
      "It is best to store your WAUME in a cool, dark place and protected from direct sunlight. WAUME does not need to be stored in the refrigerator or freezer.",
  },
];

const Accordions = ({ data = accordianData }) => (
  <>
    <div className="flex flex-col justify-center items-center  gap-10 md:gap-15 py-10 md:py-20 px-5">
      <div className="flex flex-col justify-center w-3/4 items-center  text-lg gap-5 md:gap-10">
        {data.map((item) => (
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
