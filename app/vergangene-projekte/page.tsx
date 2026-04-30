import type { Metadata } from "next";
import { ConcertCard } from "@/components/concert-card";
import { ProjectCard } from "@/components/project-card";
import { InlineMd } from "@/components/inline-md";
import { concerts } from "@/data/concerts";
import { pastProjects } from "@/data/past-projects";

export const metadata: Metadata = {
  title: "Vergangene Konzerte und Projekte",
  description:
    "Archiv vergangener Konzerte und Projekte des Duo Zwischen — vom Hugo-Wettbewerb über die Konzerttour ‚Meister des Kontrapunkts‘ bis zur Klimabühne.",
  alternates: { canonical: "/vergangene-projekte" },
};

export default function PastProjectsPage() {
  let runningIndex = 0;
  return (
    <>
      <section className="section pb-0">
        <div className="container-content max-w-3xl">
          <h1>Vergangene Konzerte und Projekte</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-content space-y-24 md:space-y-32">
          {concerts.map((c) => {
            const i = runningIndex++;
            return (
              <ConcertCard
                key={`concert-${c.slug}`}
                index={i}
                dateLabel={c.dateLabel}
                city={c.city}
                venue={c.venue}
                title={c.title}
                image={c.image}
                imageFile={c.imageFile}
                alt={c.alt}
                startTime={c.startTime}
                entry={c.entry}
                infoUrl={c.infoUrl}
                infoLabel={c.infoLabel}
                programLines={c.programLines}
                body={c.body.map((p, idx) => (
                  <p key={idx}>
                    <InlineMd>{p}</InlineMd>
                  </p>
                ))}
              />
            );
          })}
          {pastProjects.map((p) => {
            const i = runningIndex++;
            return (
              <ProjectCard
                key={`project-${p.slug}`}
                index={i}
                title={p.title}
                year={p.year}
                image={p.image}
                imageFile={p.imageFile}
                alt={p.alt}
                photoCredit={p.photoCredit}
                link={p.link}
                body={p.body.map((para, idx) => (
                  <p key={idx} className="text-[var(--muted)] leading-relaxed">
                    <InlineMd>{para}</InlineMd>
                  </p>
                ))}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
