import Image from "next/image";

export default function Benefits() {
  return (
    <>
      <section className="text-gray-600 font-work-sans">
        <div className="sm:container sm:px-16 px-7 lg:px-5 pb-24 pt-16 mx-auto">
          <div className="text-center mb-20">
            <h2 className="lg:text-[2.75rem] sm:text-[2.3rem] md:text-[2.6rem] md:w-11/12 lg:w-8/12 mx-auto leading-tight font-semibold text-3xl text-gray-900 font-crimson-text mb-4">
              Umziehen mit Leichtigkeit: Lassen Sie unseren Möbellift die
              schwere Arbeit erledigen.
            </h2>
            <p className="sm:text-1.2 text-lg leading-relaxed xl:w-2/4 md:w-4/5 lg:w-8/12 mx-auto text-gray-500">
              Schonen Sie Ihren Rücken! Transportieren Sie sicher und mühelos
              sperrige Möbel, schwere Kisten und große Elektrogeräte bis zu 400
              kg.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-red inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="px-6 sm:px-10 py-10 lg:w-1/2 flex flex-col text-center items-center">
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-200 text-blue
               mb-5 flex-shrink-0"
              >
                <div className="w-11 h-11 relative">
                  <Image src="/001.svg" alt="Treppenhaus schonen" fill={true} />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Treppenhaus schonen
                </h2>
                <p className="leading-relaxed text-base lg:px-16">
                  Unbeschwertes Umziehen ohne Hindernisse: Mit unseren
                  Möbelliften überwinden Sie Treppenhausengpässe mit
                  Leichtigkeit und verhindern Schäden an Ihren Möbeln und im
                  Treppenhaus.
                </p>
              </div>
            </div>
            <div className="px-6 sm:px-10 py-10 lg:w-1/2 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-200 text-blue mb-5 flex-shrink-0">
                <div className="w-11 h-11 relative">
                  <Image
                    src="/005.svg"
                    alt="Körperliche Belastung"
                    fill={true}
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Körperliche Belastung
                </h2>
                <p className="leading-relaxed text-base lg:px-16">
                  Müheloses Transportieren: Mit unserem Außenaufzug gehören
                  anstrengende Treppenläufe der Vergangenheit an. Genießen Sie
                  einen Umzug ohne körperliche Belastung.
                </p>
              </div>
            </div>
            <div className="px-6 sm:px-10 py-10 lg:w-1/2 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-200 text-blue mb-5 flex-shrink-0">
                <div className="w-11 h-11 relative">
                  <Image src="/003.svg" alt="Geld sparen" fill={true} />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Geld sparen
                </h2>
                <p className="leading-relaxed text-base lg:px-16">
                  Der optimale Einsatz des Möbellifts benötigt nur 4
                  Mitarbeiter. 2 Mitarbeiter, die oben beladen sowie 2
                  Mitarbeiter, die den Lift unten entladen. Spätestens ab dem 2.
                  Obergeschoss ist es somit günstiger und oftmals auch schneller
                  auf den Außenlift zu setzen.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-10 py-10 lg:w-1/2 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-200 text-blue mb-5 flex-shrink-0">
                <div className="w-11 h-11 relative">
                  <Image src="/002.svg" alt="Zeitersparnis" fill={true} />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Zeitersparnis
                </h2>
                <p className="leading-relaxed text-base lg:px-16">
                  Sparen Sie wertvolle Zeit! Durch den Einsatz des Möbellifts
                  können viele Arbeitsstunden gespart werden. Bereits ab dem 2.
                  Obergeschoss ist im Regelfall der Einsatz eines Möbellifts
                  mindestens genauso effizient wie der Einsatz von Mitarbeitern.
                  Ab dem 3. Obergeschoss ist der Möbellift fast immer die
                  zeiteffizientere Alternative.
                </p>
              </div>
            </div>
            <div className="px-6 sm:px-10 py-10 lg:w-1/2 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-200 text-blue mb-5 flex-shrink-0">
                <div className="w-11 h-11 relative">
                  <Image src="/006.svg" alt="Mobiliar schonen" fill={true} />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Mobiliar schonen
                </h2>
                <p className="leading-relaxed text-base lg:px-16">
                  Der Transport Ihres Umzugsgutes mit dem Möbellift schon Ihr
                  Mobiliar. Es besteht bei korrekter Ausführung mit dem
                  Möbellift keine Möglichkeit, dass Ihre Möbel irgendwo anecken.
                  Das Risiko beim Transport durch das Treppenhaus ist viel
                  größer. Somit schont diese Transportmethode Ihre Möbel.
                </p>
              </div>
            </div>
            <div className="px-6 sm:px-10 py-10 lg:w-1/2 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-200 text-blue mb-5 flex-shrink-0">
                <div className="w-11 h-11 relative">
                  <Image
                    src="/004.svg"
                    alt="Unmögliches möglich machen"
                    fill={true}
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Unmögliches möglich machen
                </h2>
                <p className="leading-relaxed text-base lg:px-16">
                  Es gibt Umstände, bei denen ohne einen Möbellift Umzugsgut gar
                  nicht an den Zielort kommen kann. Ein großer Strandkorb, der
                  auf die Dachterrasse eines Einfamilienhauses muss oder ein
                  großes Sideboard, das nicht durch das Treppenhaus passt, sind
                  nur 2 Beispiele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
