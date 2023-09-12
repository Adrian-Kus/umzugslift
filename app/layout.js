import Navbar from "./components/Navbar";
import "./globals.css";
import { Crimson_Text, Work_Sans } from "next/font/google";
import Footer from "./components/Footer";

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <GoogleTagManager />
      <body className={`${crimson_text.variable} ${work_sans.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
