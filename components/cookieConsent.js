import { useEffect, useState } from "react";
import { CookieIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import PrivacySetting from "./cookieBox";
import ThemeButton from "./themeButton";

export default function CookieConsent({
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [essentialChecked, setEssentialChecked] = useState(true);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {
      // console.log("Error: ", e);
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 w-full h-[50vh] duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-full opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="dark:bg-secondary bg-background rounded-t-md border border-border shadow-lg dark:shadow-none h-full overflow-y-auto">
        <div className="grid gap-2 h-full">
          <div className="border-b border-border dark:border-background/20 h-14 flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">Wir verwenden Cookies</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4 flex-grow overflow-y-auto">
            <p className="text-sm font-normal text-start">
              Wir nutzen auf unserer Website Cookies und ähnliche Technologien
              und verarbeiten Ihre personenbezogenen Daten (z.B. IP-Adresse), um
              beispielsweise Inhalte und Anzeigen zu personalisieren, Medien
              Dritter einzubinden oder die Zugriffe auf unsere Website zu
              analysieren. Eine Datenverarbeitung kann auch nur durch das Setzen
              von Cookies erfolgen. Wir geben diese Daten an Dritte weiter, die
              wir in den Datenschutzeinstellungen benennen. Die
              Datenverarbeitung kann mit Ihrer Einwilligung oder aufgrund eines
              berechtigten Interesses erfolgen, dem Sie in den
              Datenschutzeinstellungen widersprechen können. Sie haben das
              Recht, nicht einzuwilligen und Ihre Einwilligung zu einem späteren
              Zeitpunkt zu ändern oder zu widerrufen. Weitere Informationen zur
              Verwendung Ihrer Daten finden Sie in unserer Datenschutzerklärung.
            </p>
            <p className="text-sm font-normal text-start my-5 text-slate-400">
              Einige Dienste verarbeiten personenbezogene Daten in unsicheren
              Drittländern. Indem Sie in die Nutzung dieser Dienste einwilligen,
              willigen Sie auch in die Verarbeitung Ihrer Daten in diesen
              unsicheren Drittländern gemäß Art. 49 Abs. 1 lit. a DSGVO ein.
              Dies birgt das Risiko, dass Ihre Daten durch Behörden zu Kontroll-
              und Überwachungszwecken verarbeitet werden, möglicherweise ohne
              dass Sie Rechtsbehelfsmöglichkeiten haben. Sie sind unter 14 Jahre
              alt? Leider müssen Sie diesem Dienst nicht selbst zustimmen, um
              diesen Inhalt zu sehen. Bitten Sie Ihre Eltern oder
              Erziehungsberechtigten, dem Dienst gemeinsam mit Ihnen
              zuzustimmen! Indem Sie alle Dienste akzeptieren, erlauben Sie
              Adobe Fonts 2 (Funktional) und Google Analytics 3 (Statistik).
              Diese sind je nach Zweck (Zugehörigkeit durch hochgestellte Zahlen
              gekennzeichnet) in die Gruppen Essenziell 1, Funktional 2 und
              Statistik 3 unterteilt. Darüber hinaus erfolgt die
              Datenverarbeitung in unsicheren Drittländern und WooCommerce
              1(Essential) auf Grundlage eines berechtigten Interesses über das
              WooCommerce Stripe Payment Gateway 1,U(Essential,
              Datenverarbeitung in unsicheren Drittländern) und WooCommerce
              1(Essential).
              <br />
              <br />
              <span className="text-xs">
                Beim Klicken "
                <span className="font-medium opacity-80">Accept</span>", you
                erklären Sie sich mit unserer Cookie-Nutzung einverstanden.
              </span>
              <br />
              <a href="TnC" className="text-xs underline">
                Erfahren Sie mehr.
              </a>
            </p>

            {/* Individual Privacy Settings */}
            <div className="gap-5 space-y-5">
              <PrivacySetting
                heading="Essenzielle (3)"
                description="Essenzielle Dienste sind für die grundlegende Funktionalität der Website erforderlich. Sie beinhalten nur technisch notwendige Dienste. Diesen Diensten kann kein Widerspruch entgegengehalten werden."
                checked={essentialChecked}
                onChange={(e) => setEssentialChecked(e.target.checked)}
              />
              <PrivacySetting
                heading="Funktionale ( 1 )"
                description="Funktionale Dienste sind notwendig, um Funktionen bereitzustellen, die über die wesentliche Funktionalität der Website hinausgehen, wie zum Beispiel schönere Schriftarten, Videowiedergabe oder interaktive Web 2.0-Funktionen. Inhalte von z.B. Video- und Social-Media-Plattformen werden standardmäßig blockiert und können zugestimmt werden. Wird dem Dienst zugestimmt, werden diese Inhalte ohne weitere manuelle Zustimmung automatisch geladen."
                checked={essentialChecked}
                onChange={(e) => setEssentialChecked(e.target.checked)}
              />
              <PrivacySetting
                heading="Statistik ( 1 )"
                description="Individuelle Datenschutzeinstellungen: StatistikStatistik ( 1 )
Statistikdienste sind erforderlich, um pseudonymisierte Daten über Besucher der Website zu sammeln. Die Daten ermöglichen es uns, Besucher besser zu verstehen und die Website zu optimieren."
                checked={essentialChecked}
                onChange={(e) => setEssentialChecked(e.target.checked)}
              />
            </div>
          </div>
          <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
            <ThemeButton onClick={accept} className="w-full">
              Akzeptieren
            </ThemeButton>
            <ThemeButton onClick={accept} className="w-full">
              Individuelle Auswahl speichern
            </ThemeButton>
            <ThemeButton onClick={decline} className="w-full" secondary>
              Ablehnen
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
