import { Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { ObfuscatedEmail } from "@/components/obfuscated-email";

export function ContactCta() {
  return (
    <section
      id="kontakt"
      className="reveal section bg-[var(--card)] border-y border-[var(--line)]"
    >
      <div className="container-content max-w-3xl text-center">
        <h2 className="mb-5">Kontakt</h2>
        <p className="text-[var(--muted)] text-lg mx-auto">
          Bei Interesse an Konzerten oder anderen Anfragen können Sie uns gern
          jederzeit eine Mail schreiben!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ObfuscatedEmail
            user={site.email.user}
            domain={site.email.domain}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover,#501f1f)] transition-colors"
          />
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
            aria-label={`Instagram (${site.instagramHandle}, öffnet in neuem Tab)`}
          >
            <Instagram size={16} aria-hidden /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
