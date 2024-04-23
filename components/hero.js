import HomeCard from "@components/homeCard";
import moochy from "@public/assets/images/moochy.png";
import sausage from "@public/assets/images/sausage.png";
import ThemeButton from "@components/themeButton";
import heroimg1 from "@public/assets/images/heroimg1.jpg";
import heroimg2 from "@public/assets/images/heroimg2.jpg";
import heroimg3 from "@public/assets/images/heroimg3.jpg";

// import { useRouter } from "next/navigation";

const Hero = () => {
  // const router = useRouter();
  // router.push("/form");
  return (
    <div className="flex flex-col md:h-[650px] bg-secondaryLight overflow-hidden mb-10">
      <div className="md:w-1/2 h-full flex flex-col justify-center  font-hossRound ">
        <div className=" flex flex-col justify-center  gap-4 md:gap-8 ml-10">
          <h1 className="block  text-3xl md:text-5xl ">
            Great Food For
            <br />
            Great Dogs
          </h1>
          <div className="flex flex-col gap-4 font-bioSans">
            <p className="text-slate-500">
              Individually portioned fresh food delivered
            </p>
            <p className="text-slate-500">straight to your doorstep.</p>
          </div>
          <a href="/form">
            <ThemeButton className="w-[191px] h-[50px]">
              Get Started
            </ThemeButton>
          </a>
        </div>
        <div className="md:absolute top-[60px] right-[0px] overflow-hidden">
          <div className="flex md:w-[700px] md:h-[850px] justify-end gap-5 origin-center rotate-12">
            <div className="flex items-center">
              <HomeCard
                title="Moochy"
                content="Pomeranian, 3 Years"
                className=""
                imageUrl={heroimg1}
              />
            </div>
            <div className="flex flex-col gap-5">
              <HomeCard
                title="Coco"
                content="Siberian Husky, 3 Years"
                imageUrl={heroimg2}
                className=""
              />
              <HomeCard
                title="Tabby"
                content="Boston Terrier, 2 Years"
                imageUrl={heroimg3}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-5/6 flex justify-center md:justify-start items-center  font-bioSans  bg-primary p-5">
        <div className="w-full md:w-3/4  grid grid-cols-2 md:grid-cols-4 gap-5 justify-around text-white  ">
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-[32px]">+15</h1>
            <h1 className="">Total Client</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-[32px]">+21</h1>
            <h1 className="">Pets</h1>
          </div>

          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-[32px]">+99</h1>
            <h1 className="">Caretakers</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-[32px]">+10</h1>
            <h1 className="">Good Reviews</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
