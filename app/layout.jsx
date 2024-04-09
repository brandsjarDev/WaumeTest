"use client"
import "@styles/globals.css";
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Nav from "@components/Nav";

export const metadata = {
  title: "Waume",
  description: "Dog food",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head><link rel="stylesheet" href="https://use.typekit.net/vea6vvp.css"/></head>
    <body>
    <Provider store={store}>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
