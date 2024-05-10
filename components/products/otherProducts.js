import React from "react";
import Card from "@components/themeCard";
import { getProdData } from "@helpers/prodData";
import { Class } from "@material-ui/icons";
import { cn } from "@lib/utils";
const products = getProdData();

const OtherProducts = ({
  title = "Fresh and natural ingredients",
  className,
}) => {
  console.log(
    cn("flex flex-col gap-10 md:gap-20 py-20 md:py-40 px-5", className)
  );
  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-10 md:gap-20 py-10 md:py-20 px-5",
          className
        )}
      >
        <h1 className=" text-center text-2xl md:text-4xl  font-hossRound">
          {title}
        </h1>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15">
            {products.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                content={item.content}
                imageUrl={item.imageUrl}
                className="text-center bg-secondary "
                knowMore
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherProducts;
