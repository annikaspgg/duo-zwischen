import type { Metadata } from "next";
import Image from "next/image";
import { BioBlock } from "@/components/bio-block";
import { InlineMd } from "@/components/inline-md";
import { bios } from "@/data/bios";
import { blurFor } from "@/lib/blur-data";
import { site } from "@/lib/site";
import duoHeroImg from "@/public/images/annika-scharf-robert-im-hintergrund-standard-vgq1wm.jpg";

export const metadata: Metadata = {
  title: "Vitae",
  description:
    "Biografien des Duo Zwischen sowie der Einzel-Vitae von Annika Spegg und Robert Rülke.",
  alternates: { canonical: "/vitae" },
};

const personJsonLd = (name: string, birthYear?: number, description?: string) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  ...(birthYear ? { birthDate: String(birthYear) } : {}),
  ...(description ? { description } : {}),
  memberOf: { "@type": "MusicGroup", name: site.name, url: site.url },
  jobTitle: "Musiker:in",
});

export default function VitaePage() {
  return (
    <>
      <section className="relative">
        <div className="relative w-full h-[clamp(520px,90vh,900px)] overflow-hidden">
          <Image
            src={duoHeroImg}
            alt="Annika Spegg im Vordergrund, Robert Rülke im Hintergrund — Porträt des Duo Zwischen"
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={blurFor("annika-scharf-robert-im-hintergrund-standard-vgq1wm.jpg")}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-content text-white text-center">
              <div className="mx-auto max-w-3xl px-4 md:px-10 space-y-5 text-base md:text-lg leading-relaxed">
                <p>
                  Das Duo Zwischen gründete sich im Jahr 2022 an der Hochschule
                  für Musik und Darstellende Kunst Stuttgart. Aus der Erfahrung
                  mit dem großartigen Repertoire für zwei Violinen ist der
                  Wunsch entsprungen, sich dieser Gattung ausführlich zu
                  widmen. Schon in ihrem ersten Programm Meister des
                  Kontrapunkts legte das Duo Zwischen großen Wert auf einen
                  über die Einzelwerke hinausreichenden Sinnbogen. Mit
                  Wanderer, es gibt keinen Weg / Weg entsteht im Gehen
                  beschreiben die beiden Musiker:innen diesen Weg weiter.
                </p>
                <p>
                  Im Jahr 2025 erhielten sie den zweiten Preis beim
                  Hugo-Wettbewerb für innovative Konzertformate der Montforter
                  Zwischentöne.
                </p>
                <p>
                  Ein weiteres verbindendes Element für neben dem Duospiel ist
                  für die beiden Musiker:innen ihr politisches Engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-content space-y-24 md:space-y-32">
          {bios
            .filter((bio) => bio.slug !== "duo-zwischen")
            .map((bio, i) => (
              <BioBlock
                key={bio.slug}
                eyebrow={bio.eyebrow}
                title={bio.title}
                image={bio.image}
                imageFile={bio.imageFile}
                alt={bio.alt}
                reverse={i % 2 === 1}
                imagePosition={bio.imagePosition}
              >
                {bio.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-[var(--muted)] leading-relaxed">
                    <InlineMd>{p}</InlineMd>
                  </p>
                ))}
              </BioBlock>
            ))}
        </div>
      </section>

      {bios
        .filter((b) => b.slug !== "duo-zwischen")
        .map((b) => (
          <script
            key={b.slug}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                personJsonLd(
                  b.title,
                  b.birthYear,
                  b.paragraphs[0]
                    ?.replace(/\*\*([^*]+)\*\*/g, "$1")
                    .replace(/\*([^*]+)\*/g, "$1"),
                ),
              ),
            }}
          />
        ))}
    </>
  );
}
