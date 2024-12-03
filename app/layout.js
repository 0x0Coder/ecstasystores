import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./components/Providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ecstasy Stores",
  description: "Sex At it's Peak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* Wrap children and layout components with CartProvider */}
          <CartProvider>
            <NavBar />
            {children}
            <Footer />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
