import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

// We should know a predefined nickname of a language and provide its title (the name for displaying)
// interface LanguageDescriptor {
//   name: string;
//   title: string;
// }

// // The following definition describes typings for JS-based declarations in public/assets/scripts/lang-config.js
// declare global {
//   namespace globalThis {
//     var __GOOGLE_TRANSLATION_CONFIG__: {
//       languages: LanguageDescriptor[];
//       defaultLanguage: string;
//     };
//   }
// }

const LanguageSwitcher = () => (
  <>
    <div id="google_translate_element"></div>
    <script type="text/javascript">
      {function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "es",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }}
    </script>
    <script
      type="text/javascript"
      src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    ></script>
  </>
);

export { LanguageSwitcher, COOKIE_NAME };
