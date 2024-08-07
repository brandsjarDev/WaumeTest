"use client";
import { useEffect } from "react";
import "@styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Nav from "@components/Nav";
import Footer from "@components/footer";
import CookieConsent from "@components/cookieConsent";

const RootLayout = ({ children }) => {
  useEffect(() => {
    if (typeof Node === "function" && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function (child) {
        if (child.parentNode !== this) {
          if (console) {
            console.error(
              "Cannot remove a child from a different parent",
              child,
              this
            );
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.error(
              "Cannot insert before a reference node from a different parent",
              referenceNode,
              this
            );
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, arguments);
      };
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vea6vvp.css" />
      </head>
      <body>
        <Provider store={store}>
          {" "}
          <Nav />
          <main className="app font-bioSans">{children}</main>
          {/* <Footer /> */}
        </Provider>
        <CookieConsent />
      </body>
    </html>
  );
};

export default RootLayout;
