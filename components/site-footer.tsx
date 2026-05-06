import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { ObfuscatedEmail } from "@/components/obfuscated-email";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line)] mt-24">
      <div className="container-content py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg">{site.name}</p>
          <p className="text-sm text-[var(--muted)] mt-2">{site.tagline}</p>
        </div>

        <nav aria-label="Footer-Navigation" className="text-sm">
          <ul className="space-y-2">
            <li><Link href="/" className="link-underline">Home</Link></li>
            <li><Link href="/vitae" className="link-underline">Vitae</Link></li>
            <li><Link href="/naechste-konzerte" className="link-underline">Nächste Konzerte</Link></li>
            <li><Link href="/vergangene-projekte" className="link-underline">Vergangene Projekte</Link></li>
            <li><Link href="/impressum" className="link-underline">Impressum &amp; Datenschutz</Link></li>
          </ul>
        </nav>

        <div className="text-sm space-y-3">
          <div className="flex items-center gap-2">
            <Mail size={16} aria-hidden />
            <ObfuscatedEmail user={site.email.user} domain={site.email.domain} className="link-underline" />
          </div>
          <div className="flex items-center gap-2">
            <Instagram size={16} aria-hidden />
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              aria-label={`Instagram (${site.instagramHandle}, öffnet in neuem Tab)`}
            >
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="container-content border-t border-[var(--line)] py-6 text-xs text-[var(--muted)] flex flex-wrap justify-between gap-2">
        <p>© {year} {site.name}</p>
        <p>Made with ♡ in Leipzig</p>
      </div>
    </footer>
  );
}
