import type { StaticImageData } from "next/image";
import plakatImg from "@/public/images/plakat-standard.png";
import idoguImg from "@/public/images/idogu-haus-standard.jpg";
import konzertchorImg from "@/public/images/konzertchor-aalen-standard.png";

export type Concert = {
  slug: string;
  startDate: string; // ISO 8601
  endDate?: string;
  dateLabel: string;
  city: string;
  venue?: string;
  title: string;
  image: StaticImageData;
  imageFile: string;
  alt: string;
  body: string[];
  programLines?: string[];
  startTime?: string;
  entry?: string;
  infoUrl?: string;
  infoLabel?: string;
};

export const concerts: Concert[] = [
  {
    slug: "konzerte-fuer-alle",
    startDate: "2026-04-18",
    endDate: "2026-04-21",
    dateLabel: "18.–21. April 2026",
    city: "Stuttgart",
    venue: "Sozialeinrichtungen & Second Hand Kaufhaus Feuerbach",
    title: "Konzerte für alle",
    image: plakatImg,
    imageFile: "plakat-standard.png",
    alt: "Plakat zur Reihe ‚Konzerte für alle‘ in Kooperation mit der Caritas Stuttgart",
    body: [
      "Mit der Caritas Stuttgart e.V. als Partnerin werden wir im April 2026 Konzerte für alle in Stuttgarter Sozialeinrichtungen ausrichten.",
      "In Zeiten wie diesen, in denen Kunst eher als Luxus denn als Grundrecht angesehen wird, wo allerorts soziale und kulturelle Einrichtungen von Kürzungen betroffen sind, halten wir gesellschaftlichen Zusammenhalt für nötiger denn je. Was wir dazu beitragen können, ist unter anderem, unsere Kunst so barrierearm wie möglich allen zur Verfügung stellen.",
      "Auf dem Programm stehen Werke von Béla Bartók, Mordecai Seter, Johann Sebastian Bach, Ursula Mamlok, Eugène Ysaye und anderen.",
      "Wir spielen in verschiedenen Alten- und Pflegeeinrichtungen sowie im Second Hand Kaufhaus Feuerbach.",
    ],
    infoUrl: "https://caritas-stuttgart.de",
    infoLabel: "Für weitere Informationen: caritas-stuttgart.de",
  },
  {
    slug: "idogu-haus",
    startDate: "2026-04-17T19:00:00+02:00",
    dateLabel: "17. April 2026",
    city: "Stuttgart",
    venue: "Idogu-Haus",
    title: "Konzert im Idogu-Haus",
    image: idoguImg,
    imageFile: "idogu-haus-standard.jpg",
    alt: "Innenraum des Idogu-Hauses in Stuttgart, Konzertort des Duo Zwischen",
    body: [
      "An diesem ganz besonderen Ort, der vor allem eine Tai Chi Schule ist und erst seit neuestem auch als Konzertort dient, spielen wir ein weiteres Mal unser neues Programm:",
      "**Wanderer, es gibt keinen Weg // Weg entsteht im Gehen**",
      "Musik von Luigi Nono, Ursula Mamlok, Mordecai Seter, Helmut Bornefeld und Béla Bartók.",
    ],
    startTime: "19:00 Uhr",
    entry: "frei",
  },
  {
    slug: "chorkonzert-aalen",
    startDate: "2026-04-26T19:00:00+02:00",
    dateLabel: "26. April 2026",
    city: "Aalen",
    venue: "Thomaskirche Aalen",
    title: "Chorkonzert mit dem Konzertchor Aalen",
    image: konzertchorImg,
    imageFile: "konzertchor-aalen-standard.png",
    alt: "Plakat des Konzertchors Aalen für das Chorkonzert in der Thomaskirche",
    body: [
      "Das Duo Zwischen spielt hier nicht als Duo, sondern in Streichquartett- und -quintettbesetzung mit anderen Musiker:innen.",
    ],
    programLines: [
      "Samuel Barber: Streichquartett op. 11, 2. Satz",
      "John Rutter: The Lord bless you and keep you",
      "Ola Gjeilo: Ubi caritas",
      "Philip Glass: Streichquartett Nr. 3 „Mishima“",
      "Ola Gjeilo: The Ground",
      "Karl Jenkins: Palladio – I. Allegretto",
      "Steve Dobrogosz: Mass",
    ],
    startTime: "19:00 Uhr",
    infoUrl: "https://www.konzertchor-aalen.de/",
  },
];

export function upcomingConcerts(): Concert[] {
  return concerts;
}
