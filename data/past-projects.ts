import type { StaticImageData } from "next/image";
import hugoImg from "@/public/images/beiminterview-standard.jpg";
import regerImg from "@/public/images/reger_aalen_foto-standard.jpg";
import loreleyImg from "@/public/images/loreley-standard.jpg";

export type PastProject = {
  slug: string;
  year: string;
  title: string;
  image: StaticImageData;
  imageFile: string;
  alt: string;
  photoCredit?: string;
  body: string[];
  link?: { label: string; href: string };
};

export const pastProjects: PastProject[] = [
  {
    slug: "hugo-wettbewerb",
    year: "2025",
    title: "Hugo-Wettbewerb",
    image: hugoImg,
    imageFile: "beiminterview-standard.jpg",
    alt: "Annika Spegg und Robert Rülke beim Interview während des Hugo-Wettbewerbs",
    body: [
      "Im Frühjahr 2025 haben wir als Duo Zwischen beim Hugo-Wettbewerb der Montforter Zwischentöne den 2. Preis gewonnen. In einem Finale mit drei weiteren Teams durften wir unseren Pitch für einen Konzertabend zum Thema „Zuversichtlich bleiben“ in einer umgewidmeten Schwimmhalle in Feldkirch (Österreich) machen.",
    ],
  },
  {
    slug: "meister-des-kontrapunkts",
    year: "2023",
    title: "Meister des Kontrapunkts",
    image: regerImg,
    imageFile: "reger_aalen_foto-standard.jpg",
    alt: "Konzertaufnahme des Programms ‚Meister des Kontrapunkts‘ in Aalen",
    photoCredit: "Oliver Giers",
    body: [
      "Das erste große Programm des Duo Zwischen, mit dem es 2023 in Berlin, Hannover, Ludwigsburg und Aalen auf Tour ging, drehte sich um die musikalische Praxis des Kontrapunkts, also des Spiels mit mehreren voneinander unabhängigen Stimmen. Das Konzertrepertoire enthielt die selten gespielten Stücke dreier Komponisten aus sehr verschiedenen Epochen: Thomas Morleys *Canzonetten für zwei Stimmen*, Max Regers *Canons und Fugen im alten Stil* und Isang Yuns *Sonatina* für zwei Violinen.",
    ],
    link: {
      label: "Rezension in der Schwäbischen Post",
      href: "https://www.schwaebische-post.de/ostalb/ostalb-kultur/der-kontrapunkt-der-jahrhunderte-92128136.html",
    },
  },
  {
    slug: "klimabuehne-transparente-welten",
    year: "2023",
    title: "Klimabühne: Transparente Welten",
    image: loreleyImg,
    imageFile: "loreley-standard.jpg",
    alt: "Szene aus der Klimabühne ‚Transparente Welten‘ an der HMDK Stuttgart",
    photoCredit: "Jule Lotte Bröcker",
    body: [
      "Die ersten Zusammenarbeiten zwischen Annika und Robert, die auch von ihrer gemeinsamen aktivistischen Tätigkeit zeugen, fanden im Rahmen der „Klimabühne“ an der HMDK Stuttgart statt. Hierbei handelt es sich um eine interdisziplinäre Projektreihe, in der die künstlerische Auseinandersetzung mit dem Klimawandel erprobt wurde. An den „Klimabühnen“ war stets ein großes Team von Studierenden und Alumni aus verschiedensten Fachrichtungen der HMDK Stuttgart beteiligt. Das Foto stammt von *Transparente Welten* (Januar 2023).",
    ],
  },
];
