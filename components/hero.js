import HomeCard from "@components/homeCard";
import moochy from "@public/assets/images/moochy.png";
import sausage from "@public/assets/images/sausage.png";
import ThemeButton from "@components/themeButton";
import heroimg1 from "@public/assets/images/heroimg1.jpg";
import heroimg2 from "@public/assets/images/heroimg2.jpg";
import heroimg3 from "@public/assets/images/heroimg3.jpg";
import HeroShot from "@public/assets/images/HeroShot.png";
import Image from "next/image";
// import { useRouter } from "next/navigation";

const Hero = () => {
  // const router = useRouter();
  // router.push("/form");
  return (
    <div className="flex flex-col-reverse md:flex-row  md:h-[650px] bg-secondaryLight overflow-hidden mb-10">
      <div className="md:w-1/2 h-full flex flex-col justify-center md:p-5 p-10">
        <div className=" flex flex-col justify-center gap-4 md:gap-8 ml-10 md:ml-20">
          <h1 className="font-hossRound text-3xl md:text-5xl ">
            Great Food For Great <br />
            Dogs
          </h1>
          <div className="flex flex-col gap-4 ">
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
      </div>
      <div className="md:w-1/2 ">
        <Image src={HeroShot} />
      </div>
    </div>
  );
};
export default Hero;
