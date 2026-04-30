import Image from "next/image";
import { site } from "@/lib/site";
import { blurFor } from "@/lib/blur-data";
import heroImg from "@/public/images/s-mit-lachen-und-l-cke-standard-dgdybx.jpg";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative w-full h-[clamp(420px,72vh,780px)] overflow-hidden">
        <Image
          src={heroImg}
          alt="Annika Spegg und Robert Rülke lachend mit Geigen, Hero-Aufnahme des Duo Zwischen"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL={blurFor("s-mit-lachen-und-l-cke-standard-dgdybx.jpg")}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-content pb-12 md:pb-20 text-white text-center">
            <p className="text-xs uppercase tracking-[0.2em] mb-4 opacity-90 mx-auto">
              {site.members[0].name} · {site.members[1].name}
            </p>
            <h1 className="text-white">{site.name}</h1>
            <p className="mt-4 text-lg md:text-xl mx-auto max-w-xl opacity-95">
              {site.tagline}
            </p>
          </div>
        </div>
      </div>
      <div className="container-content pt-14 md:pt-20 pb-8 md:pb-10 max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-[var(--fg)] leading-relaxed">
          Willkommen auf unserer Website! Wir freuen uns, dass Sie unseren
          musikalischen Weg begleiten wollen.
        </p>
      </div>
    </section>
  );
}
