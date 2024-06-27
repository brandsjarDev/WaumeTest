import React from "react";
import { getAccordianData } from "@helpers/prodData";
import Navbar from "@components/Nav";
import ThemeButton from "@components/themeButton";
import dynamic from "next/dynamic";
const ThemeAccordion = dynamic(() => import("@components/themeAccordion"), {
  ssr: false,
});

const accordianData = [
  {
    title: "WARUM FRISCHFUTTER, WARUM WAUME?",
    content:
      "Hundefutter gibt es in den verschiedensten Formen und Varianten. Wir haben mit WAUME ein Frischfutter entwickelt, das frisch, gesund und optimal bedarfsdeckend ist. Denn unser Ziel ist es, deinem Hund nicht nur einfach ein Futter vor die Nase zu stellen, das ihn satt macht- sondern ihm Wohlbefinden für sein ganzes Hundeleben zu bereiten. Um eine optimale Ernährung und Bedarfsdeckung aller wichtigen Mineralstoffe und Vitamine zu gewährleisten, werden unsere WAUME Sorten einer Vollanalyse unterzogen. Das bedeutet, ein Labor analysiert das Futter auf alle essentiellen Nährstoffe. Damit kannst du sicher sein, dass dein Hund optimal mit allen Nährstoffen versorgt ist. Frischfutter bedeutet für uns, frische Zutaten in hoher Qualität zu verwenden, diese werden direkt verarbeitet und abgepackt. Durch ein optimiertes Erhitzungsverfahren können wir einen großen Teil der Nährstoffe aufrechterhalten. Ganz gleich, ob dein Hund ein wählerischer Esser ist, der mit einem bestimmten Gesundheitsproblem zu kämpfen hat, oder ob er völlig gesund ist und so gut wie alles frisst – wir haben die positiven Auswirkungen der Fütterung von Frischfutter bei unseren eigenen Hunden und den Hunden unserer Kunden aus erster Hand erfahren. Unser Futter hat nichts Magisches an sich: WAUME ist frisches Futter, das praktisch ist. Hundefutter, so wie es sein sollte. Great Food for Great Dogs",
  },
  {
    title: "WIE WIRD EUER FUTTER ZUBEREITET?",
    content:
      "Kurz gesagt, mit ganz viel Liebe. Längere Antwort: Unsere Zutaten werden regional, in hoher Qualität bezogen und werden in kleinen Chargen in unserer eigenen Produktion im Pro Village selbst gekocht und von Hand verpackt. Unsere Hunde können bezeugen, wie köstlich es ist. Mehr Informationen findest du auf unserer Homepage bei “Über Uns” und auf der Homepage von Pro Village www.pro-village.eu.",
  },
  {
    title: "WIE MUSS ICH DAS FUTTER LAGERN?",
    content:
      "Optimal lagerst du dein WAUME kühl, dunkel und vor direkter Sonneneinstrahlung geschützt. WAUME muss nicht im Kühlschrank oder Tiefkühlschrank gelagert werden.",
  },
];

const Accordions = ({
  title = "Häufig gestellte Fragen",
  data = accordianData,
  more = false,
}) => (
  <>
    {" "}
    <h2 className="text-2xl md:text-4xl text-center font-hossRound mt-10 md:mt-16  ">
      {title}
    </h2>
    <div className="flex flex-col justify-center items-center  gap-10 md:gap-15 py-10 md:py-20 px-2 md:px-5">
      <div className="flex flex-col justify-center w-3/4 items-center  text-lg gap-5 md:gap-14">
        {data.map((item) => (
          <ThemeAccordion
            title={item.title}
            content={item.content}
            className="bg-secondary rounded-xl px-5 md:px-10"
          />
        ))}
      </div>
      {more && (
        <a href="faq">
          {" "}
          <ThemeButton secondary size="xl">
            Alle Fragen anzeigen
          </ThemeButton>
        </a>
      )}
    </div>
  </>
);

export default Accordions;
