import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nächste Konzerte",
  description:
    "Anfragen für kommende Konzerte und Konzertformate des Duo Zwischen.",
  alternates: { canonical: "/naechste-konzerte" },
};

export default function ConcertsPage() {
  return (
    <>
      <section className="section pb-0">
        <div className="container-content max-w-3xl">
          <h1>Nächste Konzerte</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-content max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--fg)]">
          <p>
            Aktuell stehen keine öffentlichen Konzerte auf dem Programm.
          </p>
          <p>
            Wenn Sie uns für einen Auftritt, ein bestimmtes Programm oder ein
            neues Konzertformat anfragen möchten, schreiben Sie uns gern eine
            Mail — wir freuen uns auf Ihre Nachricht!
          </p>
          <p className="pt-2">
            <ObfuscatedEmail
              user={site.email.user}
              domain={site.email.domain}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover,#501f1f)] transition-colors"
            >
              <Mail size={16} aria-hidden /> {`${site.email.user}@${site.email.domain}`}
            </ObfuscatedEmail>
          </p>
        </div>
      </section>
    </>
  );
}
