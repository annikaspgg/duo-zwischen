import type { StaticImageData } from "next/image";
import duoImg from "@/public/images/annika-scharf-robert-im-hintergrund-standard-vgq1wm.jpg";
import annikaImg from "@/public/images/sehrgut-standard.jpg";
import robertImg from "@/public/images/foto-f-r-bio-nr-39-standard-oidfvm.jpg";

export type Bio = {
  slug: string;
  eyebrow?: string;
  title: string;
  image: StaticImageData;
  imageFile: string;
  alt: string;
  paragraphs: string[];
  birthYear?: number;
  imagePosition?: string;
};

export const bios: Bio[] = [
  {
    slug: "duo-zwischen",
    title: "Duo Zwischen",
    eyebrow: "Über das Duo",
    image: duoImg,
    imageFile: "annika-scharf-robert-im-hintergrund-standard-vgq1wm.jpg",
    alt: "Annika Spegg im Vordergrund, Robert Rülke im Hintergrund — Porträt des Duo Zwischen",
    paragraphs: [
      "Das Duo Zwischen gründete sich im Jahr 2022 an der Hochschule für Musik und Darstellende Kunst Stuttgart. Aus der Erfahrung mit dem großartigen Repertoire für zwei Violinen ist der Wunsch entsprungen, sich dieser Gattung ausführlich zu widmen. Schon in ihrem ersten Programm *Meister des Kontrapunkts* legte das Duo Zwischen großen Wert auf einen über die Einzelwerke hinausreichenden Sinnbogen. Mit *Wanderer, es gibt keinen Weg / Weg entsteht im Gehen* beschreiben die beiden Musiker:innen diesen Weg weiter.",
      "Im Jahr 2025 erhielten sie den zweiten Preis beim *Hugo-Wettbewerb* für innovative Konzertformate der Montforter Zwischentöne.",
      "Ein weiteres verbindendes Element neben dem Duospiel ist für die beiden Musiker:innen ihr politisches Engagement.",
    ],
  },
  {
    slug: "annika-spegg",
    title: "Annika Spegg",
    image: annikaImg,
    imageFile: "sehrgut-standard.jpg",
    alt: "Porträt von Annika Spegg",
    birthYear: 1998,
    imagePosition: "78% center",
    paragraphs: [
      "Annika Spegg (*1998) ist Musikerin und interdisziplinäre Künstlerin, die sich der Suche nach neuen künstlerischen Formaten verschrieben hat. Parallel zum Geigenstudium absolvierte sie ein Studium der Germanistik und Philosophie. Aktuell ist sie an der HMT Leipzig im Master Dramaturgie eingeschrieben; zuvor studierte sie im Master Violine an der HMDK Stuttgart, wo sie sich verstärkt der Neuen und der Alten Musik zuwendete und 2024 mit Auszeichnung abschloss.",
      "Eigene Musiktheater-Produktionen (darunter z.B. Pionier:in Ingolstadt (2022) und Kommentartheater (2024)), in denen sie als Dramaturgin, Darstellerin und Geigerin eingebunden ist, entstehen seit 2022. An der HMDK Stuttgart übernahm sie zwischen 2022 und 2024 mit Robert Rülke leitende Funktionen in der Klimabühne, die nach künstlerischen Antworten auf den Klimawandel sucht.",
      "Orchesterengagements führten sie ans Staatsorchester Stuttgart, Stuttgarter Kammerorchester, Gewandhaus Leipzig und Ensemble Resonanz Hamburg. Seit 2024 ist sie Stipendiatin der Akademie Musiktheater heute in der Sparte Dramaturgie. 2025 erhielt sie neben dem Stipendium der Gesellschaft für Musik und Ästhetik das #MusikerZukunft-Stipendium der Deutschen Orchesterstiftung für ihr feministisches Kammermusiktheater Faust.Margarete//Gretchen wants a full story, das 2026 in Leipzig und Stuttgart aufgeführt wird.",
    ],
  },
  {
    slug: "robert-ruelke",
    title: "Robert Rülke",
    image: robertImg,
    imageFile: "foto-f-r-bio-nr-39-standard-oidfvm.jpg",
    alt: "Porträt von Robert Rülke",
    birthYear: 1997,
    paragraphs: [
      "Robert Rülke (*1997) widmet sich einem breiten Spektrum von Musik, das von Komponist:innen wie Thomas Morley bis zu zeitgenössischen Uraufführungen reicht. Der gebürtige Berliner absolvierte sein Studium an der HMTM Hannover und an der HMDK Stuttgart, wo er 2024 das Masterstudium mit Auszeichnung abschloss.",
      "Seine Tätigkeit als Kammermusiker führte ihn unter anderem zu großen Musikfestivals wie dem tonART Festival Esslingen, dem Heidelberger Frühling und in den Thüringer Bachwochen. Zeitgenossenschaft ist für Robert Rülke ein wichtiges Thema, das sich in seinem breiten Repertoire für die Violin- und Kammermusikliteratur der Gegenwart, seinen interdisziplinären Programmen und seinem Engagement in künstlerisch-politischen Kontexten ausdrückt.",
      "Zurzeit ist er Mitglied im Duo Zwischen und dem ensemble aisthesis (KlangForum Heidelberg) und 2023 war er #MusikerZukunft-Stipendiat bei der Deutschen Orchesterstiftung mit einem Projekt zur jüdischen Exil-Komponistin Ursula Mamlok.",
    ],
  },
];
