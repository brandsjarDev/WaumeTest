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
      <div className="flex flex-col items-center bg-secondary pt-10 md:pt-20">
        <div className="flex flex-col gap-5 md:gap-10 px-5">
          <h1 className="text-center text-3xl md:text-5xl  font-hossRound">
            Zubereitung
          </h1>
          <p className="text-center text-slate-500">
            Wir achten auf eine schonende Zubereitung, um den Gehalt an
            <br />
            Vitaminen und Mineralstoffen aufrechtzuerhalten und eine optimale
            Versorgung <br />
            des Hundes zu gewährleisten.
          </p>

          <div className="flex flex-col md:flex-row  justify-center gap-5 md:gap-10">
            <Image
              src={ingredients}
              className="h-auto"
              style={{ objectFit: "fill" }}
            />
            <div className="flex flex-col max-w-xl gap-5">
              <h2 className="text-2xl md:text-4xl font-hossRound ">
                Wir kennen unsere Lieferanten, Rohstoffe und die einzelnen
                Produktionsschritte.
              </h2>
              <p className="text-slate-500 leading-8">
                Beim Bezug unserer Rohstoffe achten wir besonders auf die
                Regionalität und die Saisonalität. Wir setzen zu 100% auf
                frische Zutaten.
              </p>
              <IconText text="Das Fleisch, die Öle und das Getreide beziehen wir aus Österreich, natürlich alles in sehr hoher Qualität." />
              <IconText text="Das Gemüse und Obst wird frisch auf einem Bauernmarkt, nur wenige Kilometer von der Produktion eingekauft." />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex bg-secondary h-28 rounded-b-[100%]"></div>
      <div className="flex flex-col items-center">
        <ImageRowLayout imageUrl={solarpanel} reverse>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-4xl font-hossRound ">
              Es ist uns wichtig ressourcenschonend zu handeln.
            </h2>
            <p className="text-slate-500 leading-8">
              Wir arbeiten stetig daran, unseren CO2 Fußabdruck zu reduzieren
              und unsere Produktion zu optimieren.
            </p>
            <p className="flex text-slate-500">
              Mit einem eigenen Brunnen, einer Photovoltaikanlage und vielen
              Zukunftsideen gelingt es uns, Stück für Stück unsere Umwelt zu
              schützen.
            </p>
          </div>
        </ImageRowLayout>
        <ImageRowLayout imageUrl={threesausage}>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-4xl font-hossRound ">
              Die Futtermenge wird an deinen Hund angepasst und in praktische
              Portionen verpackt.
            </h2>
            <p className="text-slate-500 leading-8">
              WAUME ist ein individuell portioniertes Frischfutter das sich nach
              den Bedürfnissen deines Hundes richtet. Die Benefits:
            </p>
            <IconText text="eine unkomplizierte Fütterung, denn eine Wurst = eine Mahlzeit" />
            <IconText text="erleichtert das Gewichtsmanagement" />
          </div>
        </ImageRowLayout>
      </div>
    </>
  );
};
export default Hero;
