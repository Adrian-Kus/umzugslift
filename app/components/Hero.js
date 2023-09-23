import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="text-gray-600 font-work-sans">
        <div className="sm:px-16 px-7 max-w-screen-2xl pt-44 pb-32 xl:pb-44 mx-auto flex xl:flex-row flex-col items-center">
          <div className="lg:flex-grow xl:w-1/2 flex flex-col xl:items-start xl:text-left mb-32 xl:mb-0 items-center text-center">
            <h1 className="lg:w-[87%] font-crimson-text lg:text-[3.1rem] leading-tight text-[2.5rem] sm:text-[2.9rem] mb-4 font-bold text-blue">
              Mieten Sie mehr als einen Möbellift: Erleichtern Sie Ihren Umzug!
            </h1>
            <p className="lg:w-[83%] text-lg sm:text-1.2 leading-relaxed">
              Sie möchten schwere Möbel und Umzugskarton nicht selbst etliche
              Stockwerke schleppen? Mieten Sie einfach unseren modernen
              Möbellift inklusive Bediener.
            </p>
            <a
              href="https://www.my-hammer.de/auftragnehmer/schenck-hansen-kg/bewertungen"
              className="flex mt-5 mb-7 items-center"
            >
              <div className="relative h-7 w-7">
                <Image alt="star-symbol" src="/star.svg" fill={true} />
              </div>
              <div className="relative h-7 w-7">
                <Image alt="star-symbol" src="/star.svg" fill={true} />
              </div>
              <div className="relative h-7 w-7">
                <Image alt="star-symbol" src="/star.svg" fill={true} />
              </div>
              <div className="relative h-7 w-7">
                <Image alt="star-symbol" src="/star.svg" fill={true} />
              </div>
              <div className="relative h-7 w-7">
                <Image alt="star-symbol" src="/star.svg" fill={true} />
              </div>
              <p className="ml-2 font-medium text-base sm:text-[1.1rem]">
                246 Bewertungen
              </p>
            </a>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/moebellift-hamburg"
                className="transition duration-200 inline-flex items-center text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
              >
                Jetzt buchen
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-4/5 lg:w-3/5 xl:w-[44%]">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={1600}
              height={1200}
              priority={true}
              src="/hero-img-2.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
