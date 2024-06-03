"use client";

import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function CookieConsent({
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

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
            <h1 className="text-lg font-medium">We use cookies</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4 flex-grow overflow-y-auto">
            <p className="text-sm font-normal text-start">
              We use cookies and similar technologies on our website and process
              your personal data (e.g. IP address) to, for example, personalize
              content and ads, integrate third-party media or analyze access to
              our website. Data processing can also only take place as a result
              of cookies being set. We share this data with third parties that
              we name in the privacy settings. Data processing can take place
              with your consent or on the basis of a legitimate interest that
              you can object to in the privacy settings. You have the right not
              to consent and to change or withdraw your consent at a later date.
              You can find more information about the use of your data in our
              privacy policy.
            </p>
            <p className="text-sm font-normal text-start my-5 text-slate-400">
              Some services process personal data in unsafe third countries. By
              consenting to the use of these services, you also agree to the
              processing of your data in these unsafe third countries in
              accordance with Art. 49 Para. 1 lit. a GDPR. This entails the risk
              that your data will be processed by authorities for control and
              monitoring purposes, possibly without the possibility of legal
              redress. U Are you under 14 years old? Unfortunately, you do not
              have to agree to this service yourself in order to see this
              content. Ask your parents or guardians to agree to the service
              with you! By accepting all services, you allow Adobe Fonts
              2(Functional)and Google Analytics 3(Statistics)These are divided
              into groups Essential 1 , Functional 2 and Statistics 3 according
              to their purpose (affiliation indicated by superscript numbers).
              In addition, the WooCommerce Stripe Payment Gateway 1,U(Essential,
              data processing in unsafe third countries)and WooCommerce
              1(Essential)on the basis of a legitimate interest.
              <br />
              <br />
              <span className="text-xs">
                By clicking "
                <span className="font-medium opacity-80">Accept</span>", you
                agree to our use of cookies.
              </span>
              <br />
              <a href="TnC" className="text-xs underline">
                Learn more.
              </a>
            </p>
          </div>
          <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
            <Button onClick={accept} className="w-full">
              Accept
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
