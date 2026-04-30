import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Calendar, Clock, MapPin, Ticket, ExternalLink } from "lucide-react";
import { blurFor } from "@/lib/blur-data";
import { cn } from "@/lib/utils";

type Props = {
  index: number;
  dateLabel: string;
  city: string;
  venue?: string;
  title: string;
  image: StaticImageData;
  imageFile: string;
  alt: string;
  body: React.ReactNode;
  programLines?: string[];
  startTime?: string;
  entry?: string;
  infoUrl?: string;
  infoLabel?: string;
};

export function ConcertCard({
  index,
  dateLabel,
  city,
  venue,
  title,
  image,
  imageFile,
  alt,
  body,
  programLines,
  startTime,
  entry,
  infoUrl,
  infoLabel,
}: Props) {
  const reverse = index % 2 === 1;
  return (
    <article className={cn("reveal grid gap-10 md:gap-14 md:grid-cols-12 items-start")}>
      <div className={cn("md:col-span-5", reverse && "md:order-2")}>
        <div className="relative aspect-[4/5] w-full bg-[var(--line)] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            placeholder="blur"
            blurDataURL={blurFor(imageFile)}
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-7">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)] mb-3">
          <span className="inline-flex items-center gap-2">
            <Calendar size={15} aria-hidden /> {dateLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} aria-hidden /> {[venue, city].filter(Boolean).join(" · ")}
          </span>
          {startTime ? (
            <span className="inline-flex items-center gap-2">
              <Clock size={15} aria-hidden /> {startTime}
            </span>
          ) : null}
          {entry ? (
            <span className="inline-flex items-center gap-2">
              <Ticket size={15} aria-hidden /> Eintritt {entry}
            </span>
          ) : null}
        </div>

        <h2 className="mb-5">{title}</h2>

        <div className="prose-content space-y-4 text-[var(--fg)]">{body}</div>

        {programLines && programLines.length > 0 ? (
          <div className="mt-6 border-t border-[var(--line)] pt-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-3">
              Programm
            </p>
            <ul className="space-y-1.5 text-[var(--fg)]">
              {programLines.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {infoUrl ? (
          <p className="mt-6">
            <a
              href={infoUrl.startsWith("http") ? infoUrl : `https://${infoUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 link-underline text-[var(--accent)]"
            >
              {infoLabel ?? "Mehr Informationen"} <ExternalLink size={14} aria-hidden />
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}
