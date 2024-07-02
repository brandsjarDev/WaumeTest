"use client";
import React from "react";

const PrivacyPolicy = () => {
  React.useEffect(() => {
    // This code runs only on the client side
    document.cookie = "googtrans=/en/de; path=/";
  }, []);

  return (
    <div className="flex flex-col  p-8 bg-gray-100 text-gray-800 ">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Thank you for visiting our website{" "}
        <a href="https://www.waume.at" className="text-blue-500 underline">
          www.waume.at
        </a>
        . The protection of your personal data is important to us. Below we
        would like to inform you about the processing of your data when you use
        our website.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          1. Verantwortliche Stelle
        </h2>
        <p className="mb-2">
          Die verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung
          (DSGVO) ist:
        </p>
        <address className="not-italic mb-4">
          PPF Pro Petfood GmbH
          <br />
          Sternäckerweg 44
          <br />
          A-8041 Graz
          <br />
          Telefon:{" "}
          <a href="tel:+4369911343715" className="text-blue-500 underline">
            0699 11343715
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@waume.at" className="text-blue-500 underline">
            info@waume.at
          </a>
        </address>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Erhebung und Verarbeitung personenbezogener Daten
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2.1. Zugriffsdaten</h3>
          <p className="mb-2">
            Bei jedem Zugriff auf unsere Website werden Informationen
            automatisch durch den Webserver erfasst und in sogenannten
            Server-Logfiles gespeichert. Diese Daten umfassen:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>IP-Adresse des zugreifenden Geräts</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und Betriebssystem</li>
          </ul>
          <p className="mb-2">
            Diese Daten werden verarbeitet, um eine reibungslose Verbindung und
            komfortable Nutzung unserer Website zu gewährleisten.
            Rechtsgrundlage hierfür ist Art. 6 Abs. 1 Buchstabe f DSGVO. Die
            Daten werden nur so lange gespeichert, wie es für die Zwecke, für
            die sie erhoben oder verarbeitet wurden, erforderlich ist.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2.2. Kontaktformular</h3>
          <p className="mb-2">
            Wenn Sie uns über das Kontaktformular auf unserer Website
            kontaktieren, werden die von Ihnen bereitgestellten Daten (z.B.
            Name, E-Mail-Adresse, Nachricht) von uns gespeichert, um Ihre
            Anfrage zu bearbeiten und bei Folgefragen darauf zurückzugreifen.
            Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht
            weitergegeben. Die Verarbeitung der in das Kontaktformular
            eingegebenen Daten erfolgt daher ausschließlich auf Grundlage Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die Daten werden
            gelöscht, sobald sie für die Zwecke ihrer Verarbeitung nicht mehr
            erforderlich sind oder Sie Ihre Einwilligung widerrufen.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            2.3. Bestellvorgang im Online-Shop
          </h3>
          <p className="mb-2">
            Wenn Sie eine Bestellung in unserem Online-Shop aufgeben möchten,
            ist die Angabe bestimmter personenbezogener Daten erforderlich, um
            den Vertrag mit Ihnen abzuschließen und abzuwickeln. Die von Ihnen
            bereitgestellten Daten werden zur Erfüllung des Vertrags verwendet
            und können an Dritte weitergegeben werden, wenn dies zur Lieferung
            der bestellten Waren oder zur Abwicklung der Zahlung erforderlich
            ist. Rechtsgrundlage für die Verarbeitung dieser Daten ist Art. 6
            Abs. 1 lit. b DSGVO.
          </p>
          <p className="mb-2">
            Wir arbeiten mit den Zahlungsdienstleistern Stripe, WooCommerce
            Payments und Paypal zusammen, um Zahlungen in unserem Online-Shop
            abzuwickeln. Wenn Sie eine Zahlungsmethode auswählen, werden Ihre
            Zahlungsdetails an den jeweiligen Zahlungsdienstleister übermittelt.
            Ihre Daten werden von den Zahlungsdienstleistern auf der Grundlage
            von Art. 6 Abs. 1 lit. b DSGVO verarbeitet.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            2.4. Schriften von Adobe Typekit
          </h3>
          <p className="mb-2">
            Auf unserer Website verwenden wir Schriften von Adobe Typekit, einem
            Dienst von Adobe Systems Software Ireland Limited, 4-6 Riverwalk,
            Citywest Business Campus, Dublin 24, Irland. Wenn Sie unsere Website
            besuchen, lädt Ihr Browser die erforderlichen Schriften direkt von
            den Adobe-Servern herunter, um sie korrekt anzuzeigen. Dabei wird
            Ihre IP-Adresse an Adobe übertragen und dort gespeichert. Die
            Verwendung von Adobe Typekit erfolgt auf der Grundlage von Art. 6
            Abs. 1 lit. f DSGVO.
          </p>

          <h4 className="text-lg font-semibold mb-2">
            2.4.1 Zweck der Datenverarbeitung
          </h4>
          <p className="mb-2">
            Die Integration von Adobe Fonts ermöglicht es uns, eine attraktive
            Darstellung unserer Website durch die Verwendung von Schriften zu
            gewährleisten. Bestimmte Daten, wie Ihre IP-Adresse, werden an die
            Adobe-Server übertragen und dort verarbeitet.
          </p>

          <h4 className="text-lg font-semibold mb-2">2.4.2 Rechtsgrundlage</h4>
          <p className="mb-2">
            Die Verarbeitung Ihrer Daten erfolgt auf der Grundlage unserer
            berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO. Unser
            berechtigtes Interesse besteht darin, Ihnen eine attraktive und
            benutzerfreundliche Website anzubieten.
          </p>

          <h4 className="text-lg font-semibold mb-2">
            2.4.3 Übermittlung von Daten an Dritte
          </h4>
          <p className="mb-2">
            Bei der Integration von Adobe Fonts werden Ihre Daten an Adobe
            übermittelt. Adobe hat sich dem EU-US Privacy Shield Framework
            unterworfen, um ein angemessenes Datenschutzniveau zu gewährleisten.
          </p>

          <h4 className="text-lg font-semibold mb-2">2.4.4 Speicherdauer</h4>
          <p>
            Die im Zusammenhang mit der Integration von Adobe Fonts erhobenen
            Daten werden nur für die Dauer der Nutzung unserer Website
            gespeichert und dann gelöscht.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Ihre Rechte</h2>
        <p className="mb-2">
          Sie haben das Recht, Auskunft über die von uns über Sie gespeicherten
          Daten zu erhalten. Sie haben auch das Recht, Ihre Daten zu
          korrigieren, zu löschen oder die Verarbeitung Ihrer Daten
          einzuschränken. Sie können auch der Verarbeitung Ihrer Daten
          widersprechen oder Ihr Recht auf Datenübertragbarkeit geltend machen.
          Bitte wenden Sie sich an die oben genannte verantwortliche Stelle.
        </p>
        <p>
          Darüber hinaus haben Sie das Recht, sich bei einer
          Datenschutzaufsichtsbehörde zu beschweren.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          4. Verantwortliche Stelle
        </h2>
        <p className="mb-2">
          Die verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung
          (DSGVO) für die Verarbeitung Ihrer personenbezogenen Daten auf der
          Website www.waume.at ist:
        </p>
        <address className="not-italic mb-4">
          PPF Pro Petfood GmbH
          <br />
          Sternäckerweg 44
          <br />
          A-8041 Graz
          <br />
          Telefon:{" "}
          <a href="tel:+4369911343715" className="text-blue-500 underline">
            0699 11343715
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@waume.at" className="text-blue-500 underline">
            info@waume.at
          </a>
        </address>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          5. Erhebung und Verarbeitung personenbezogener Daten
        </h2>

        <p className="mb-2">
          Wir erheben und verarbeiten personenbezogene Daten, die Sie uns
          freiwillig zur Verfügung stellen, wenn Sie unsere Website und unseren
          Online-Shop nutzen. Dazu gehören Ihr Name, Adresse, E-Mail-Adresse und
          Telefonnummer. Diese Daten werden verwendet, um Ihre Bestellungen zu
          bearbeiten, mit Ihnen zu kommunizieren und unsere vertraglichen
          Verpflichtungen zu erfüllen. Die Rechtsgrundlage für die Verarbeitung
          Ihrer Daten ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          6. Übermittlung von Daten an Dritte
        </h2>

        <p className="mb-2">
          Zur Abwicklung Ihrer Bestellungen können wir Ihre Daten an Dritte
          weitergeben. Dies umfasst insbesondere die Übermittlung Ihrer Daten an
          Zahlungsdienstleister wie Stripe, WooCommerce Payments und Paypal zur
          Abwicklung der Zahlungen. Darüber hinaus können wir Ihre Daten an
          Versanddienstleister weitergeben, um die Lieferung der bestellten
          Waren zu ermöglichen. Ihre Daten werden ausschließlich zum Zwecke der
          Vertragserfüllung und auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
          weitergegeben.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. WooCommerce</h2>

        <p className="mb-2">
          Wir haben das Open-Source-Shop-System WooCommerce als Plugin auf
          unserer Website integriert. Dieses WooCommerce-Plugin basiert auf dem
          Content-Management-System WordPress, das eine Tochtergesellschaft von
          Automattic Inc. (60 29th Street #343, San Francisco, CA 94110, USA)
          ist. Die implementierten Funktionen senden, speichern und verarbeiten
          Daten an Automattic Inc. In dieser Datenschutzerklärung informieren
          wir Sie darüber, welche Daten betroffen sind, wie das Netzwerk diese
          Daten verwendet und wie Sie die Datenverwaltung verwalten oder
          verhindern können.
        </p>

        <p className="mb-2">
          <strong>Was ist WooCommerce?</strong>
          <br />
          WooCommerce ist ein Online-Shop-System, das seit 2011 Teil des
          WordPress-Verzeichnisses ist und speziell für WordPress-Websites
          konzipiert wurde. Es handelt sich um eine anpassbare,
          Open-Source-eCommerce-Plattform auf Basis von WordPress, die auch als
          WordPress-Plugin in unsere Website integriert wurde.
        </p>

        <p className="mb-2">
          <strong>Warum verwenden wir WooCommerce auf unserer Website?</strong>
          <br />
          Wir verwenden diese praktische Online-Shop-Lösung, um Ihnen unsere
          physischen oder digitalen Produkte oder Dienstleistungen bestmöglich
          auf unserer Website anbieten zu können. Ziel ist es, Ihnen einen
          einfachen und schnellen Zugang zu unserem Sortiment zu ermöglichen,
          damit Sie die gewünschten Produkte schnell und einfach erhalten
          können. Mit WooCommerce haben wir ein gutes Plugin gefunden, das
          unsere Anforderungen an einen Online-Shop erfüllt.
        </p>

        <p className="mb-2">
          <strong>Welche Daten speichert WooCommerce?</strong>
          <br />
          Informationen, die Sie aktiv in ein Textfeld in unserem Online-Shop
          eingeben, können von WooCommerce oder Automattic gesammelt und
          gespeichert werden. Wenn Sie sich bei uns registrieren oder ein
          Produkt bestellen, kann Automattic diese Daten sammeln, verarbeiten
          und speichern. Neben E-Mail-Adresse, Name oder Adresse können auch
          Kreditkarten- oder Rechnungsinformationen enthalten sein. Automattic
          kann diese Informationen anschließend auch für eigene
          Marketingkampagnen verwenden.
        </p>

        <p className="mb-2">
          Es gibt auch Informationen, die Automattic automatisch von Ihnen in
          sogenannten Server-Logdateien sammelt:
        </p>

        <ul className="list-disc list-inside mb-2">
          <li>IP-Adresse</li>
          <li>Browser-Informationen</li>
          <li>Voreingestellte Spracheinstellung</li>
          <li>Datum und Uhrzeit des Webzugriffs</li>
        </ul>

        <p className="mb-2">
          WooCommerce platziert auch Cookies in Ihrem Browser und verwendet
          Technologien wie Pixel-Tags (Web-Beacons), um Sie beispielsweise
          eindeutig als Benutzer zu erkennen und möglicherweise
          interessenbasierte Werbung anzubieten. WooCommerce verwendet eine
          Reihe verschiedener Cookies, die je nach Benutzeraktion gesetzt
          werden. Dies bedeutet, dass beispielsweise ein Cookie gesetzt wird,
          wenn Sie ein Produkt in Ihren Warenkorb legen, damit das Produkt in
          Ihrem Warenkorb bleibt, wenn Sie unsere Website verlassen und zu einem
          späteren Zeitpunkt zurückkehren.
        </p>

        <p>
          Hier zeigen wir Ihnen eine Beispielliste möglicher Cookies, die von
          WooCommerce gesetzt werden können:
        </p>

        <ul className="list-disc list-inside mb-2">
          <li>
            <strong>Name:</strong> woocommerce_items_in_cart
          </li>
          <li>
            <strong>Wert:</strong> 1
          </li>
          <li>
            <strong>Zweck:</strong> Das Cookie hilft WooCommerce festzustellen,
            wann sich der Inhalt des Warenkorbs ändert.
          </li>
          <li>
            <strong>Ablaufdatum:</strong> Nach Sitzungsende
          </li>
          <li>Weitere Cookie-Details können ähnlich hinzugefügt werden</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          8. Verwendung von Cookies
        </h2>
        <p className="mb-2">
          Unsere Website verwendet Cookies, um die Nutzung der Website zu
          erleichtern und bestimmte Funktionen bereitzustellen. Cookies sind
          kleine Textdateien, die auf Ihrem Gerät gespeichert werden und
          Informationen über Ihre Nutzung der Website enthalten. Sie können die
          Verwendung von Cookies in Ihren Browsereinstellungen steuern und
          gegebenenfalls deaktivieren. Bitte beachten Sie jedoch, dass dies die
          Funktionalität der Website beeinträchtigen kann. Cookies werden auf
          der Grundlage von Art. 6 Abs. 1 lit. f DSGVO verwendet.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Real Cookie Banner</h2>
        <p className="mb-2">
          Wir verwenden das Einwilligungstool "Real Cookie Banner", um die
          verwendeten Cookies und ähnliche Technologien (Tracking-Pixel,
          Web-Beacons usw.) und die damit verbundenen Einwilligungen zu
          verwalten. Details zur Funktionsweise des "Real Cookie Banner" finden
          Sie unter{" "}
          <a
            href="https://devowl.io/de/rcb/datenverarbeitung/"
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://devowl.io/de/rcb/datenverarbeitung/
          </a>
          .
        </p>
        <p>
          Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten in
          diesem Kontext ist Art. 6 Abs. 1 lit. c DSGVO und Art. 6 Abs. 1 lit. f
          DSGVO. Unser berechtigtes Interesse besteht in der Verwaltung der
          verwendeten Cookies und ähnlichen Technologien sowie der damit
          verbundenen Einwilligungen.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Google Analytics</h2>
        <p className="mb-2">
          Unsere Website verwendet Google Analytics, einen Webanalysedienst von
          Google Inc. Google Analytics verwendet sogenannte "Cookies" (siehe
          Punkt 6). Unser Unternehmen stützt sich auf ein überwiegend
          berechtigtes Interesse an der Erstellung von
          Website-Zugriffsstatistiken in kosteneffizienter und einfacher Weise
          (Art. 6 Abs. 1 f).
        </p>
        <p>
          Die durch das Cookie erzeugten Informationen über Ihre Benutzung der
          Website werden in der Regel an einen Server von Google in den USA
          übertragen und dort gespeichert. Wenn jedoch die IP-Anonymisierung auf
          dieser Website aktiviert ist, wird Ihre IP-Adresse von Google
          innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
          Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
          zuvor gekürzt.
        </p>
        <p>
          Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
          Google in den USA übertragen und dort gekürzt. Im Auftrag des
          Betreibers dieser Website wird Google diese Informationen benutzen, um
          Ihre Nutzung der Website auszuwerten, um Reports über die
          Website-Aktivitäten zusammenzustellen und um weitere mit der
          Website-Nutzung und der Internetnutzung verbundene Dienstleistungen
          gegenüber dem Website-Betreiber zu erbringen. Die im Rahmen von Google
          Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
          anderen Daten von Google zusammengeführt.
        </p>
        <p>
          Sie können die Speicherung der Cookies durch eine entsprechende
          Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
          darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
          Funktionen dieser Website vollumfänglich nutzen können. Darüber hinaus
          können Sie die Erfassung der durch das Cookie erzeugten und auf Ihre
          Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google
          sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie
          das unter dem folgenden Link verfügbare Browser-Plugin herunterladen
          und installieren:{" "}
          <a
            href="http://tools.google.com/dlpage/gaoptout?hl=de"
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 underline"
          >
            http://tools.google.com/dlpage/gaoptout?hl=de
          </a>
        </p>
        <p>
          Weitere Informationen zu den Nutzungsbedingungen und zum Datenschutz
          finden Sie unter{" "}
          <a
            href="http://www.google.com/analytics/terms/de.html"
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 underline"
          >
            http://www.google.com/analytics/terms/de.html
          </a>{" "}
          oder unter{" "}
          <a
            href="https://support.google.com/analytics/answer/6004245?hl=de"
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 underline"
          >
            https://support.google.com/analytics/answer/6004245?hl=de
          </a>
          .
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">11. Datensicherheit</h2>
        <p className="mb-2">
          Wir treffen angemessene technische und organisatorische Maßnahmen, um
          Ihre Daten vor Verlust, Missbrauch, unbefugtem Zugriff oder
          Offenlegung zu schützen. Unsere Website und unser Online-Shop sind
          durch SSL-Verschlüsselung gesichert, um die Übertragung Ihrer Daten zu
          schützen. Darüber hinaus haben nur befugte Mitarbeiter Zugang zu Ihren
          Daten und sind zur Vertraulichkeit verpflichtet.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          12. Änderungen der Datenschutzbestimmungen
        </h2>
        <p className="mb-2">
          Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit
          zu ändern oder anzupassen. Die aktuellste Version finden Sie auf
          unserer Website. Wir empfehlen Ihnen, die Datenschutzerklärung
          regelmäßig zu überprüfen, um über etwaige Änderungen informiert zu
          sein.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">13. Kontakt</h2>
        <p className="mb-2">
          Wenn Sie Fragen oder Bedenken zur Verarbeitung Ihrer personenbezogenen
          Daten haben oder Ihre Rechte gemäß der DSGVO ausüben möchten, können
          Sie uns jederzeit kontaktieren. Verwenden Sie bitte die oben
          angegebenen Kontaktinformationen.
        </p>
        <p>
          Vielen Dank für Ihr Vertrauen in unsere Website und unseren
          Online-Shop. Wir nehmen den Schutz Ihrer Daten ernst und werden alles
          in unserer Macht Stehende tun, um Ihre Privatsphäre zu schützen und
          Ihre Daten sicher zu verarbeiten.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
