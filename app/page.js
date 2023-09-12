import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import SwiperModule from "./components/Swiper";

export const metadata = {
  title: "Möbellift Hamburg | Schenck & Hansen",
  description:
    "Sie möchten schwere Möbel nicht selbst etliche Stockwerke schleppen? Mieten Sie einfach unseren Möbellift inklusive Bediener. Jetzt mehr erfahren!",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Features />
      <Pricing />
      <Faq />
      <SwiperModule />
    </main>
  );
}
