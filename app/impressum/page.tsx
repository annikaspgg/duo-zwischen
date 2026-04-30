import type { Metadata } from "next";
import { ObfuscatedEmail } from "@/components/obfuscated-email";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz",
  description:
    "Impressum und Datenschutzerklärung des Duo Zwischen nach § 5 TMG und Art. 12 ff. DSGVO.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <article className="section">
      <div className="container-content max-w-3xl">
        <h1>Impressum und Datenschutzerklärung</h1>

        <div className="mt-12 space-y-12 text-[var(--fg)] leading-relaxed">
          <section>
            <h2 className="mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="not-prose">
              Robert Rülke, Annika Spegg
              <br />
              Geiger:innen
              <br />
              70619 Stuttgart, 04357 Leipzig
            </p>
          </section>

          <section>
            <h2 className="mb-4">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <ObfuscatedEmail
                user={site.email.user}
                domain={site.email.domain}
                className="link-underline text-[var(--accent)]"
              />
            </p>
          </section>

          <section>
            <h2 className="mb-4">Berufsbezeichnung</h2>
            <p>Musiker</p>
          </section>

          <section>
            <h2 className="mb-4">Foto-Credits</h2>
            <p>
              Jule Lotte Bröcker · Caroline Fischbeck · Oliver Giers ·
              Benjamin Kautter · Annika Spegg · Flora Voellger
            </p>
          </section>

          <section>
            <h2 className="mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[var(--accent)]"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p className="text-sm text-[var(--muted)] mt-3">
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="link-underline">eRecht24</a>
            </p>
          </section>

          <section>
            <h2 className="mb-4">Datenschutz</h2>
            <p className="text-sm text-[var(--muted)] uppercase tracking-wider mb-3">
              Allgemeiner Hinweis und Pflichtinformationen
            </p>
            <p>
              Benennung der verantwortlichen Stelle: Die verantwortliche
              Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="not-prose mt-3">
              Annika Spegg
              <br />
              04357 Leipzig
            </p>
            <p className="mt-3">
              Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten (z. B. Namen, Kontaktdaten o. Ä.).
            </p>
          </section>

          <section>
            <h2 className="mb-4">Hosting und Auftragsverarbeitung</h2>
            <p>
              Diese Website wird bei <strong>Vercel Inc.</strong> gehostet
              (340 S Lemon Ave #4133, Walnut, CA 91789, USA). Vercel
              verarbeitet im Rahmen des Hostings Server-Logdaten (z. B.
              IP-Adresse, Datum/Uhrzeit der Anfrage, abgerufene URL,
              User-Agent), die zur sicheren und zuverlässigen Auslieferung der
              Website erforderlich sind. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an stabiler Bereitstellung).
              Die Datenschutzerklärung von Vercel finden Sie unter:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[var(--accent)]"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Hinweis: Vor der Veröffentlichung ist diese Angabe mit der
              verantwortlichen Stelle abzustimmen.
            </p>
          </section>

          <section>
            <h2 className="mb-4">Cookies und Tracking</h2>
            <p>
              Diese Website verwendet keine Cookies und kein Tracking. Es
              werden keine Drittanbieter-Skripte (Analytics, Werbung, Social
              Plugins) eingebunden.
            </p>
          </section>

          <section>
            <h2 className="mb-4">Rechte betroffener Personen</h2>
            <p>
              Ihnen stehen bezüglich Ihrer bei uns verarbeiteten
              personenbezogenen Daten grundsätzlich folgende Rechte zu:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>
                Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)
              </li>
            </ul>
            <p className="mt-3">
              Zur Wahrnehmung dieser Rechte wenden Sie sich bitte an die im
              Impressum genannten Kontaktdaten.
            </p>
          </section>

          <p className="text-sm text-[var(--muted)] pt-6 border-t border-[var(--line)]">
            Stand: April 2026
          </p>
        </div>
      </div>
    </article>
  );
}
