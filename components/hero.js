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
    <div className="flex flex-col-reverse md:flex-row justify-between items-center  bg-secondaryLight overflow-hidden mb-10">
      <div className="h-full flex flex-col justify-center items-center md:p-5 p-10">
        <div className="flex flex-col justify-center gap-4 md:gap-8 ml-10 md:ml-20">
          <h1 className="font-hossRound items-center text-3xl md:text-5xl ">
            Great food for great dogs
          </h1>
          <div className="flex flex-col gap-4 md:text-lg">
            <p className="text-slate-500">
              Individually portioned fresh food delivered
            </p>
            <p className="text-slate-500">straight to your doorstep.</p>
          </div>
          <a href="/form">
            <ThemeButton size="xl">Get Started</ThemeButton>
          </a>
        </div>
      </div>
      <div>
        <Image src={HeroShot} height={600} />
      </div>
    </div>
  );
};
export default Hero;
