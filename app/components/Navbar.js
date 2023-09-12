import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 z-50 shadow w-full fixed bg-white mx-auto font-work-sans">
        <div className="sm:px-16 px-7 max-w-screen-2xl mx-auto h-20 flex justify-center min-[490px]:justify-between items-center">
          <div className="relative w-[200px] h-[48px]">
            <Image
              src="/logo.png"
              priority={true}
              alt="logo"
              sizes="15vw"
              fill={true}
            />
          </div>
          <a
            href="https://calendly.com/moebellift-hamburg"
            className="transition hidden duration-200 min-[490px]:inline-flex items-center text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
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
      </header>
    </>
  );
}
