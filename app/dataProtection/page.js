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
        <h2 className="text-2xl font-semibold mb-2">1. Responsible body</h2>
        <p className="mb-2">
          The responsible body within the meaning of the General Data Protection
          Regulation (GDPR) is:
        </p>
        <address className="not-italic mb-4">
          PPF Pro Petfood GmbH
          <br />
          Sternäckerweg 44
          <br />
          A-8041 Graz
          <br />
          Phone:{" "}
          <a href="tel:+4369911343715" className="text-blue-500 underline">
            0699 11343715
          </a>
          <br />
          Email:{" "}
          <a href="mailto:info@waume.at" className="text-blue-500 underline">
            info@waume.at
          </a>
        </address>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Collection and processing of personal data
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2.1. Access data</h3>
          <p className="mb-2">
            Every time you access our website, information is automatically
            recorded by the web server and stored in so-called server log files.
            This data includes:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Date and time of access</li>
            <li>IP address of the accessing device</li>
            <li>Name and URL of the retrieved file</li>
            <li>Website from which access is made (referrer URL)</li>
            <li>Browser and operating system used</li>
          </ul>
          <p className="mb-2">
            This data is processed to ensure a smooth connection and comfortable
            use of our website. The legal basis for this is Art. 6 Paragraph 1
            Letter f of GDPR. The data is only stored for as long as it is
            necessary for the purposes for which it was collected or processed.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2.2. Contact form</h3>
          <p className="mb-2">
            If you contact us via the contact form on our website, the data you
            provide (e.g. name, email address, message) will be stored by us to
            process your request and in the event of follow-up questions. We
            will not pass this data on without your consent. The processing of
            the data entered in the contact form is therefore carried out
            exclusively on the basis of your consent (Art. 6 Para. 1 lit. a
            GDPR). The data will be deleted as soon as it is no longer required
            for the purpose of its processing or you revoke your consent.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            2.3. Ordering process in the online shop
          </h3>
          <p className="mb-2">
            If you would like to place an order in our online shop, the
            provision of certain personal data is required in order to conclude
            and process the contract with you. The data you provide will be used
            to fulfill the contract and may be passed on to third parties if
            this is necessary to deliver the ordered goods or to process the
            payment. The legal basis for the processing of this data is Art. 6
            Para. 1 lit. b GDPR.
          </p>
          <p className="mb-2">
            We work with the payment service providers Stripe, WooCommerce
            Payments, and Paypal to process payments in our online shop. When
            you select a payment method, your payment details are transmitted to
            the respective payment service provider. Your data is processed by
            the payment service providers on the basis of Art. 6 Para. 1 lit. b
            GDPR.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            2.4. Fonts from Adobe Typekit
          </h3>
          <p className="mb-2">
            On our website, we use fonts from Adobe Typekit, a service of Adobe
            Systems Software Ireland Limited, 4-6 Riverwalk, Citywest Business
            Campus, Dublin 24, Ireland. When you visit our website, your browser
            downloads the required fonts directly from the Adobe servers in
            order to display them correctly. Your IP address is transmitted to
            Adobe and stored there. The use of Adobe Typekit is based on Art. 6
            Para. 1 lit. f GDPR.
          </p>

          <h4 className="text-lg font-semibold mb-2">
            2.4.1 Purpose of data processing
          </h4>
          <p className="mb-2">
            The integration of Adobe Fonts enables us to ensure an attractive
            presentation of our website through the use of fonts. Certain data,
            such as your IP address, is transferred to the Adobe servers and
            processed there.
          </p>

          <h4 className="text-lg font-semibold mb-2">2.4.2 Legal basis</h4>
          <p className="mb-2">
            The processing of your data is based on our legitimate interests in
            accordance with Art. 6 (1) (f) GDPR. Our legitimate interest is to
            offer you an attractive and user-friendly website.
          </p>

          <h4 className="text-lg font-semibold mb-2">
            2.4.3 Transfer of data to third parties
          </h4>
          <p className="mb-2">
            When integrating Adobe Fonts, your data will be transferred to
            Adobe. Adobe has submitted to the EU-US Privacy Shield Framework to
            ensure an appropriate level of data protection.
          </p>

          <h4 className="text-lg font-semibold mb-2">2.4.4 Storage period</h4>
          <p>
            The data we collect in connection with the integration of Adobe
            Fonts is only stored for the duration of use of our website and is
            then deleted.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Your rights</h2>
        <p className="mb-2">
          You have the right to receive information about the data we have
          stored about you. You also have the right to correct, delete or
          restrict the processing of your data. You can also object to the
          processing of your data or assert your right to data portability.
          Please contact the responsible body named above.
        </p>
        <p>
          In addition, you have the right to complain to a data protection
          supervisory authority.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Responsible body</h2>
        <p className="mb-2">
          The responsible body within the meaning of the General Data Protection
          Regulation (GDPR) for the processing of your personal data on the
          website www.waume.at is:
        </p>
        <address className="not-italic mb-4">
          PPF Pro Petfood GmbH
          <br />
          Sternäckerweg 44
          <br />
          A-8041 Graz
          <br />
          Phone:{" "}
          <a href="tel:+4369911343715" className="text-blue-500 underline">
            0699 11343715
          </a>
          <br />
          Email:{" "}
          <a href="mailto:info@waume.at" className="text-blue-500 underline">
            info@waume.at
          </a>
        </address>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          5. Collection and processing of personal data
        </h2>

        <p className="mb-2">
          We collect and process personal data that you voluntarily provide to
          us when using our website and online shop. This includes your name,
          address, email address, and telephone number. This data is used to
          process your orders, to communicate with you, and to fulfill our
          contractual obligations. The legal basis for the processing of your
          data is Art. 6 Para. 1 lit. b GDPR.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          6. Transfer of data to third parties
        </h2>

        <p className="mb-2">
          In order to process your orders, we may pass your data on to third
          parties. This includes in particular the transfer of your data to
          payment service providers such as Stripe, WooCommerce Payments, and
          Paypal in order to process the payments. In addition, we may pass your
          data on to shipping service providers in order to enable the delivery
          of the ordered goods. Your data will be passed on exclusively for the
          purpose of fulfilling the contract and on the basis of Art. 6 Para. 1
          lit. b GDPR.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. WooCommerce</h2>

        <p className="mb-2">
          We have integrated the open-source shop system WooCommerce as a plugin
          on our website. This WooCommerce plugin is based on the content
          management system WordPress, which is a subsidiary of Automattic Inc.
          (60 29th Street #343, San Francisco, CA 94110, USA). The implemented
          functions send, store, and process data to Automattic Inc. In this
          privacy policy, we inform you about what data is involved, how the
          network uses this data, and how you can manage or prevent data
          storage.
        </p>

        <p className="mb-2">
          <strong>What is WooCommerce?</strong>
          <br />
          WooCommerce is an online store system that has been part of the
          WordPress directory since 2011 and is specifically designed for
          WordPress websites. It is a customizable, open-source eCommerce
          platform based on WordPress and has also been integrated into our
          website as a WordPress plugin.
        </p>

        <p className="mb-2">
          <strong>Why do we use WooCommerce on our website?</strong>
          <br />
          We use this practical online shop solution to be able to offer you our
          physical or digital products or services in the best possible way on
          our website. The aim is to give you simple and easy access to our
          range so that you can get the products you want quickly and easily.
          With WooCommerce, we have found a good plugin that meets our
          requirements for an online shop.
        </p>

        <p className="mb-2">
          <strong>What data is stored by WooCommerce?</strong>
          <br />
          Information that you actively enter into a text field in our online
          shop can be collected and stored by WooCommerce or Automattic. So if
          you register with us or order a product, Automattic can collect,
          process, and store this data. In addition to email address, name, or
          address, this can also include credit card or billing information.
          Automattic can subsequently also use this information for its own
          marketing campaigns.
        </p>

        <p className="mb-2">
          There is also information that Automattic automatically collects from
          you in so-called server log files:
        </p>

        <ul className="list-disc list-inside mb-2">
          <li>IP Address</li>
          <li>Browser information</li>
          <li>Preset language setting</li>
          <li>Date and time of web access</li>
        </ul>

        <p className="mb-2">
          WooCommerce also places cookies in your browser and uses technologies
          such as pixel tags (web beacons) to, for example, clearly identify you
          as a user and possibly offer interest-based advertising. WooCommerce
          uses a number of different cookies that are set depending on user
          action. This means that if, for example, you put a product in your
          shopping cart, a cookie is set so that the product remains in your
          shopping cart when you leave our website and return at a later time.
        </p>

        <p>
          Here we show you an example list of possible cookies that can be set
          by WooCommerce:
        </p>

        <ul className="list-disc list-inside mb-2">
          <li>
            <strong>Name:</strong> woocommerce_items_in_cart
          </li>
          <li>
            <strong>Value:</strong> 1
          </li>
          <li>
            <strong>Purpose:</strong> The cookie helps WooCommerce determine
            when the contents of the shopping cart change.
          </li>
          <li>
            <strong>Expiry date:</strong> after end of session
          </li>
          <li>...</li>
          <li>More cookie details can be added similarly</li>
        </ul>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Use of cookies</h2>
          <p className="mb-2">
            Our website uses cookies to make it easier to use the website and to
            provide certain functions. Cookies are small text files that are
            stored on your device and contain information about your use of the
            website. You can control the use of cookies in your browser settings
            and deactivate them if necessary. Please note, however, that this
            may affect the functionality of the website. Cookies are used on the
            basis of Art. 6 Para. 1 lit. f GDPR.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Real Cookie Banner</h2>
          <p className="mb-2">
            We use the consent tool “Real Cookie Banner” to manage the cookies
            and similar technologies used (tracking pixels, web beacons, etc.)
            and related consents. Details on how “Real Cookie Banner” works can
            be found at{" "}
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
            The legal basis for the processing of personal data in this context
            is Art. 6 (1) (c) GDPR and Art. 6 (1) (f) GDPR. Our legitimate
            interest is the management of the cookies and similar technologies
            used and the related consents.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">10. Google Analytics</h2>
          <p className="mb-2">
            Our website uses Google Analytics, a web analysis service provided
            by Google Inc. Google Analytics uses so-called "cookies" (see point
            6). Our company relies on a predominantly legitimate interest in
            creating website access statistics in a cost-efficient and simple
            manner. (Art. 6, paragraph 1 f).
          </p>
          <p>
            The information generated by the cookie on your use of the website
            is usually transferred to a Google server in the USA and stored
            there. However, if IP anonymization is activated on this website,
            Google will shorten your IP address beforehand within the EU or in
            other contracting states to the Agreement on the European Economic
            Area.
          </p>
          <p>
            Only in exceptional cases will the full IP address be transmitted to
            a Google server in the USA and shortened there. On behalf of the
            operator of this website, Google will use this information to
            evaluate your use of the website, to compile reports on website
            activity and to provide the website operator with other services
            relating to website activity and internet usage. However, the IP
            address transmitted by the browser as part of Google Analytics will
            not be merged with other Google data.
          </p>
          <p>
            You can prevent cookies from being saved by selecting the
            appropriate settings on your browser; however, please note that if
            you do this you may not be able to use all of the website's
            functions to their full extent. In addition, you can prevent Google
            from collecting the data generated by the cookie and relating to
            your use of the website (including your IP address) and from
            processing this data by downloading and installing the browser
            plug-in available at the following link:{" "}
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
            Further information on terms of use and data protection can be found
            at{" "}
            <a
              href="http://www.google.com/analytics/terms/de.html"
              rel="noreferrer"
              target="_blank"
              className="text-blue-500 underline"
            >
              http://www.google.com/analytics/terms/de.html
            </a>{" "}
            or at{" "}
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
          <h2 className="text-2xl font-semibold mb-2">11. Data security</h2>
          <p className="mb-2">
            We take appropriate technical and organizational measures to protect
            your data from loss, misuse, unauthorized access, or disclosure. Our
            website and online shop are secured by SSL encryption to protect the
            transmission of your data. In addition, only authorized employees
            have access to your data and are obliged to maintain
            confidentiality.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            12. Changes to the Privacy Policy
          </h2>
          <p className="mb-2">
            We reserve the right to change or modify this privacy policy at any
            time. The most current version can be found on our website. We
            recommend that you review the privacy policy regularly to be
            informed of any changes.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">13. Contact</h2>
          <p className="mb-2">
            If you have any questions or concerns regarding the processing of
            your personal data or if you wish to exercise your rights under the
            GDPR, you can contact us at any time. Please use the contact details
            provided above.
          </p>
          <p>
            Thank you for your trust in our website and our online shop. We take
            the protection of your data seriously and will do everything in our
            power to protect your privacy and process your data securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
