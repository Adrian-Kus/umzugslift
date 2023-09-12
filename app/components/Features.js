import Image from "next/image";

export default function Features() {
  return (
    <>
      <section className="text-gray-600 font-work-sans sm:px-12 px-7">
        <div className="sm:container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h2 className="lg:text-[2.75rem] sm:text-[2.3rem] md:text-[2.6rem] md:w-11/12 lg:w-8/12 mx-auto leading-tight font-semibold text-3xl text-gray-900 font-crimson-text mb-4">
              Alle Eigenschaften unserer Möbellifte im Überblick
            </h2>
            <p className="sm:text-1.2 text-lg leading-relaxed xl:w-2/4 md:w-4/5 lg:w-8/12 mx-auto text-gray-500">
              Große Plattform, beeindruckenden Tragkraft: Unsere Möbellifte sind
              perfekt ausgestattet, um schwere und sperrige Gegenstände
              problemlos zu transportieren.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-red inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 py-4 sm:px-4">
              <div className="border border-gray-200 lg:h-80 sm:h-72 md:h-96 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-200 mb-4">
                  <div className="w-8 h-8 relative">
                    <Image src="/checkmark.svg" alt="checkmark" fill={true} />
                  </div>
                </div>
                <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Reichweite: 9. Etagen
                </h3>
                <p className="leading-relaxed text-base">
                  Der Möbellift kann Ihr Umzugsgut bis in das 9. Obergeschoss
                  transportieren. Ermöglicht wird dies durch die bis zu 29
                  Metern ausfahrbaren Liftschienen.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 py-4 sm:px-4">
              <div className="border border-gray-200 lg:h-80 sm:h-72 md:h-96 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-200 mb-4">
                  <div className="w-8 h-8 relative">
                    <Image src="/checkmark.svg" alt="checkmark" fill={true} />
                  </div>
                </div>
                <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Tragkraft 400 Kg
                </h3>
                <p className="leading-relaxed text-base">
                  Unser Möbellift meistert spielend Lasten von bis zu 400 kg -
                  die optimale Lösung für Massivholz-Möbel, Klaviere, Tresore
                  und weitere schwere Gegenstände.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 py-4 sm:px-4">
              <div className="border border-gray-200 lg:h-80 sm:h-72 md:h-96 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-200 mb-4">
                  <div className="w-8 h-8 relative">
                    <Image src="/checkmark.svg" alt="checkmark" fill={true} />
                  </div>
                </div>
                <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Große Transportmenge
                </h3>
                <p className="leading-relaxed text-base">
                  Unser Möbellift kann bis zu 10 Umzugskartons gleichzeitig in
                  Ihre Wohnung transportieren.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 py-4 sm:px-4">
              <div className="border border-gray-200 lg:h-80 sm:h-72 md:h-96 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-200 mb-4">
                  <div className="w-8 h-8 relative">
                    <Image src="/checkmark.svg" alt="checkmark" fill={true} />
                  </div>
                </div>
                <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Full-Service
                </h3>
                <p className="leading-relaxed text-base">
                  Wir stellen einen professionellen Mitarbeiter für die
                  Bedienung des Möbellifts. Zusätzlich stellen wir Ihnen gerne
                  Mitarbeiter zum Be- und Entladen des Lifts zur Verfügung.
                  Alternativ können Sie mit Ihren Helfern das Be- und Entladen
                  des Lifts übernehmen.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 py-4 sm:px-4">
              <div className="border border-gray-200 lg:h-80 sm:h-72 md:h-96 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-200 mb-4">
                  <div className="w-8 h-8 relative">
                    <Image src="/checkmark.svg" alt="checkmark" fill={true} />
                  </div>
                </div>
                <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Leiser Elektroantrieb
                </h3>
                <p className="leading-relaxed text-base">
                  Lasten bis zu 250 Kg können mit unserem leisen &amp;
                  umweltschonenden Elektroantrieb befördert werden.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 py-4 sm:px-4">
              <div className="border border-gray-200 lg:h-80 sm:h-72 md:h-96 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-200 mb-4">
                  <div className="w-8 h-8 relative">
                    <Image src="/checkmark.svg" alt="checkmark" fill={true} />
                  </div>
                </div>
                <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Flexible Transportplattform
                </h3>
                <p className="leading-relaxed text-base">
                  Zum einfachen Be- und Entladen der Transportplattform kann
                  diese um 90 Grad nach links oder rechts gedreht werden.
                  Gleichzeitig kann die Transportplattform zum Beladen und
                  Entladen näher herangezogen oder weiter weggeschoben werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
