"use client";
import React from "react";

const Imprint = () => {
  React.useEffect(() => {
    // This code runs only on the client side
    document.cookie = "googtrans=/en/de; path=/";
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Impressum</h1>
      <p className="mb-4">
        Verantwortlich für den Inhalt dieser Website (Angaben gemäß § 25 des
        Mediengesetzes):
      </p>
      <address className="mb-4">
        PPF Pro Petfood GmbH
        <br />
        Sternäckerweg 44
        <br />
        A-8041 Graz
        <br />
        Telefon: 0699 11343715
        <br />
        E-Mail: info@waume.at
      </address>
      <p className="mb-4">
        Unternehmensgegenstand: Tierfutterprodukte
        <br />
        Firmenbuchnummer: FN583126p
        <br />
        Firmengericht: LG für ZRS Graz
        <br />
        UID: ATU78401702
      </p>
      <p className="mb-4">
        Mitglied der Wirtschaftskammer Steiermark
        <br />
        Anwendbare Rechtsvorschrift: Gewerbeordnung
        <br />
        (aktuelle Fassung siehe RIS:{" "}
        <a
          href="http://www.ris.bka.gv.at/bundesrecht/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          http://www.ris.bka.gv.at/bundesrecht/
        </a>
        )<br />
        Aufsichtsbehörde: Stadt Graz
      </p>
      <h2 className="text-xl font-semibold mb-2">AGB</h2>
      <p className="mb-4">
        Informationen zur Streitbeilegung: Verbraucher haben die Möglichkeit,
        Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Haftungsausschluss für Inhalte
      </h2>
      <p className="mb-4">
        Wir aktualisieren und optimieren kontinuierlich den Inhalt dieser
        Website und bemühen uns, genaue und aktuelle Informationen
        bereitzustellen. Dennoch übernehmen wir keine Gewähr für die
        Vollständigkeit, Richtigkeit und Aktualität der bereitgestellten
        Informationen. Dies gilt auch für Links zu anderen Websites. Wir
        behalten uns das Recht vor, ohne vorherige Ankündigung Änderungen oder
        Ergänzungen an den bereitgestellten Informationen vorzunehmen. Wenn Sie
        auf fragwürdige oder rechtswidrige Inhalte stoßen, informieren Sie uns
        bitte umgehend.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Haftungsausschluss für Links
      </h2>
      <p className="mb-4">
        Unsere Website enthält Links zu externen Websites, für deren Inhalt wir
        nicht verantwortlich sind. Wir übernehmen keine Haftung für verlinkte
        Websites, da wir keine Kenntnis von illegalen Aktivitäten haben, bisher
        keine Rechtsverstöße festgestellt wurden und wir verlinkte Inhalte
        umgehend entfernen, sobald wir von etwaigen Rechtsverletzungen Kenntnis
        erlangen. Wenn Sie auf unserer Website illegale Links entdecken, lassen
        Sie es uns bitte wissen.
      </p>
      <h2 className="text-xl font-semibold mb-2">Urheberrechtshinweis</h2>
      <p className="mb-4">
        Alle auf dieser Website präsentierten Inhalte (Bilder, Fotos, Texte,
        Videos) unterliegen dem österreichischen Urheberrecht. Bei Bedarf werden
        wir rechtliche Schritte gegen die unbefugte Nutzung von Teilen unserer
        Inhalte einleiten. Wenn Sie Materialien auf dieser Website entdecken,
        die gegen das Urheberrecht verstoßen, informieren Sie uns bitte.
      </p>
    </div>
  );
};

export default Imprint;
