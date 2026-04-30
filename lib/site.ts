export const site = {
  name: "Duo Zwischen",
  tagline: "Violin- und Konzeptionsduo",
  url: "https://duo-zwischen.de",
  description:
    "Das preisgekrönte Duo Zwischen aus Annika Spegg und Robert Rülke spielt selten gehörte Werke und sucht nach neuen Konzertformaten.",
  members: [
    { name: "Annika Spegg", role: "Geige, Konzeption" },
    { name: "Robert Rülke", role: "Geige, Konzeption" },
  ],
  email: { user: "geige.ruelke", domain: "posteo.de" },
  instagram: "https://instagram.com/annika_spgg",
  instagramHandle: "@annika_spgg",
} as const;

export const navItems = [
  { href: "/vitae", label: "Vitae" },
  { href: "/naechste-konzerte", label: "Nächste Konzerte" },
  { href: "/vergangene-projekte", label: "Vergangene Projekte" },
] as const;
