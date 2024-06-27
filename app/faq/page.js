import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@components/Nav"), {
  ssr: false,
});
const Accordions = dynamic(() => import("@components/howItWorks/accordions"), {
  ssr: false,
});

const accordianData1 = [
  {
    title: "WOHER WEISS ICH, WANN MEINE NÄCHSTE LIEFERUNG ANKOMMT?",
    content:
      "Wir werden dir bei deiner ersten Bestellung mitteilen, wann die erste Lieferung kommt, danach bekommst du WAUME alle 4 Wochen zugeschickt. Du kannst die Bestellung im Loginbereich jederzeit ändern.",
  },
  {
    title: " KANN ICH DAS FUTTER AN EUCH ZURÜCKSCHICKEN?",
    content:
      "Sollte dein Hund das Futter nicht vertragen, oder es deinem Liebling nicht schmecken, kannst du dich bei uns melden und wir werden eine Lösung finden.",
  },
  {
    title: " WANN ERHALTE ICH DIE LIEFERUNG?",
    content:
      "Bei deiner ersten Bestellung teilen wir dir mit, wann die nächste Lieferung zugeschickt wird. Danach erhältst du zirka alle 28 Tage eine neue Lieferung, meist zwischen Dienstag und Freitag. Solltest du nicht zuhause sein, wird dein Paket vor der Tür abgestellt (mit Abstellgenehmigung der Österreichischen Post), oder in eine Abholstation der Österreichischen Post in deiner Nähe geliefert.",
  },
  {
    title: "WO UND WIE KANN ICH EUER FUTTER KAUFEN?",
    content:
      "Du kannst WAUME auf unserer Webseite bestellen – entweder als Abo oder einmalig als Probierpaket.",
  },
];
const accordianData2 = [
  {
    title: "VERLÄNGERT SICH DAS ABO AUTOMATISCH?",
    content:
      "Ja, Abos verlängern sich automatisch. Du kannst Abos im Loginbereich jederzeit kündigen/ändern/pausieren.",
  },
  {
    title: " WAS PASSIERT, WENN ICH IN DEN URLAUB FAHRE?",
    content:
      "Du kannst dein Abo jederzeit pausieren. Gib uns bitte rechtzeitig Bescheid. Du kannst WAUME ohne Probleme  in den Urlaub mitnehmen. Achte darauf, das Futter nicht direkter Sonne auszusetzen und es  kühl und dunkel zu lagern.",
  },
  {
    title: "WIE KANN ICH MEIN ABO BEARBEITEN, ÄNDERN, PAUSIEREN ODER KÜNDIGEN?",
    content:
      "Du kannst Abos im Loginbereich jederzeit bearbeiten, ändern und pausieren.Im Loginbereich kannst du dein Abo auch kündigen. Bitte erledige deine Änderungen rechtzeitig, mindestens 10 Tage vor der nächsten Lieferung.",
  },
];
const accordianData3 = [
  {
    title: "WOHER WISST IHR, WIE VIEL FUTTER MEIN HUND PRO TAG BENÖTIGT?",
    content:
      "Unser Futter-Generator stellt sicher, dass dein Hund die richtige Portion Futter bekommt, denn wir berechnen die exakte Kalorienzahl auf der Grundlage deiner Angaben zu Gewicht, Rasse, Alter, Aktivitätsniveau und Körperkonstitution.Wir berücksichtigen auch eventuelle Unverträglichkeiten deines Hundes und empfehlen unsere passenden Rezepte. Ist dein Hund unter- oder übergewichtig, kannst du dies im Konfigurator ganz einfach angeben und wir passen die Portionen an, damit er sein Idealgewicht erreicht!",
  },
  {
    title: "WIE FUNKTIONIERT DIE FUTTERUMSTELLUNG?",
    content:
      "Wir führen dich gerne durch unseren Umstellungs-Guide, der in unserer Starter Box enthalten ist. Für die meisten Hunde bedeutet die Umstellung, dass sie allmählich an das neue Futter gewöhnt werden, damit ihr Magen-Darm-Trakt nicht durcheinandergerät. Erfolgt diese Gewöhnung zu schnell, hat der Verdauungstrakt deines Hundes keine Möglichkeit, sich auf das neue Futter einzustellen, weshalb es zu unerwünschten Durchfällen kommen kann. Eine langsame Anpassung kann vor allem bei empfindlichen Hunden sinnvoll sein. Hintergrund dazu ist, dass ein neues Futter die Bakterienflora im Darm deines Hundes beeinflusst. Die Adaption dauert etwa 7 Tage.",
  },
];
const accordianData4 = [
  {
    title:
      "WAS PASSIERT, WENN DIE WURST EINMAL GEÖFFNET IST UND NICHT GLEICH VERFÜTTERT WIRD?",
    content:
      "Nach dem Öffnen der Wurst ist das Futter innerhalb von 24 Stunden zu verbrauchen. Nach dem Öffnen muss das Futter im Kühlschrank gelagert werden. Optimalerweise abgedeckt, oder in einer verschließbaren Box.",
  },
  {
    title: "WIE MUSS ICH DAS FUTTER LAGERN?",
    content:
      "Optimal lagerst du dein WAUME kühl, dunkel und vor direkter Sonneneinstrahlung geschützt. WAUME muss nicht im Kühlschrank oder Tiefkühlschrank gelagert werden.",
  },
  {
    title: "IST WAUME AUCH FÜR WELPEN GEEIGNET?",
    content:
      "WAUME ist ein Alleinfuttermittel für ausgewachsene, adulte Hunde. Wir empfehlen WAUME daher erst nach Abschluss des Höhenwachstums. Dieses hat dein Hund zwischen 12 und 15 Monaten abgeschlossen. Danach kann dein Hund WAUME in vollen Zügen genießen. Bist du dir unsicher, ob dein Hund das Höhenwachstum schon abgeschlossen hat? Kontaktiere am besten deinen Tierarzt.",
  },
  {
    title: "WIE WIRD EUER FUTTER ZUBEREITET?",
    content:
      "Kurz gesagt, mit ganz viel Liebe. Längere Antwort: Unsere Zutaten werden regional, in hoher Qualität bezogen und werden in kleinen Chargen in unserer eigenen Produktion im Pro Village selbst gekocht und von Hand verpackt. Unsere Hunde können bezeugen, wie köstlich es ist. Mehr Informationen findest du auf unserer Homepage bei “Über Uns” und auf der Homepage von Pro Village www.pro-village.eu.",
  },
  {
    title: " MEIN HUND IST ÜBERGEWICHTIG, IST WAUME EIN GEEIGNETES FUTTER?",
    content:
      "Die Gesundheit der Hunde liegt uns besonders am Herzen. Unsere Rezepturen und Futterpläne richten sich nach dem neuesten Stand der Wissenschaft und auf hohen Qualitätsstandards. Mit dem Futter-Generator wird durch die Angabe von Rasse, Alter, Aktivitätsniveau und Idealgewicht die optimale Energiemenge pro Tag ermittelt. Auf diese Weise erstellen wir individuell abgepackte Tagesrationen, die wirklich auf die Bedürfnisse deines Hundes zugeschnitten sind. Unser Team steht dir von Anfang an zur Seite, um die Fortschritte deines Hundes zu überwachen und Anpassungen an deinem Plan vorzunehmen.",
  },
  {
    title: "WARUM FRISCHFUTTER, WARUM WAUME?",
    content:
      "Hundefutter gibt es in den verschiedensten Formen und Varianten. Wir haben mit WAUME ein Frischfutter entwickelt, das frisch, gesund und optimal bedarfsdeckend ist. Denn unser Ziel ist es, deinem Hund nicht nur einfach ein Futter vor die Nase zu stellen, das ihn satt macht- sondern ihm Wohlbefinden für sein ganzes Hundeleben zu bereiten. Um eine optimale Ernährung und Bedarfsdeckung aller wichtigen Mineralstoffe und Vitamine zu gewährleisten, werden unsere WAUME Sorten einer Vollanalyse unterzogen. Das bedeutet, ein Labor analysiert das Futter auf alle essentiellen Nährstoffe. Damit kannst du sicher sein, dass dein Hund optimal mit allen Nährstoffen versorgt ist.Frischfutter bedeutet für uns, frische Zutaten in hoher Qualität zu verwenden, diese werden direkt verarbeitet und abgepackt. Durch ein optimiertes Erhitzungsverfahren können wir einen großen Teil der Nährstoffe aufrechterhalten.Ganz gleich, ob dein Hund ein wählerischer Esser ist, der mit einem bestimmten Gesundheitsproblem zu kämpfen hat, oder ob er völlig gesund ist und so gut wie alles frisst – wir haben die positiven Auswirkungen der Fütterung von Frischfutter bei unseren eigenen Hunden und den Hunden unserer Kunden aus erster Hand erfahren. Unser Futter hat nichts Magisches an sich: WAUME ist frisches Futter, das praktisch ist. Hundefutter, so wie es sein sollte. Great Food for Great Dogs",
  },
  {
    title: "WIE WIRD WAUME AM BESTEN SERVIERT?",
    content:
      "WAUME ist individuell für deinen Hund vorportioniert. Einfach die Wurst bei Zimmertemperatur im Napf aufschneiden und je nach Bedarf noch etwas Wasser hinzufügen. Tipp: Bevorzugt dein Hund warme Mahlzeiten, oder hat er einen empfindlichen Magen, kannst du etwas warmes Wasser untermischen.",
  },
];

export const Faq = () => {
  return (
    <>
      <Accordions title="Bestellung und Lieferung" data={accordianData1} />
      <Accordions title="Abo" data={accordianData2} />{" "}
      <Accordions title="Futterkonfigurator" data={accordianData3} />
      <Accordions title="Das Futter" data={accordianData4} />
    </>
  );
};
export default Faq;
