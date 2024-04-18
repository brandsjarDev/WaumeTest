import ingredients from "@public/assets/images/ingredients.png";
import Image from "next/image";
import heartIcon from "@public/assets/images/heart-icon.png";
import ImageRowLayout from "./imageRowLayout";
import solarpanel from "@public/assets/images/solarPanel.webp";
import threesausage from "@public/assets/images/threesausage.png";
import IconText from "@components/iconText";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col bg-secondary pt-10 md:pt-20">
        <div className="flex flex-col gap-5 md:gap-10 px-5">
          <h1 className="text-center text-3xl md:text-5xl  font-hossRound">
            Preparation
          </h1>
          <p className="text-center text-slate-500">
            We pay attention to careful preparation in order to maintain the
            vitamin and mineral content and to ensure optimal
            <br /> care for the dog.
          </p>

          <div className="flex flex-col md:flex-row  justify-center gap-5 md:gap-10">
            <Image
              src={ingredients}
              className="h-auto"
              style={{ objectFit: "fill" }}
            />
            <div className="flex flex-col max-w-xl gap-5">
              <h2 className="text-2xl md:text-4xl font-hossRound ">
                We know our suppliers, raw materials and the individual
                production steps.
              </h2>
              <p className="text-slate-500 leading-8">
                When sourcing our raw materials, we pay particular attention to
                regionality and seasonality. We rely 100% on fresh ingredients.
              </p>
              <IconText text="We source the meat, oils and grain from Austria, of course all of very high quality." />
              <IconText text="The vegetables and fruit are purchased fresh at a farmers market just a few kilometers from the production site." />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex bg-secondary h-28 rounded-b-[100%]"></div>
      <ImageRowLayout imageUrl={solarpanel} reverse>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl md:text-4xl font-hossRound ">
            It is important to us to act in a way that conserves resources.
          </h2>
          <p className="text-slate-500 leading-8">
            We are constantly working to reduce our CO2 footprint and optimize
            our production.
          </p>
          <p className="flex text-slate-500">
            With our own well, a photovoltaic system and many ideas for the
            future, we are able to protect our environment little by little.
          </p>
        </div>
      </ImageRowLayout>
      <ImageRowLayout imageUrl={threesausage}>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl md:text-4xl font-hossRound ">
            The amount of food is adjusted to your dog and packed into practical
            portions.
          </h2>
          <p className="text-slate-500 leading-8">
            WAUME is an individually portioned fresh food that is tailored to
            your dog's needs. The benefits:
          </p>
          <IconText text="We source the meat, oils and grain from Austria, of course all of very high quality." />
          <IconText text="The vegetables and fruit are purchased fresh at a farmers market just a few kilometers from the production site." />
        </div>
      </ImageRowLayout>
    </>
  );
};
export default Hero;
