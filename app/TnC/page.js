"use client";

import React, { useEffect } from "react";

const TnC = () => {
  React.useEffect(() => {
    // This code runs only on the client side
    document.cookie = "googtrans=/en/de; path=/";
  }, []);
  return (
    <div className="flex flex-col justify-center p-5 md:p-10">
      <h1 className="font-hossRound text-4xl">
        Allgemeine Geschäftsbedingungen
      </h1>
      <ol className="list-decimal">
        <li className="text-xl">Geltungsbereich</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Diese Allgemeinen Geschäftsbedingungen (im Folgenden „AGB“ genannt)
            der PPF Petfood GmbH (im Folgenden „WAUME“ genannt) gelten für alle
            Verträge, die Verbraucher oder Unternehmer (im Folgenden „Kunde“
            genannt) mit WAUME über die im Online-Shop präsentierten Waren
            und/oder Dienstleistungen abschließen. Die Einbeziehung von
            Bedingungen des Kunden wird hiermit widersprochen, es sei denn, es
            wurde ausdrücklich schriftlich etwas anderes vereinbart.
          </li>
          <li className="mb-2">
            Der Kaufvertrag kommt mit der PPF Pro Petfood GmbH zustande. Weitere
            Informationen über uns finden Sie im Impressum.
          </li>
          <li className="mb-2">
            Im Sinne dieser Allgemeinen Geschäftsbedingungen bezeichnet der
            Begriff „Verbraucher“ jede natürliche Person, die Rechtsgeschäfte zu
            Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch
            ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.
            „Unternehmer“ sind natürliche oder juristische Personen oder
            rechtsfähige Personengesellschaften, die bei Abschluss eines
            Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen
            beruflichen Tätigkeit handeln.
          </li>
          <li className="mb-2">
            Der Kunde garantiert, dass alle im Bestellvorgang gemachten Angaben
            aktuell und wahrheitsgemäß sind.
          </li>
          <li className="mb-2">
            WAUME behält sich das Recht vor, allgemeine Geschäftsbedingungen
            nach folgendem Verfahren zu ändern: Geplante Änderungen werden den
            Kunden mitgeteilt und sie werden über ihr Widerspruchsrecht
            informiert. Änderungen gelten als angenommen, wenn Kunden nicht
            innerhalb von 30 Tagen nach Mitteilung der Änderung widersprechen.
            Im Falle eines Widerspruchs behalten wir uns das Recht vor,
            Angebotsvarianten mit unbestimmter Laufzeit oder Anzahl von
            Lieferungen zu kündigen.
          </li>
          <li className="mb-2">
            Bei der Bestellung ist der Kunde verpflichtet, eine korrekte
            E-Mail-Adresse für die Bestellabwicklung anzugeben, damit E-Mails
            von WAUME empfangen werden können. Passwörter dürfen nicht an Dritte
            weitergegeben werden. Der Kunde muss sichere Passwörter nach
            gängigen Standards wählen und diese unzugänglich für unbefugte
            Personen aufbewahren. Bei Verlust oder Offenlegung muss der Kunde
            WAUME unverzüglich in Textform informieren. Kunden haften gemäß den
            gesetzlichen Bestimmungen für jeden Missbrauch und daraus
            resultierende Forderungen.
          </li>
        </ol>
        <li className="mb-2">Vertragsschluss</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Produktbeschreibungen im Online-Shop stellen keine verbindlichen
            Angebote von WAUME dar, sondern dienen lediglich als Grundlage für
            Kunden, ein verbindliches Angebot abzugeben. Kunden haben die
            Möglichkeit, Angebote über den Online-Shop abzugeben. Wenn der Kunde
            Waren und/oder Dienstleistungen in den Warenkorb legt und den
            elektronischen Bestellprozess durchläuft, gibt er durch Klicken auf
            den Bestellbutton „Kostenpflichtig bestellen“ ein rechtlich
            verbindliches Vertragsangebot in Bezug auf die im Warenkorb
            enthaltenen Waren und/oder Dienstleistungen ab.
          </li>
          <li className="mb-2">
            Unmittelbar nach der Bestellung erhält der Kunde eine automatische
            Empfangsbestätigung des Vertragsangebots von WAUME, die noch keine
            Annahme des Angebots darstellt. WAUME hat das Recht, das Angebot des
            Kunden innerhalb von fünf Arbeitstagen anzunehmen, entweder durch
            Zusendung einer schriftlichen Bestätigungsnachricht (E-Mail, SMS
            oder ähnliches) oder durch Aufforderung zur Zahlung nach Eingang der
            Bestellung. Wenn beide Optionen vorliegen, kommt der Vertrag mit dem
            Eintreffen der ersten Option zustande. Die Annahmefrist für das
            Angebot beginnt am Tag nach dem Absenden des Angebots durch den
            Kunden und endet mit Ablauf des fünften folgenden Arbeitstages.
            Nimmt WAUME es nicht rechtzeitig an, gilt das Angebot nach
            Fristablauf als nicht angenommen. Der Vertragsschluss ist derzeit
            nur in deutscher Sprache möglich.
          </li>
          <li className="mb-2">
            Bei Abgabe eines Angebots speichert WAUME das Angebot; dies kann vom
            Kunden über sein passwortgeschütztes Kundenkonto (falls erstellt)
            unter Angabe der entsprechenden Login-Daten wieder abgerufen werden.
          </li>
          <li className="mb-2">
            Wenn in ihrem E-Mail-Konto SPAM-Filter verwendet werden, muss der
            Kunde sicherstellen, dass alle E-Mails von WAUME oder Dritten im
            Zusammenhang mit der Bestellung, die die Bestellung im Auftrag von
            WAUME abwickeln, zugestellt werden können.
          </li>
        </ol>
        <li className="mb-2">Zahlungsbedingungen</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Verschiedene Zahlungsmöglichkeiten stehen Kunden zur Verfügung.
            Sofern in der Produktbeschreibung von WAUME nicht anders angegeben,
            sind die aufgeführten Preise Gesamtpreise, einschließlich der
            gesetzlichen Mehrwertsteuer.
          </li>
          <li className="mb-2">
            Wenn Vorauszahlung oder Banküberweisung vereinbart ist, ist die
            Zahlung sofort nach Vertragsschluss fällig.
          </li>
          <li className="mb-2">
            Im Falle von Gebühren, die von der Finanzinstitution des Kunden auf
            WAUME erhoben werden, behält sich WAUME das Recht vor, diese
            Gebühren an den Kunden weiterzugeben. Dies gilt insbesondere für
            Rücklastschriften, die nicht von WAUME zu vertreten sind oder nicht
            von WAUME autorisiert wurden.
          </li>
          <li className="mb-2">
            Bei verspäteter Zahlung gelten die gesetzlichen Verzugszinsen. Der
            Kunde ist verpflichtet, die damit verbundenen Kosten für die
            Einschaltung von Inkassobüros und Anwälten zur Durchsetzung von
            Ansprüchen zu tragen. Im Falle eines Zahlungsverzugs verpflichtet
            sich der Kunde, die von WAUME entstandenen Mahn- und Inkassokosten
            zu erstatten. Mit Blick auf ein Inkassobüro verpflichtet sich der
            Kunde, die Vergütung zu erstatten, die sich aus der jeweiligen
            Verordnung des Bundesministers für Wirtschaft und Arbeit (BMWA) über
            die Höchstsätze der Vergütung ergibt, auf die Inkassobüros Anspruch
            haben.
          </li>
          <li className="mb-2">
            Wenn Sie die Zahlungsmethode „SOFORT“ wählen, erfolgt die Abwicklung
            über den Zahlungsdienstleister SOFORT GmbH, Theresienhöhe 12, 80339
            München (im Folgenden „SOFORT“). Um den Rechnungsbetrag mit „SOFORT“
            bezahlen zu können, benötigt der Kunde ein für „SOFORT“
            freigeschaltetes Online-Banking-Konto, muss sich während des
            Zahlungsvorgangs identifizieren und die Zahlungsanweisung an
            „SOFORT“ bestätigen. Die Zahlungstransaktion wird unmittelbar danach
            von „SOFORT“ durchgeführt und vom Bankkonto des Kunden abgebucht.
            Weitere Informationen zur Zahlungsmethode „SOFORT“ finden Sie unter
            https://www.klarna.com/sofort/.
          </li>
          <li className="mb-2">
            Wenn Sie die Zahlungsmethode „PayPal“ wählen, erfolgt die Abwicklung
            über den Zahlungsdienstleister PayPal (Europe) S.à r.l. et Cie,
            S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg, gemäß den
            Nutzungsbedingungen von PayPal, die unter
            https://www.paypal.com/de/webapps/mpp/ua/useragreement-full
            eingesehen werden können.
          </li>
          <li className="mb-2">
            Wenn Sie die Zahlungsmethode „Kauf auf Rechnung“ wählen, ist der
            Kaufpreis fällig, sobald die Ware geliefert und in Rechnung gestellt
            wurde. Der Kaufpreis ist innerhalb von 14 (vierzehn) Tagen ab
            Rechnungsdatum ohne Abzug an Klarna AB, Sveavägen 46,11134
            Stockholm, Schweden (www.klarna.de), zu zahlen, sofern keine andere
            Vereinbarung getroffen wurde. Die Zahlungsmethode „Kauf auf
            Rechnung“ setzt eine erfolgreiche Bonitätsprüfung durch Klarna AB
            voraus. Wenn dem Kunden nach der Bonitätsprüfung die Zahlungsmethode
            „Kauf auf Rechnung“ gewährt wird, erfolgt die Zahlungsabwicklung in
            Zusammenarbeit mit Klarna AB, an die WAUME die Zahlungsforderung
            abtritt. In diesem Fall kann der Kunde nur mit schuldbefreiender
            Wirkung an Klarna AB zahlen. Es gelten die allgemeinen
            Geschäftsbedingungen von Klarna AB, die der Kunde während des
            Bestellvorgangs einsehen kann. WAUME behält sich das Recht vor, die
            Zahlungsmethode „Kauf auf Rechnung“ bis zu einem bestimmten
            Bestellvolumen anzubieten und sie abzulehnen, wenn das angegebene
            Bestellvolumen überschritten wird. In diesem Fall wird WAUME den
            Kunden über eine entsprechende Zahlungseinschränkung in den
            Zahlungsinformationen im Online-Shop informieren.
          </li>
          <li className="mb-2">
            Wenn die Zahlungsmethode „PayPal-Rechnung“ gewählt wird, erfolgt die
            Zahlungsabwicklung über den Zahlungsdienstleister PayPal (Europe)
            S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg (im
            Folgenden „PayPal“), an den WAUME seine Zahlungsaufforderung
            abtritt. Vor Annahme der Abtretungserklärung von WAUME führt PayPal
            eine Bonitätsprüfung anhand der vom Kunden angegebenen Daten durch.
            WAUME behält sich das Recht vor, die Zahlungsart „PayPal-Rechnung“
            im Falle eines negativen Ergebnisses abzulehnen.
          </li>
        </ol>
      </ol>
      <p className="my-5">
        Im Falle eines negativen Testergebnisses verweigern Sie dies zu tun.
        Wenn die Zahlungsmethode „PayPal-Rechnung“ von PayPal genehmigt wird,
        muss der Kunde den Rechnungsbetrag innerhalb von 14 Tagen nach Erhalt
        der Ware an PayPal zahlen. In diesem Fall kann er Zahlungen nur mit
        schuldbefreiender Wirkung an PayPal leisten. Der Verkäufer bleibt jedoch
        auch im Falle einer Abtretung der Forderungen für allgemeine
        Kundenanfragen verantwortlich, z.B. B. über die Waren, Lieferzeit,
        Versand, Rücksendungen, Beschwerden, Widerrufserklärungen und Sendungen
        oder Gutschriften. Darüber hinaus gelten die Allgemeinen
        Nutzungsbedingungen für die Nutzung von PayPals Kauf auf Rechnung, die
        unter https://www.paypal.com/de/webapps/mpp/ua/pui-terms eingesehen
        werden können.
      </p>

      <ol className="list-decimal ml-6">
        <li className="mb-2">
          Wenn Sie die Zahlungsmethode „PayPal-Lastschrift“ wählen, wird PayPal
          den Rechnungsbetrag vom Bankkonto des Kunden im Auftrag von WAUME nach
          Erteilung eines SEPA-Lastschriftmandats einziehen, jedoch nicht vor
          Ablauf der Frist für Vorabinformationen. Eine Vorabankündigung ist
          jede Kommunikation (z.B. Rechnung, Police, Vertrag) an den Kunden, die
          eine Belastung mittels SEPA-Lastschrift ankündigt. Wird die
          Lastschrift aufgrund unzureichender Kontodeckung, falscher Bankdaten
          oder eines unberechtigten Widerspruchs des Kunden nicht eingelöst,
          trägt der Kunde die Rücklastschriftgebühren der jeweiligen
          Kreditinstitution, wenn er dafür verantwortlich ist.
        </li>
        <li className="mb-2">
          Wenn Sie die Zahlungsmethode Lastschrift über Stripe wählen, erfolgt
          die Zahlungsabwicklung über den Zahlungsdienstleister Stripe Payments
          Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin,
          Irland (nachfolgend „Stripe“). In diesem Fall wird Stripe den
          Rechnungsbetrag vom Bankkonto des Kunden im Auftrag von WAUME nach
          Erteilung eines SEPA-Lastschriftmandats einziehen, jedoch nicht vor
          Ablauf der Frist für Vorabinformationen. Eine Vorabankündigung ist
          jede Kommunikation (z.B. Rechnung, Police, Vertrag) an den Kunden, die
          eine Belastung mittels SEPA-Lastschrift ankündigt.
        </li>
        <li className="mb-2">
          Wird die Lastschrift aufgrund unzureichender Kontodeckung, falscher
          Bankdaten oder eines unberechtigten Widerspruchs des Kunden nicht
          eingelöst, trägt der Kunde die Rücklastschriftgebühren der jeweiligen
          Kreditinstitution, wenn er dafür verantwortlich ist. WAUME behält sich
          das Recht vor, eine Bonitätsprüfung durchzuführen, wenn Sie die
          SEPA-Lastschrift-Zahlungsmethode wählen, und diese Zahlungsmethode
          abzulehnen, wenn die Bonitätsprüfung negativ ausfällt.
        </li>
        <li className="mb-2">
          Wenn Sie die Zahlungsmethode Kreditkarte über Stripe wählen, ist der
          Rechnungsbetrag sofort nach Vertragsabschluss fällig. Die Abwicklung
          erfolgt über den Zahlungsdienstleister Stripe Payments Europe Ltd., 1
          Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland
          (nachfolgend „Stripe“). Stripe behält sich das Recht vor, eine
          Bonitätsprüfung durchzuführen und diese Zahlungsmethode abzulehnen,
          wenn die Bonitätsprüfung negativ ausfällt.
        </li>
        <li className="mb-2">
          Etwaige zusätzliche Liefer- und Versandkosten sind in der jeweiligen
          Produktbeschreibung gesondert aufgeführt.
        </li>
      </ol>

      <ol className="list-decimal">
        <li className="mb-2">Versand- und Lieferbedingungen</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Sofern keine anderen Vereinbarungen getroffen werden, erfolgt die
            Lieferung der Ware durch Versand an die vom Kunden im Bestellvorgang
            angegebene Lieferadresse. Bei Auswahl der Zahlungsmethode PayPal ist
            jedoch die zum Zeitpunkt der Zahlung vom Kunden bei PayPal
            hinterlegte Lieferadresse maßgeblich. Aus logistischen Gründen ist
            eine Selbstabholung der Ware nicht möglich.
          </li>
          <li className="mb-2">
            Für den Fall, dass die Ware von der Transportfirma aufgrund der
            Unmöglichkeit der Zustellung an den Kunden zurückgesendet wird,
            trägt der Kunde die Kosten des erfolglosen Versands. Hinsichtlich
            der Versandkosten gilt dies nicht, wenn der Kunde sein
            Widerrufsrecht wirksam ausgeübt hat - es gelten die Regelungen von
            WAUME zum Widerrufsrecht.
          </li>
        </ol>
        <li className="mb-2">Vertragsdauer und Kündigung</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Mit WAUME abgeschlossene Kaufverträge werden grundsätzlich auf
            unbestimmte Zeit abgeschlossen (im Folgenden auch als „Abonnement“
            bezeichnet). Kündigungen von Abonnements, die bis zu 10 Werktage vor
            der nächsten Lieferung eingehen, führen zur Beendigung der
            vertraglich vereinbarten Liefertermine ab dem unmittelbar folgenden
            Termin. Spätere Kündigungen gelten erst ab dem darauffolgenden
            vertraglich vereinbarten Liefertermin. Eine Kündigung vor Erhalt der
            ersten Lieferung ist grundsätzlich nicht möglich.
          </li>
          <li className="mb-2">
            In Ausnahmefällen kann es Verträge mit fester Laufzeit oder einer
            festen Anzahl vereinbarter Lieferungen geben. Verträge mit fester
            Laufzeit oder einer festen Anzahl vereinbarter Lieferungen enden
            nach Ablauf der Laufzeit oder mit dem Versand der vereinbarten
            Lieferungen. In diesen Fällen ist keine gesonderte Kündigung
            erforderlich und das Vertragsverhältnis wird nicht automatisch
            verlängert.
          </li>
          <li className="mb-2">
            Die Kündigung kann sowohl schriftlich durch WAUME als auch durch den
            Kunden sowie durch Selbstkündigung im Benutzerkonto erfolgen. Im
            Falle einer Kündigung wird dem Kunden der Betrag für eventuell
            bereits bezahlte, aber nicht gelieferte Bestellungen umgehend
            erstattet.
          </li>
        </ol>
        <li className="mb-2">Widerrufsrecht</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Verbrauchern steht in der Regel ein Widerrufsrecht zu. Gemäß § 18
            FAGG haben Verbraucher (unter anderem Ausnahmen) kein Widerrufsrecht
            für Waren, die nach Kundenspezifikationen angefertigt werden oder
            eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind, wie
            beispielsweise Hundefutter, das individuell nach
            Kundenspezifikationen hergestellt und auf die persönlichen
            Bedürfnisse des jeweiligen Hundes abgestimmt ist.
          </li>
          <li className="mb-2">
            Bei nicht individuell angefertigten Produkten haben Verbraucher das
            Recht, Verträge innerhalb von 14 Tagen ohne Angabe von Gründen zu
            widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem
            der Verbraucher oder ein von ihm benannter Dritter, der nicht der
            Beförderer ist, die letzte Ware einer Bestellung in Besitz genommen
            hat. Bei einem Vertrag über die regelmäßige Lieferung von Waren über
            einen festgelegten Zeitraum beträgt die Widerrufsfrist 14 Tage ab
            dem Tag, an dem der Verbraucher oder ein von ihm benannter Dritter,
            der nicht der Beförderer ist, die erste Ware in Besitz genommen hat.
            Um das Widerrufsrecht auszuüben, ist der Verbraucher verpflichtet,
            WAUME mittels einer eindeutigen Erklärung (z.B. ein mit der Post
            versandter Brief oder E-Mail) über den Entschluss, den Vertrag zu
            widerrufen, zu informieren. Ein Muster-Widerrufsformular finden Sie
            unten.
          </li>
          <li className="mb-2">
            Im Falle eines fristgerechten Widerrufs hinsichtlich widerrufbarer
            Waren sind wir verpflichtet, dem Verbraucher alle Zahlungen, die wir
            vom Verbraucher erhalten haben, einschließlich der Lieferkosten (mit
            Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass der
            Verbraucher eine andere Art der Lieferung als die von uns angebotene
            günstigste Standardlieferung gewählt hat), unverzüglich und
            spätestens innerhalb von 14 Tagen ab dem Tag, an dem wir die
            Mitteilung über den Widerruf dieses Vertrags erhalten haben, zu
            erstatten. Für diese Rückzahlung verwenden wir dasselbe
            Zahlungsmittel, das bei der ursprünglichen Transaktion eingesetzt
            wurde, es sei denn, mit dem Verbraucher wurde ausdrücklich etwas
            anderes vereinbart; in keinem Fall werden dem Verbraucher wegen
            dieser Rückzahlung Gebühren berechnet. Wir können die Rückzahlung
            verweigern, bis wir die Waren zurückerhalten haben oder bis der
            Verbraucher den Nachweis erbracht hat, dass er die Waren
            zurückgesandt hat, je nachdem, welches der frühere Zeitpunkt ist.
            Der Verbraucher hat die Waren unverzüglich und in jedem Fall
            spätestens binnen vierzehn Tagen ab dem Tag, an dem er uns über den
            Widerruf dieses Vertrags unterrichtet, an uns zurückzusenden oder zu
            übergeben. Die Frist ist gewahrt, wenn der Verbraucher die Waren vor
            Ablauf der Frist von vierzehn Tagen absendet. Der Verbraucher trägt
            die unmittelbaren Kosten der Rücksendung der Waren. Der Verbraucher
            muss für einen etwaigen Wertverlust der Waren nur aufkommen, wenn
            dieser Wertverlust auf einen zur Prüfung der Beschaffenheit,
            Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang
            mit ihnen zurückzuführen ist.
          </li>
          <li className="mb-2">B. WIDERRUFSFORMULAR</li>
          <p>
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
            dieses Formular aus und senden Sie es zurück.)
          </p>
          An
          <br />
          PPF Pro Petfood GmbH
          <br />
          Sternäckerweg 44
          <br />
          8041 Graz
          <br />
          Österreich
          <br />
          Email: info@waume.at
          <br />
          <p className="mt-5">
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der
            folgenden Dienstleistung (*)
          </p>
          <p>_______________________________________________________</p>
          Bestellt am (*) ____________ / erhalten am (*) __________________
          <br />
          ________________________________________________________
          <br />
          Name des/der Verbraucher(s)
          <br />
          ________________________________________________________
          <br />
          Anschrift des/der Verbraucher(s)
          <br />
          ________________________________________________________
          <br />
          Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
          <br />
          _________________________
          <br />
          Datum
          <br />
          (*) Unzutreffendes streichen
        </ol>
        <p>1 Gewährleistung</p>
        <p className="my-5">
          Liegt ein Mangel der Kaufsache vor, gelten die Vorschriften der
          gesetzlichen Mängelhaftung. Werden Waren mit offensichtlichen
          Transportschäden angeliefert, bitten wir die Kunden, diese beim
          Zusteller zu reklamieren und uns unverzüglich zu informieren.
        </p>
      </ol>

      <ol className="list-decimal">
        <li className="mb-2">Versand- und Lieferbedingungen</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Sofern keine anderen Vereinbarungen getroffen wurden, erfolgt die
            Lieferung der Ware per Versand an die vom Kunden im Bestellprozess
            angegebene Lieferadresse. Bei Auswahl der Zahlungsmethode PayPal ist
            jedoch die vom Kunden bei PayPal zur Zeit der Zahlung angegebene
            Lieferadresse maßgeblich. Aus logistischen Gründen ist eine
            Selbstabholung der Ware nicht möglich.
          </li>
          <li className="mb-2">
            Sollte die Ware aufgrund der Unmöglichkeit der Zustellung durch das
            Transportunternehmen zurückgesandt werden, trägt der Kunde die
            Kosten für den erfolglosen Versand. Dies gilt hinsichtlich der
            Versandkosten nicht, wenn der Kunde sein Widerrufsrecht wirksam
            ausgeübt hat - die Regelungen von WAUME zum Widerrufsrecht finden
            Anwendung.
          </li>
        </ol>
        <li className="mb-2">Vertragsdauer und Kündigung</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Mit WAUME abgeschlossene Kaufverträge werden in der Regel auf
            unbestimmte Zeit abgeschlossen (nachfolgend auch als „Abonnement“
            bezeichnet). Kündigungen von Abonnements, die bis zu 10 Werktage vor
            dem nächsten Liefertermin eingehen, führen zur Beendigung der
            vertraglich vereinbarten Liefertermine ab dem unmittelbar folgenden
            Datum. Spätere Kündigungen gelten erst am vertraglich vereinbarten
            Liefertermin nach dem nächsten. Eine Kündigung vor Erhalt der ersten
            Lieferung ist grundsätzlich nicht möglich.
          </li>
          <li className="mb-2">
            In Ausnahmefällen kann es Verträge mit einer festen Laufzeit oder
            einer festen Anzahl vereinbarter Lieferungen geben. Verträge mit
            einer festen Laufzeit oder einer festen Anzahl vereinbarter
            Lieferungen enden nach Ablauf der Laufzeit oder mit der Versendung
            der vereinbarten Lieferungen. In diesen Fällen ist keine gesonderte
            Kündigung erforderlich, und das Vertragsverhältnis verlängert sich
            nicht automatisch.
          </li>
          <li className="mb-2">
            Die Kündigung kann sowohl schriftlich durch WAUME und den Kunden als
            auch durch Selbstkündigung im Benutzerkonto erfolgen. Im Falle einer
            Kündigung wird dem Kunden der Betrag für bereits bezahlte, aber noch
            nicht gelieferte Bestellungen umgehend erstattet.
          </li>
        </ol>
        <li className="mb-2">Widerrufsrecht</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Grundsätzlich haben Verbraucher ein Widerrufsrecht. Gemäß § 18 FAGG
            besteht für Verbraucher kein Widerrufsrecht (unter anderem) für
            Waren, die nach Kundenspezifikationen angefertigt werden oder
            eindeutig auf persönliche Bedürfnisse zugeschnitten sind, wie etwa
            Hundefutter, das individuell nach Kundenspezifikationen hergestellt
            und auf die persönlichen Bedürfnisse des jeweiligen Hundes
            zugeschnitten wurde.
          </li>
          <li className="mb-2">
            Für nicht individuell angefertigte Produkte haben Verbraucher das
            Recht, Verträge innerhalb von 14 Tagen ohne Angabe von Gründen zu
            widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem
            der Verbraucher oder ein von ihm benannter Dritter, der nicht der
            Beförderer ist, die letzte Ware in einer Bestellung erhalten hat.
            Bei einem Vertrag über die regelmäßige Lieferung von Waren über
            einen festgelegten Zeitraum beträgt die Widerrufsfrist 14 Tage ab
            dem Tag, an dem der Verbraucher oder ein von ihm benannter Dritter,
            der nicht der Beförderer ist, die erste Ware erhalten hat. Um das
            Widerrufsrecht auszuüben, ist der Verbraucher verpflichtet, WAUME
            über den Entschluss, den Vertrag zu widerrufen, durch eine
            eindeutige Erklärung (z.B. einen per Post oder E-Mail versandten
            Brief) zu informieren. Ein Beispiel für ein Widerrufsformular finden
            Sie unten.
          </li>
          <li className="mb-2">
            Bei rechtzeitiger Widerrufserklärung hinsichtlich widerrufbarer
            Waren sind wir verpflichtet, Verbrauchern alle Zahlungen, die wir
            von ihnen erhalten haben, einschließlich der Lieferkosten (mit
            Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass der
            Verbraucher eine andere Art der Lieferung als die von uns
            angebotene, günstigste Standardlieferung gewählt hat), unverzüglich
            und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die
            Mitteilung über den Widerruf dieses Vertrags bei uns eingegangen
            ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel,
            das bei der ursprünglichen Transaktion eingesetzt wurde, es sei
            denn, es wurde ausdrücklich etwas anderes vereinbart; In keinem Fall
            werden dem Verbraucher wegen dieser Rückzahlung Entgelte berechnet.
            Wir können die Rückzahlung verweigern, bis wir die Waren wieder
            zurückerhalten haben oder bis der Verbraucher den Nachweis erbracht
            hat, dass er die Waren zurückgesandt hat, je nachdem, welches der
            frühere Zeitpunkt ist. Die Waren müssen unverzüglich und in jedem
            Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem der
            Verbraucher uns über den Widerruf dieses Vertrags unterrichtet, an
            uns zurückgesandt oder übergeben werden. Die Frist ist gewahrt, wenn
            die Waren vor Ablauf der Frist von vierzehn Tagen abgesandt werden.
            Die direkten Kosten der Rücksendung der Waren trägt der Verbraucher.
            Das Risiko eines etwaigen Verlusts der Waren trägt der Verbraucher
            nur dann, wenn dieser Verlust auf eine von ihm verschuldete,
            unsachgemäße Behandlung zurückzuführen ist.
          </li>
          <li className="mb-2">B. WIDERRUFSFORMULAR</li>
          <p>
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
            dieses Formular aus und senden Sie es zurück.)
          </p>
          <p>An</p>
          <p>PPF Pro Petfood GmbH</p>
          <p>Sternäckerweg 44</p>
          <p>8041 Graz</p>
          <p>Österreich</p>
          <p>Email: info@waume.at</p>
          <p className="mt-5">
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der
            folgenden Dienstleistung (*)
          </p>
          <p>_______________________________________________________</p>
          <p>
            Bestellt am (*) ____________ / erhalten am (*) __________________
          </p>
          <p>________________________________________________________</p>
          <p>Name des/der Verbraucher(s)</p>
          <p>________________________________________________________</p>
          <p>Anschrift des/der Verbraucher(s)</p>
          <p>________________________________________________________</p>
          <p>
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
          </p>
          <p>_________________________</p>
          <p>Datum</p>
          <p>(*) Unzutreffendes streichen</p>
        </ol>
        <li className="mb-2">Gewährleistung</li>
        <p className="my-5">
          Bei Mängeln der gekauften Ware gelten die Bestimmungen der
          gesetzlichen Gewährleistung. Bei offensichtlichen Transportschäden
          bitten wir Kunden, sich beim Zusteller zu beschweren und uns umgehend
          zu informieren.
        </p>
        <li className="mb-2">Freistellung von Haftungsansprüchen</li>
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            Der Kunde verpflichtet sich, WAUME und deren Geschäftsführung,
            Mitarbeiter, Vertreter und Erfüllungsgehilfen von allen Ansprüchen,
            Haftungen, Schäden, Kosten und Auslagen, einschließlich angemessener
            Anwaltskosten, die sich aus oder in Zusammenhang mit einem Verstoß
            gegen diese AGB, oder jeglichen Streitigkeiten oder Forderungen, die
            aus oder im Zusammenhang mit dem Bestellvorgang, der Lieferung oder
            der Nutzung der Produkte oder Dienstleistungen entstehen,
            freizustellen und schadlos zu halten.
          </li>
        </ol>
      </ol>
    </div>
  );
};

export default TnC;
