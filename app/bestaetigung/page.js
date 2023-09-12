import Link from "next/link";

export const metadata = {
  title: "Bestätigung | Schenck & Hansen",
  description:
    "Ihre Terminbuchung war erfolgreich. In Kürze erhalten Sie eine Bestätigung per E-Mail.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": 0,
      "max-image-preview": "none",
      "max-snippet": 0,
    },
  },
};

export default function page() {
  return (
    <>
      <section className="text-gray-600 font-work-sans sm:px-16 px-7 max-w-screen-2xl pt-44 pb-32 xl:pb-44 mx-auto flex justify-center items-center h-[85vh]">
        <div className="lg:flex-grow xl:w-1/2 flex flex-col mb-32 xl:mb-0 items-center text-center">
          <h1 className="lg:w-[87%] font-crimson-text lg:text-[3.1rem] leading-tight text-[2.5rem] sm:text-[2.9rem] mb-4 font-bold text-blue">
            Ihre Terminbuchung war erfolgreich.
          </h1>
          <p className="lg:w-[83%] text-lg sm:text-1.2 leading-relaxed">
            Wir werden uns in Kürze bei Ihnen mit weiteren Informationen melden.
          </p>

          <div className="flex mt-4 justify-center">
            <Link
              href="/"
              className="transition duration-200 inline-flex items-center text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
            >
              Startseite
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
