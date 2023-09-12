import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

export default function Faq() {
  return (
    <>
      <section className="font-work-sans sm:px-16 px-7 max-w-screen-2xl mx-auto lg:px-0 py-24">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="lg:text-[2.75rem] sm:text-[2.3rem] md:text-[2.6rem] md:w-11/12 lg:w-8/12 mx-auto leading-tight font-semibold text-3xl text-gray-900 font-crimson-text mb-4">
            Sie haben Fragen? Wir haben Antworten.
          </h2>
          <p className="sm:text-1.2 text-lg leading-relaxed xl:w-2/4 md:w-4/5 lg:w-8/12 mx-auto text-gray-500">
            Wichtige Fragen und Antworten rund um unsere Möbellifte.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red inline-flex" />
          </div>
        </div>
        <Accordion type="single" collapsible className="lg:w-4/5 mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h3 className="lg:text-2xl md:text-[1.4rem] text-[1.15rem] font-normal">
                Wie berechnet sich die Arbeitszeit?
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Die Arbeitszeit umfasst die tatsächliche Arbeitszeit am
                Einsatzort sowie die Fahrtzeiten.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h3 className="lg:text-2xl md:text-[1.4rem] text-[1.15rem] font-normal">
                Wie werden die An- und Abfahrtskosten berechnet?
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Die Kosten der An- und Abfahrt variieren, je nachdem wo sich der
                Einsatzort für den Möbellift befindet. Wir nennen Ihnen bereits
                vorab im Angebot transparent ihre individuellen An- und
                Abfahrtskosten.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h3 className="lg:text-2xl md:text-[1.4rem] text-[1.15rem] font-normal">
                Welche Leistungen beinhaltet die An- und Abfahrt?
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Die An- und Abfahrt beinhaltet jeweils den Anfahrts- und
                Abfahrtsweg von der Firma zum Einsatzort und zurück.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h3 className="lg:text-2xl md:text-[1.4rem] text-[1.15rem] font-normal">
                Welche Leistungen umfasst der Möbellift-Service?
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Unser Möbellift-Service umfasst die Gestellung von 1 Möbellift
                inklusive eines Mitarbeiters.
              </p>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Unser Mitarbeiter bedient für Sie den Möbellift und teilt Ihnen
                mit, wie Sie die Transportplattform des Möbellifts korrekt
                beladen und entladen. Je nach Bedarf kann der Mitarbeiter Ihnen
                vor Ort weitere hilfreiche Tipps rund um Ihren Umzug geben.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h3 className="lg:text-2xl md:text-[1.4rem] text-[1.15rem] font-normal">
                Welche Leistungen muss ich erbringen?
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Um den Möbellift richtig nutzen zu können, benötigen Sie am
                jeweiligen Einsatzort ausreichend Parkfläche sowie Umzugshelfer,
                die das Beladen und Entladen der Transportplattform durchführen.
              </p>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Sollten Sie selbst keine eigenen Umzugshelfer haben, bietet wir
                Ihnen optional an erfahrene Umzugsmitarbeiter von Schenck &amp;
                Hansen zu buchen.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <h3 className="lg:text-2xl md:text-[1.4rem] text-[1.15rem] font-normal">
                Wie groß muss der Parkplatz für den Möbellift sein?
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Der Möbellift braucht mindestens 10 Meter Länge sowie 2,50m
                Breite, um sicher aufgestellt werden zu können. Diese Parkfläche
                muss mindestens am Einsatzort vorhanden sein.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <h3 className="lg:text-2xl md:text-[1.4rem] text-[1.15rem] font-normal">
                Wer kümmert sich um den Parkplatz?
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Wenn Sie ausreichend sicher planbare Parkfläche am Einsatzort
                zur Verfügung stellen können, nutzen wir diese gerne.
              </p>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Sollten Sie nicht ausreichend Parkfläche mit Sicherheit
                bereitstellen können, bieten wir gegen Aufpreis an, uns um die
                Organisation einer offiziellen Halteverbotszone inklusive der
                dafür notwendigen Genehmigung an dem Einsatzort zu kümmern. Dies
                bietet Planungssicherheit für das Aufstellen des Möbellifts.
              </p>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Innerhalb Hamburgs bieten wir diesen Service ab 120 Euro an.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              <h3 className="lg:text-2xl md:text-[1.4rem] text-[1.15rem] font-normal">
                Welche Besonderheiten muss ich beachten?
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Zwischen der Parkfläche auf dem der Möbellift aufgestellt wird
                und dem Ort, an dem der Möbellift andockt, dürfen sich keine
                Hindernisse, wie bspw. Bäume, Äste oder ähnliches, befinden. Die
                Förderplattform muss frei von Hindernissen hoch- und
                runterfahren können.
              </p>
              <p className="md:text-1.2 text-[1.1rem] leading-relaxed">
                Der Möbellift muss parallel vor dem Bereich parken, an dem der
                Möbellift andocken soll. Wenn beispielsweise der Möbellift an
                einem Balkon andocken soll, dann muss von diesem Balkon die
                Förderplattform gerade zum Möbellift herunterfahren können.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
