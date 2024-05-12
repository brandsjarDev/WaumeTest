"use client";
import { useEffect } from "react";
import "@styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Nav from "@components/Nav";
import Footer from "@components/footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vea6vvp.css" />
      </head>
      <body>
        <Provider store={store}>
          <main className="app font-bioSans">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
