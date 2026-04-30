# Duo Zwischen — Website

Eigenentwicklung der Website [duozwischen.de](https://duozwischen.de) auf Basis von **Next.js 15** (App Router), **React 19** und **Tailwind CSS v4**. Inhalt 1:1 von der Webador-Vorschau übernommen, Technik und Design auf das Niveau einer modernen Künstler-Homepage gehoben.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 mit eigenem Design-Token-Setup
- `next/font` (self-hosted Cormorant Garamond + Inter, DSGVO-konform)
- `next/image` mit AVIF/WebP, blurDataURL, responsive `sizes`
- lucide-react für Icons
- Sharp für lokale Bildoptimierung

## Routen

```
/                       Home
/vitae                  Duo + Einzelbiografien
/naechste-konzerte      Kommende Konzerte (chronologisch, Auto-Fallback)
/vergangene-projekte    Archiv
/impressum              Impressum & Datenschutz
```

Plus `/sitemap.xml`, `/robots.txt`, automatische `/not-found`.

## Entwicklung

Voraussetzung: `node >= 20`, `pnpm >= 10`.

```bash
pnpm install
pnpm optimize:images   # AVIF/WebP + blur-data.json einmalig generieren
pnpm dev               # http://localhost:3000
```

## Skripte

| Befehl | Beschreibung |
| --- | --- |
| `pnpm dev` | Dev-Server |
| `pnpm build` | Produktionsbuild (Static Generation) |
| `pnpm start` | Production-Server (nach `build`) |
| `pnpm lint` | ESLint (next/core-web-vitals + typescript) |
| `pnpm typecheck` | TypeScript ohne Emit |
| `pnpm optimize:images` | AVIF/WebP-Varianten + Blur-Placeholders |

## Inhalte pflegen

Alle redaktionellen Inhalte liegen typsicher in `data/`:

- `data/concerts.ts` — kommende Konzerte. Vergangene Termine fallen automatisch aus der Liste (Filter `upcomingConcerts`).
- `data/past-projects.ts` — Archiv vergangener Projekte.
- `data/bios.ts` — Duo- und Einzelbiografien.

Inline-Markdown wird unterstützt: `**fett**` und `*kursiv*` (siehe `components/inline-md.tsx`).

## Bilder pflegen

1. Original-Bild in `public/images/` ablegen (JPG/PNG).
2. `pnpm optimize:images` ausführen — schreibt mehrere Auflösungen (640/1024/1920/2560 w) als AVIF + WebP nach `public/images-optimized/` und aktualisiert `blur-data.json`.
3. In den Daten-Files referenzieren (Import aus `@/public/images/...`).

## Deployment auf Vercel

```bash
# erstmalig
vercel link

# Deploy
vercel --prod
```

Vercel erkennt das Next.js-Projekt automatisch. Keine ENV-Vars erforderlich.

## DSGVO / Datenschutz

- Keine Cookies, kein Tracking, keine Drittanbieter-Skripte.
- `next/font` lädt Schriften zur Build-Zeit und hostet sie selbst — keine Laufzeit-Calls zu Google.
- E-Mail-Adresse wird im DOM erst nach JS-Mount als `mailto:` gerendert (Bot-Schutz).
- Impressum nennt Vercel als Auftragsverarbeiter (Hoster). **Vor Veröffentlichung mit Annika abstimmen.**

## Performance- und A11y-Notizen

- Server Components als Default, Client-only für: Header-Drawer (`site-header`), Reveal-Observer (`reveal`), E-Mail-Decoder (`obfuscated-email`).
- `prefers-reduced-motion` deaktiviert alle Scroll-Animationen.
- `<html lang="de">`, ein H1 pro Seite, Skip-Link, sichtbarer Focus-Ring.
- JSON-LD: `MusicGroup` global (Layout), `Person` auf `/vitae`, `Event` pro Konzert.
- Statisch generiert — alle Seiten werden zu HTML im Build prerendered.

## Build-Output (Stand: April 2026)

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    1.34 kB         108 kB
├ ○ /_not-found                            129 B         102 kB
├ ○ /impressum                             401 B         102 kB
├ ○ /naechste-konzerte                   1.01 kB         108 kB
├ ○ /robots.txt                            129 B         102 kB
├ ○ /sitemap.xml                           129 B         102 kB
├ ○ /vergangene-projekte                   837 B         108 kB
└ ○ /vitae                                 867 B         108 kB
+ First Load JS shared by all             102 kB
```

## Lizenz

Inhalte (Texte, Bilder) © Duo Zwischen — Annika Spegg, Robert Rülke. Code dieser Implementierung: Auftragsarbeit, frei zur Verwendung im Projekt.
