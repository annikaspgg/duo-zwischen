import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FeatureCard } from "@/components/feature-card";
import { ContactCta } from "@/components/contact-cta";
import Image from "next/image";
import { blurFor } from "@/lib/blur-data";
import { site } from "@/lib/site";

import beimspielen from "@/public/images/beimspielen-standard.jpg";
import unerhoert from "@/public/images/robert-112-von-266-high.jpg";
import aktivismus from "@/public/images/annika-und-robert-beim-aktivismus-high.jpg";
import tellerrand from "@/public/images/nochmal-rest-sch-n-angeordnet-high-vq61aq.jpg";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.tagline}` },
  description: site.description,
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "Unerhörte Musik",
    body:
      "Das Duo Zwischen hat sich zur Aufgabe gemacht, vorwiegend Musikstücke zu spielen, die nicht zum Standardrepertoire zählen und damit möglichst vielen Komponist:innen Gehör zu verschaffen, die nicht Teil des Kanons sind.",
    image: unerhoert,
    imageFile: "robert-112-von-266-high.jpg",
    alt: "Robert Rülke beim Geigenspiel — Sinnbild für unerhörte, selten gespielte Musik",
  },
  {
    title: "Politischer Aktivismus",
    body:
      "Die beiden Mitglieder des Duo Zwischen verbindet neben der Musik ihr politischer Aktivismus für soziale und Klimagerechtigkeit. Zeugnis dieses Interesses ist das von beiden maßgeblich getragene Projekt ‚Klimabühne‘.",
    image: aktivismus,
    imageFile: "annika-und-robert-beim-aktivismus-high.jpg",
    alt: "Annika Spegg und Robert Rülke bei einer Aktion politischen Aktivismus",
  },
  {
    title: "Über den Tellerrand hinaus",
    body:
      "Dem Duo Zwischen ist es wichtig, sich nicht ausschließlich als Geiger:innen, sondern umfassender als Künstler:innen zu verstehen. Dafür bilden sich die beiden aktiv in Bereichen wie Philosophie, Literatur, Theater und bildender Kunst weiter.",
    image: tellerrand,
    imageFile: "nochmal-rest-sch-n-angeordnet-high-vq61aq.jpg",
    alt: "Stillleben mit Büchern, Notenmaterial und Geige — Sinnbild für interdisziplinäre Praxis",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section !pt-6 md:!pt-10">
        <div className="container-content grid gap-10 md:gap-14 md:grid-cols-12 items-center">
          <div className="md:col-span-5 reveal">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={beimspielen}
                alt="Annika Spegg und Robert Rülke beim gemeinsamen Geigenspiel"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                placeholder="blur"
                blurDataURL={blurFor("beimspielen-standard.jpg")}
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 reveal">
            <h2 className="mb-6">Wer sind wir?</h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              Das preisgekrönte Duo Zwischen ist ein Violin- und Konzeptionsduo
              bestehend aus Annika Spegg und Robert Rülke, das sich 2022 an der
              Hochschule für Musik und Darstellende Kunst Stuttgart gegründet
              hat. Neben der Entdeckung und Bekanntmachung von selten
              gespielten Werken steht für die beiden Musiker:innen die Suche
              nach neuen spannenden Konzertformaten im Vordergrund.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--line)]">
        <div className="container-content">
          <div className="max-w-2xl mb-14 reveal">
            <h2>Was macht uns aus?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                body={f.body}
                image={f.image}
                imageFile={f.imageFile}
                alt={f.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--line)]">
        <div className="container-content text-center">
          <h2 className="mb-10">Das Duo Zwischen stellt sich vor</h2>
          <div className="mx-auto max-w-3xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HMLXLuhAmhw?si=d3UUDHxL6wX11g4_"
              title="Das Duo Zwischen stellt sich vor"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
